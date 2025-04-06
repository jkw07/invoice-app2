import { AlertColor } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/buttons.scss";
import { AlertDialog } from "../../../components/AlertDialog";
import Button from "@mui/material/Button";
import { ProductForm } from "../components/ProductForm";
import { ProductFull } from "../../../graphql/types/product";

export const NewProduct = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertMessage, setAlertMessage] = useState("");
  const [newProductData, setNewProductData] = useState<ProductFull>(
    {} as ProductFull
  );

  const resetNewProductData = () => {
    setNewProductData({} as ProductFull);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProductData({ ...newProductData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlertSeverity("success");
    setAlertMessage("Klient został dodany pomyślnie.");
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <h2>Nowy produkt</h2>
      <NavLink to="/products" className="link-button">
        <Button>Powrót</Button>
      </NavLink>
      <ProductForm
        formData={newProductData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleReset={resetNewProductData}
        hasReset={true}
      />
      <AlertDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        alertSeverity={alertSeverity}
        alertMessage={alertMessage}
      />
    </>
  );
};
