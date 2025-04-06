import { ProductsTableGrid } from "../components/ProductsTableGrid";
import { PackagePlus } from "lucide-react";
import "../../../styles/tables.scss";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export const ProductsList = () => {
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
