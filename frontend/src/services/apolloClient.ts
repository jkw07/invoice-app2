import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
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
      console.error(err);
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

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (
        err.extensions?.code === "UNAUTHENTICATED" ||
        err.message.includes("Unauthorized")
      ) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        useUserStore.getState().setUser(null);
        useSnackbarStore
          .getState()
          .showSnackbar("Użytkownik został wylogowany.", "warning");
        window.location.href = paths.HOME;
      }
    }
  }
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});
