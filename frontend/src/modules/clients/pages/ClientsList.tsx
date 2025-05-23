import { ClientsTableGrid } from "../components/ClientsTableGrid";
import { UserRoundPlus } from "lucide-react";
import "../../../styles/tables.scss";
import { NavLink } from "react-router-dom";
import { Alert, Button } from "@mui/material";
import { useUserStore } from "../../../store/currentUserStore";

export const ClientsList = () => {
  const { company } = useUserStore();
  if (!company?.id) {
    return (
      <>
        <h1>Lista klientów</h1>
        <div className="actions-container">
          <Alert severity="error">
            Brak firmy. Proszę dodać firmę, aby móc wyświetlić listę.
          </Alert>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>Lista klientów</h1>
      <div className="actions-container">
        <NavLink to="/clients/new" className="link-button">
          <Button variant="contained" startIcon={<UserRoundPlus />}>
            Dodaj klienta
          </Button>
        </NavLink>
      </div>
      <div className="table-container">
        <ClientsTableGrid />
      </div>
    </>
  );
};
