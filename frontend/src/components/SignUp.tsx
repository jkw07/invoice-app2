import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Alert,
} from "@mui/material";
import { Check, ClipboardPen, X } from "lucide-react";
import { useEffect, useState } from "react";
import { REGISTER_MUTATION } from "../graphql/mutations/authMutations";
import { useMutation } from "@apollo/client";
import { translateError } from "../utils/translateError";
import { CircularProgress } from "@mui/material";

interface SignUpProps {
  open: boolean;
  handleClose: () => void;
}

type AlertData = {
  severity: "success" | "error" | "info" | "warning";
  message: string;
};

export const SignUp = ({ open, handleClose }: SignUpProps) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [register, { loading }] = useMutation(REGISTER_MUTATION);
  const [registerAlert, setRegisterAlert] = useState<AlertData | null>(null);
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasNumber: false,
    hasUppercase: false,
  });

  const isPasswordValid =
    passwordValidation.minLength &&
    passwordValidation.hasNumber &&
    passwordValidation.hasUppercase;

  const validatePassword = (password: string) => {
    setPasswordValidation({
      minLength: password.length >= 6,
      hasNumber: /\d/.test(password),
      hasUppercase: /[A-Z]/.test(password),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "password") {
      validatePassword(value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async () => {
    try {
      await register({ variables: { data: state } });
      setRegisterAlert({
        severity: "success",
        message: "Rejestracja powiodła się. Możesz się zalogować.",
      });
    } catch (error) {
      console.error("Registration failed: ", error);
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setRegisterAlert({
        severity: "error",
        message: `${translated}`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister();
  };

  useEffect(() => {
    if (open) {
      setRegisterAlert(null);
      setState({ email: "", password: "" });
      setShowPassword(false);
      setPasswordValidation({
        minLength: false,
        hasNumber: false,
        hasUppercase: false,
      });
    }
  }, [open]);

  useEffect(() => {
    if (registerAlert?.severity === "success") {
      const timer = setTimeout(() => {
        handleClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [registerAlert, handleClose]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: "form",
          onSubmit: handleSubmit,
          sx: { backgroundImage: "none", width: "600px" },
        },
      }}
    >
      <DialogTitle>
        <ClipboardPen color="#1976d2" size={40} />
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "90%" }}
      >
        {loading ? (
          <CircularProgress size={50} thickness={5} />
        ) : (
          <>
            {registerAlert !== null && (
              <Alert severity={registerAlert.severity}>
                {registerAlert.message}
              </Alert>
            )}
            {!registerAlert && (
              <>
                <DialogContentText>
                  Wpisz swój adres email oraz zdefiniuj hasło.
                </DialogContentText>
                <TextField
                  required
                  label="Email"
                  margin="normal"
                  name="email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  autoComplete="username"
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
                  autoComplete="new-password"
                  required
                  fullWidth
                  value={state.password}
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </>
            )}
          </>
        )}
        <DialogContentText
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {passwordValidation.minLength ? (
            <Check color="green" />
          ) : (
            <X color="red" />
          )}
          Co najmniej 6 znaków
        </DialogContentText>
        <DialogContentText
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {passwordValidation.hasNumber ? (
            <Check color="green" />
          ) : (
            <X color="red" />
          )}
          Co najmniej jedna cyfra
        </DialogContentText>
        <DialogContentText
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {passwordValidation.hasUppercase ? (
            <Check color="green" />
          ) : (
            <X color="red" />
          )}
          Co najmniej jedna wielka litera
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>
          {registerAlert ? "Wyjdź" : "Anuluj"}
        </Button>
        {!registerAlert && (
          <Button
            variant="contained"
            type="submit"
            disabled={!isPasswordValid || loading}
          >
            {loading ? "Zakładanie konta..." : "Załóż konto"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
