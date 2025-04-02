import { create } from "zustand";

type SnackbarState = {
  message: string;
  open: boolean;
  severity?: "success" | "info" | "warning" | "error";
  action?: React.ReactNode;
  showSnackbar: (
    message: string,
    severity?: SnackbarState["severity"],
    action?: React.ReactNode
  ) => void;
  hideSnackbar: () => void;
};

export const useSnackbarStore = create<SnackbarState>((set) => ({
  message: "",
  open: false,
  severity: "info",
  showSnackbar: (message, severity = "info", action) =>
    set({ message, severity, action, open: true }),
  hideSnackbar: () => set({ open: false }),
}));
