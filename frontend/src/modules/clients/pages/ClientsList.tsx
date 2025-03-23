import { DefaultButton } from "../../../components/DefaultButton";
import { ClientsTableGrid } from "../components/ClientsTableGrid";
import { UserRoundPlus } from "lucide-react";
import "../../../styles/clientsList.scss";
import { NavLink } from "react-router-dom";
import { SearchInput } from "../components/SearchInput";

export const ClientsList = () => {
  return (
    <>
        <h1>Lista klientów</h1>
      <div className="clients-actions-container">
        <NavLink to="/clients/new" className="link-button">
          <DefaultButton text="Dodaj klienta" icon={<UserRoundPlus />} />
        </NavLink>
      </div>
      <div className="clients-table-container">
        <SearchInput />
        <ClientsTableGrid />
      </div>
    </>
  );
};
