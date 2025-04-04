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
import { ClipboardPen } from "lucide-react";
import { useState } from "react";
import { REGISTER_MUTATION } from "../graphql/mutations/authMutations";
import { useMutation } from "@apollo/client";

interface SignUpProps {
  open: boolean;
  handleClose: () => void;
}

export const SignUp = ({ open, handleClose }: SignUpProps) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [register] = useMutation(REGISTER_MUTATION);
  const [registerError, setRegisterError] = useState({
    error: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setState((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleRegister = async () => {
    setLoading(true);
    setRegisterError({
      error: false,
      message: "",
    });
    try {
      await register({ variables: { data: state } });
      handleClose();
    } catch (error) {
      console.error("Registration failed: ", error);
      setRegisterError({
        error: true,
        message: (error as Error).message || "An unknown error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister();
  };

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
        <DialogContentText>
          Wpisz swój adres email oraz zdefiniuj hasło.
          {registerError.error && (
            <Alert severity="error">
              Rejestracja nie powiodła się: {registerError.message}
            </Alert>
          )}
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
          type={state.showPassword ? "text" : "password"}
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
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Anuluj</Button>
        <Button variant="contained" type="submit">
          {loading ? "Zakładanie konta..." : "Załóż konto"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
