import { getRefreshToken, saveTokens } from "../utils/tokenStorage";

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) throw new Error("No refresh token");

  const response = await fetch(import.meta.env.VITE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        mutation RefreshToken($refreshToken: String!) {
          refreshToken(refreshToken: $refreshToken) {
            accessToken
            refreshToken
          }
        }
      `,
      variables: { refreshToken },
    }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error("Refresh token failed");
  }

  const { accessToken, refreshToken: newRefreshToken } =
    result.data.refreshToken;

  const rememberMe = !!localStorage.getItem("refreshToken");
  saveTokens(accessToken, newRefreshToken, rememberMe);

  return accessToken;
};
