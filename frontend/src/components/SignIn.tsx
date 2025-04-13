import {
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
  Container,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigation } from "../hooks/useNavigation";
import logo from "../assets/logo1mini.png";
import { ForgotPassword } from "./ForgotPassword";
import { SignUp } from "./SignUp";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/mutations/authMutations";
import { handleGraphqlLogin } from "../graphql/services/authService";
import { translateError } from "../utils/translateError";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
} from "../utils/tokenStorage";
import { refreshAccessToken } from "../api/refreshAccessToken";
import { useUserStore } from "../store/currentUserStore";

export const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPasswordDialogOpen, setForgotPasswordDialogOpen] =
    useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginAlert, setLoginAlert] = useState<string | null>(null);
  const { goToInvoicesModule } = useNavigation();
  const [login, { loading }] = useMutation(LOGIN_MUTATION);

  const handleOpenPasswordReminder = () => {
    setForgotPasswordDialogOpen(true);
  };

  const handleClosePasswordReminder = () => {
    setForgotPasswordDialogOpen(false);
  };

  const handleOpenSignUp = () => {
    setSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setSignUpOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    const autoLogin = async () => {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      const userFromStorage = localStorage.getItem("user");

      if (accessToken && refreshToken && userFromStorage) {
        try {
          await refreshAccessToken();

          const user = JSON.parse(userFromStorage);
          useUserStore.getState().setUser(user);

          goToInvoicesModule();
        } catch (error) {
          console.error("Auto-login failed, clearing tokens:", error);
          clearTokens();
          localStorage.removeItem("user");
          localStorage.removeItem("company");
          useUserStore.getState().setUser(null);
        }
      }
    };
    autoLogin();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    setLoginAlert(null);
    try {
      const res = await login({ variables: { data: state } });
      const { accessToken, refreshToken } = res.data.login;
      handleGraphqlLogin({ accessToken, refreshToken }, rememberMe);
      goToInvoicesModule();
    } catch (error) {
      console.error("Login failed: ", error);
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setLoginAlert(translated);
      setState({
        email: "",
        password: "",
      });
      setShowPassword(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="main-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <h2>Logowanie do programu Faktury</h2>
        {loginAlert !== null && <Alert severity="error">{loginAlert}</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            required
            label="Email"
            margin="normal"
            name="email"
            variant="outlined"
            fullWidth
            autoComplete="username"
            type="email"
            autoFocus
            value={state.email}
            onChange={handleChange}
          />

          <TextField
            label="Hasło"
            margin="normal"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            autoComplete="current-password"
            required
            fullWidth
            value={state.password}
            onChange={handleChange}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Zapamiętaj"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? "Logowanie..." : "Zaloguj"}
          </Button>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Link
            component="button"
            type="button"
            onClick={handleOpenPasswordReminder}
            variant="body2"
            sx={{ alignSelf: "center" }}
          >
            Przypomnij hasło
          </Link>
          <ForgotPassword
            open={forgotPasswordDialogOpen}
            handleClose={handleClosePasswordReminder}
          />
          <div className="links-container">
            <Divider>Nie masz jeszcze konta?</Divider>
            <Link
              component="button"
              type="button"
              onClick={handleOpenSignUp}
              variant="body2"
              sx={{ alignSelf: "center" }}
            >
              Zarejestruj się
            </Link>
            <SignUp open={signUpOpen} handleClose={handleCloseSignUp} />
          </div>
        </Box>
      </Box>
    </Container>
  );
};
