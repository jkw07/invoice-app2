import { create } from "zustand";

type SnackbarState = {
  message: string;
  open: boolean;
  severity?: "success" | "info" | "warning" | "error";
  showSnackbar: (message: string, severity?: SnackbarState["severity"]) => void;
  hideSnackbar: () => void;
};

export const useSnackbarStore = create<SnackbarState>((set) => ({
  message: "",
  open: false,
  severity: "info",
  showSnackbar: (message, severity = "info") =>
    set({ message, severity, open: true }),
  hideSnackbar: () => set({ open: false }),
}));
