import { useEffect } from "react";
import { useUserStore } from "../store/currentUserStore";
import { useSnackbarStore } from "../store/snackbarStore";
import { logoutUser } from "../services/authService";
import { Button } from "@mui/material";
import { IDLE_TIMEOUT, WARNING_TIMEOUT } from "../config/idleTimers";

//TODO spr czy jest remember me

export const IdleTimer = () => {
  const user = useUserStore((state) => state.user);
  const showSnackbar = useSnackbarStore((state) => state.showSnackbar);
  const hideSnackbar = useSnackbarStore((state) => state.hideSnackbar);

  useEffect(() => {
    if (!user) return;

    let logoutTimeout: ReturnType<typeof setTimeout>;
    let warningTimeout: ReturnType<typeof setTimeout>;

    const logout = async () => {
      await logoutUser();
    };

    const resetTimers = () => {
      clearTimeout(logoutTimeout);
      clearTimeout(warningTimeout);
      hideSnackbar();

      warningTimeout = setTimeout(() => {
        showSnackbar(
          "Brak aktywności. Wylogowanie za 1 minutę.",
          "warning",
          <Button color="inherit" size="small" onClick={resetTimers}>
            Zostań zalogowany
          </Button>
        );
      }, WARNING_TIMEOUT);

      logoutTimeout = setTimeout(() => {
        logout();
      }, IDLE_TIMEOUT);
    };

    const events = ["mousemove", "keydown", "scroll", "click", "touchstart"];
    events.forEach((event) =>
      window.addEventListener(event, resetTimers, { passive: true })
    );

    resetTimers();

    return () => {
      clearTimeout(logoutTimeout);
      clearTimeout(warningTimeout);
      events.forEach((event) => window.removeEventListener(event, resetTimers));
    };
  }, [user, showSnackbar, hideSnackbar]);

  return null;
};
