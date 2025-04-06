import { ClientsTableGrid } from "../components/ClientsTableGrid";
import { UserRoundPlus } from "lucide-react";
import "../../../styles/tables.scss";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export const ClientsList = () => {
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
