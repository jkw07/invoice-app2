import { Alert, AlertColor } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/buttons.scss";
import { AlertDialog } from "../../../components/AlertDialog";
import Button from "@mui/material/Button";
import { AddProductVariables } from "../../../graphql/types/product";
import { VatRateType } from "../../../graphql/types/enums";
import { NewProductForm } from "../components/NewProductForm";
import { useUserStore } from "../../../store/currentUserStore";
import { useAddProduct } from "../../../graphql/services/productService";
import { useNavigation } from "../../../hooks/useNavigation";
import { useSnackbarStore } from "../../../store/snackbarStore";
import { safeId } from "../../../utils/safeId";
import { GET_PRODUCTS_BY_COMPANY } from "../../../graphql/queries/productQueries";

type AddProductInput = AddProductVariables["input"];
const emptyProduct: AddProductInput = {
  companyId: 0,
  name: "",
  description: null,
  price: 0,
  unit: "",
  taxType: VatRateType.STANDARD,
  taxRate: 23,
};

export const NewProduct = () => {
  const companyId = useUserStore((state) => state.company?.id);
  const [openDialog, setOpenDialog] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertMessage, setAlertMessage] = useState("");

  const [newProductData, setNewProductData] =
    useState<AddProductInput>(emptyProduct);
  const { showSnackbar } = useSnackbarStore();
  const [addProduct, { loading }] = useAddProduct();
  const [onError, setOnError] = useState(false);
  const { goToProductsModule } = useNavigation();

  const resetNewProductData = () => {
    setNewProductData(emptyProduct);
  };

  //TODO spr czy nie wysyla sie "" [name]: value === "" ? null : value,
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string | number | null) => {
    setNewProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    goToProductsModule();
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId) {
      showSnackbar("Brak przypisanej firmy. Spróbuj ponownie.", "error");
      return;
    }
    const fullProductData: AddProductInput = {
      ...newProductData,
      price: Number(newProductData.price),
      taxRate: newProductData.taxRate ? Number(newProductData.taxRate) : null,
      companyId: safeId(companyId),
    };
    handleAddNewProduct(fullProductData);
  };

  const handleAddNewProduct = async (formValues: AddProductInput) => {
    try {
      await addProduct({
        variables: { input: formValues },
        refetchQueries: [GET_PRODUCTS_BY_COMPANY],
        onCompleted: (data) => {
          setAlertSeverity("success");
          setAlertMessage(`Produkt ${data.addProduct.name} został dodany!`);
          setOpenDialog(true);
        },
        onError: (error) => {
          console.error("Błąd:", error.message);
          setOnError(true);
        },
      });
    } catch (error) {
      console.error("Coś poszło nie tak:", error);
      setOnError(true);
    } finally {
      setNewProductData(emptyProduct);
      setOnError(false);
    }
  };

  return (
    <>
      <AlertDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        alertSeverity={alertSeverity}
        alertMessage={alertMessage}
      />
      <h2>Nowy produkt</h2>
      {onError && <Alert severity="error">Operacja nie powiodła się.</Alert>}
      <NavLink to="/products" className="link-button">
        <Button>Powrót</Button>
      </NavLink>
      <NewProductForm
        formData={newProductData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleReset={resetNewProductData}
        hasReset={true}
        handleSelectChange={handleSelectChange}
        loading={loading}
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
