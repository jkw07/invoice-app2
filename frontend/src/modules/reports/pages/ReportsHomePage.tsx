import { Alert } from "@mui/material";
import { useUserStore } from "../../../store/currentUserStore";

export const ReportsHomePage = () => {
  const { company } = useUserStore();
  if (!company?.id) {
    return (
      <>
        <h1>Powiadomienia</h1>
        <div className="actions-container">
          <Alert severity="error">
            Brak firmy. Proszę dodać firmę, aby wyświetlić raporty.
          </Alert>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>Raporty</h1>
    </>
  );
};
