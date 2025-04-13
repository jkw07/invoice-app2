import {
  Alert,
  AlertColor,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AlertDialog } from "../../../components/AlertDialog";
import { EditProductForm } from "../components/EditProductForm";
import { ProductFull } from "../../../graphql/types/product";
import {
  useProductById,
  useUpdateProduct,
} from "../../../graphql/services/productService";
import { safeId } from "../../../utils/safeId";
import { translateError } from "../../../utils/translateError";
import { useNavigation } from "../../../hooks/useNavigation";

interface AlertType {
  severity: AlertColor | undefined;
  message: string;
}

export const EditProduct = () => {
  const { id: productIdFromUrl } = useParams();
  const productId = safeId(productIdFromUrl);
  const [formData, setFormData] = useState<ProductFull>({} as ProductFull);
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState<AlertType>({
    severity: undefined,
    message: "",
  });
  const [updatedFields, setUpdatedFields] = useState<Partial<ProductFull>>({});
  const { goToProductsModule } = useNavigation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = value === "" ? null : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
    setUpdatedFields((prevFields) => ({
      ...prevFields,
      [name]: newValue,
    }));
  };

  const handleSelectChange = (name: string, value: string | number | null) => {
    const newValue = value === "" ? null : value;
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    setUpdatedFields((prevFields) => ({
      ...prevFields,
      [name]: newValue,
    }));
  };

  const {
    data: productData,
    loading,
    error,
    refetch,
  } = useProductById(productId);

  useEffect(() => {
    if (productData?.getProductById) {
      setFormData(productData.getProductById);
    }
  }, [productData]);

  const [updateProduct] = useUpdateProduct();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (productId) {
        await updateProduct({
          variables: {
            productId: productId,
            input: updatedFields,
          },
        });
        setAlert({
          severity: "success",
          message: "Dane produktu zostały zaktualizowane pomyślnie.",
        });
      } else {
        setAlert({
          severity: "error",
          message: "Błąd: nie znaleziono produktu.",
        });
        setOpenDialog(true);
        return;
      }
    } catch (error) {
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setAlert({ severity: "error", message: `Błąd: ${translated}` });
    } finally {
      setOpenDialog(true);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    goToProductsModule();
  };

  return (
    <>
      <h2>Edytuj dane produktu</h2>
      <NavLink to="/products" className="link-button">
        <Button>Powrót</Button>
      </NavLink>
      {loading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {error && !loading && (
        <Alert
          severity="error"
          action={
            <Button
              color="inherit"
              size="small"
              disabled={loading}
              onClick={() => refetch()}
            >
              Spróbuj ponownie
            </Button>
          }
          sx={{ mb: 2 }}
        >
          Nie udało się załadować danych produktu.
        </Alert>
      )}
      <EditProductForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        loading={loading}
      />
      <AlertDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        alertSeverity={alert.severity}
        alertMessage={alert.message}
      />
    </>
  );
};
