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

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("accessToken");
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
