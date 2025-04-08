import { Alert, AlertColor, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/buttons.scss";
import { AlertDialog } from "../../../components/AlertDialog";
import Button from "@mui/material/Button";
import { EditProductForm } from "../components/EditProductForm";
import { useParams } from "react-router-dom";
import { ProductFull } from "../../../graphql/types/product";
import { useProductById } from "../../../graphql/services/productService";
import { safeId } from "../../../utils/safeId";

export const EditProduct = () => {
  const { id: productIdFromUrl } = useParams();
  const productId = safeId(productIdFromUrl);
  const [formData, setFormData] = useState<ProductFull>({} as ProductFull);
  const [openDialog, setOpenDialog] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value === "" ? null : value,
    }));
  };

  const handleSelectChange = (name: string, value: string | number | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? null : value,
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

  const updateProduct = async (productId: number, formData: ProductFull) => {
    console.log("Updating client with ID:", productId, formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (productId) {
        await updateProduct(productId, formData);
      } else {
        setAlertSeverity("error");
        setAlertMessage("Nieprawidłowy identyfikator klienta.");
        setOpenDialog(true);
      }
      setAlertSeverity("success");
      setAlertMessage("Dane klienta zostały zaktualizowane pomyślnie.");
    } catch (error) {
      setAlertSeverity("error");
      setAlertMessage("Wystąpił błąd podczas aktualizacji danych.");
      console.log(error);
    } finally {
      setOpenDialog(true);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
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
          Wystąpił błąd: {error.message}
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
        alertSeverity={alertSeverity}
        alertMessage={alertMessage}
      />
    </>
  );
};
