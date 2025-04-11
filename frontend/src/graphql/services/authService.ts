import { useUserStore } from "../../store/currentUserStore";
import { clearTokens, saveTokens } from "../../utils/tokenStorage";

type LoginData = {
  accessToken: string;
  refreshToken: string;
};

type DecodedUser = {
  sub: string;
  email: string;
};

export const handleGraphqlLogin = (tokens: LoginData, rememberMe: boolean) => {
  saveTokens(tokens.accessToken, tokens.refreshToken, rememberMe);

  const user: DecodedUser = JSON.parse(atob(tokens.accessToken.split(".")[1]));

  useUserStore.getState().setUser({
    id: user.sub,
    email: user.email,
  });
};

export const logoutUser = () => {
  useUserStore.getState().setUser(null);
  useUserStore.getState().setCompany(null);
  clearTokens();
};
