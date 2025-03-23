import { Snackbar, Alert } from "@mui/material";
import { useSnackbarStore } from "../store/snackbarStore";

export const AppSnackbar = () => {
  const { message, open, severity, hideSnackbar } = useSnackbarStore();

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={hideSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={hideSnackbar} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};
