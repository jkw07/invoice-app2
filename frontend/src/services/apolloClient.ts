import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { paths } from "../utils/paths";
import { useSnackbarStore } from "../store/snackbarStore";
import { useUserStore } from "../store/currentUserStore";
import { clearTokens, getAccessToken } from "../utils/tokenStorage";
import { refreshAccessToken } from "../api/refreshAccessToken";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

let isRefreshing = false;
let pendingRequests: (() => void)[] = [];

const resolvePendingRequests = () => {
  pendingRequests.forEach((callback) => callback());
  pendingRequests = [];
};

const authLink = setContext(async (_, { headers }) => {
  let token = getAccessToken();
  if (!token && !isRefreshing) {
    isRefreshing = true;

    try {
      token = await refreshAccessToken();
      resolvePendingRequests();
    } catch (err) {
      console.error("Refresh token error (authLink):", err);
      pendingRequests = [];
      clearTokens();
    } finally {
      isRefreshing = false;
    }
  }

  if (!token && isRefreshing) {
    await new Promise<void>((resolve) => {
      pendingRequests.push(resolve);
    });
    token = getAccessToken();
  }

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    console.error("Apollo error:", graphQLErrors);
    for (const err of graphQLErrors) {
      if (err.extensions?.code === "UNAUTHENTICATED") {
        const operationName = operation.operationName;

        if (operationName === "Login" || operationName === "Register") {
          console.warn("Login/Register unauthorized - invalid credentials.");
          return;
        }
        if (!isRefreshing) {
          isRefreshing = true;

          return fromPromise(
            refreshAccessToken()
              .then((newAccessToken) => {
                resolvePendingRequests();
                const oldHeaders = operation.getContext().headers || {};
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    Authorization: `Bearer ${newAccessToken}`,
                  },
                });
                return;
              })
              .catch((refreshError) => {
                console.error("Refresh token error (errorLink):", refreshError);
                pendingRequests = [];
                clearTokens();
                localStorage.removeItem("user");
                localStorage.removeItem("companyId");
                useUserStore.getState().setUser(null);
                useUserStore.getState().setCompany(null);
                useSnackbarStore
                  .getState()
                  .showSnackbar("Użytkownik został wylogowany.", "warning");
                window.location.href = paths.HOME;
                return;
              })
              .finally(() => {
                isRefreshing = false;
              })
          )
            .filter(Boolean)
            .flatMap(() => forward(operation));
        } else {
          return fromPromise(
            new Promise<void>((resolve) => {
              pendingRequests.push(resolve);
            })
          )
            .filter(Boolean)
            .flatMap(() => forward(operation));
        }
      }
    }
  }
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});
