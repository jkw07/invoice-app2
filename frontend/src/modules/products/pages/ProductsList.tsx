import { ProductsTableGrid } from "../components/ProductsTableGrid";
import { PackagePlus } from "lucide-react";
import "../../../styles/tables.scss";
import { NavLink } from "react-router-dom";
import { Alert, Button } from "@mui/material";
import { useUserStore } from "../../../store/currentUserStore";

export const ProductsList = () => {
  const { company } = useUserStore();

  if (!company?.id) {
    return (
      <>
        <h1>Lista produktów</h1>
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
      <h1>Lista produktów</h1>
      <div className="actions-container">
        <NavLink to="/products/new" className="link-button">
          <Button variant="contained" startIcon={<PackagePlus />}>
            Dodaj produkt
          </Button>
        </NavLink>
      </div>
      <div className="table-container">
        <ProductsTableGrid />
      </div>
    </>
  );
};
