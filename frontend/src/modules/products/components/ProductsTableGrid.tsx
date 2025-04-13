import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import {
  Alert,
  AlertColor,
  Box,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { filterData } from "../../../utils/filterData";
import { tableColsProducts } from "./tableCols";
import { Search } from "lucide-react";
import { useUserStore } from "../../../store/currentUserStore";
import { useNavigate } from "react-router-dom";
import {
  useDeleteProduct,
  useProductsByCompany,
} from "../../../graphql/services/productService";
import { AlertDialog } from "../../../components/AlertDialog";
import { safeId } from "../../../utils/safeId";
import { translateError } from "../../../utils/translateError";

interface AlertType {
  severity: AlertColor | undefined;
  message: string;
}

export const ProductsTableGrid = () => {
  const { company } = useUserStore();
  const [searchText, setSearchText] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState<AlertType>({
    severity: undefined,
    message: "",
  });
  const navigate = useNavigate();
  const [productId, setProductId] = useState<number>(0);
  const [deleteProduct] = useDeleteProduct();
  const [hasConfirm, setHasConfirm] = useState(false);

  const {
    data: productsList,
    loading,
    error,
    refetch,
  } = useProductsByCompany(company?.id);

  const filteredData = searchText.trim()
    ? filterData(productsList?.getProductsByCompany || [], searchText)
    : productsList?.getProductsByCompany || [];

  const handleOpenDeleteProductDialog = (id: string) => {
    setAlert({
      severity: "warning",
      message: "Czy na pewno chcesz usunąć ten produkt?",
    });
    setHasConfirm(true);
    setProductId(safeId(id));
    setOpenDialog(true);
  };

  const handleGoToEditProductForm = (id: string) => {
    navigate(`/products/edit/${id}`);
  };

  const handleConfirmDelete = () => {
    handleDeleteProduct(productId);
  };

  const handleDeleteProduct = async (productId: number) => {
    try {
      await deleteProduct({
        variables: {
          productId,
        },
        onCompleted: (data) => {
          setOpenDialog(false);
          setHasConfirm(false);
          setAlert({
            severity: "success",
            message: `Produkt ${data.deleteProduct.name} został usunięty.`,
          });
          setOpenDialog(true);
        },
      });
      await refetch();
    } catch (error) {
      setOpenDialog(false);
      setHasConfirm(false);
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setAlert({ severity: "error", message: `Błąd: ${translated}` });
      setOpenDialog(true);
    }
  };

  const handleGoToProductInfo = (id: string) => {
    navigate(`/products/info/${id}`);
  };

  const columns = tableColsProducts({
    handleOpenDeleteProductDialog,
    handleGoToEditProductForm,
    handleGoToProductInfo,
  });

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <AlertDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        alertSeverity={alert.severity}
        alertMessage={alert.message}
        {...(hasConfirm ? { handleConfirm: handleConfirmDelete } : {})}
      />
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
      <TextField
        label="Szukaj"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleSearchChange}
        sx={{
          marginBottom: 2,
          width: "100%",
          background: "white",
          marginTop: 2,
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} />
              </InputAdornment>
            ),
          },
        }}
      />
      <Box sx={{ width: "100%", background: "white" }}>
        <DataGrid
          rows={filteredData}
          loading={loading}
          slotProps={{
            loadingOverlay: loading
              ? {
                  variant: "linear-progress",
                  noRowsVariant: "linear-progress",
                }
              : undefined,
          }}
          columns={columns}
          columnHeaderHeight={56}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 30, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </>
  );
};
