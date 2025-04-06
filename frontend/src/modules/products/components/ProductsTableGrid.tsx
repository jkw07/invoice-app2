import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import { Alert, Box, Button, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { filterData } from "../../../utils/filterData";
import { tableColsProducts } from "./tableCols";
import { Search } from "lucide-react";
import { useUserStore } from "../../../store/currentUserStore";
import { ProductFull } from "../../../graphql/types/product";
import { useNavigate } from "react-router-dom";
import { useProductsByCompany } from "../../../graphql/services/productService";

export const ProductsTableGrid = () => {
  const { company } = useUserStore();
  const [productsData, setProductsData] = useState<ProductFull[]>([]);
  const [filteredData, setFilteredData] = useState<ProductFull[]>([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleGoToEditProductForm = (id: string) => {
    navigate(`/products/edit/${id}`);
  };

  const handleDeleteProduct = (id: string) => {
    console.log("Delete product with ID:", id);
  };

  const handleGoToProductInfo = (id: string) => {
    navigate(`/products/info/${id}`);
  };

  //TODO VAT

  const columns = tableColsProducts({
    handleDeleteProduct,
    handleGoToEditProductForm,
    handleGoToProductInfo,
  });
  const {
    data: productsList,
    loading,
    error,
    refetch,
  } = useProductsByCompany(company?.id);

  useEffect(() => {
    if (productsList?.getProductsByCompany) {
      setProductsData(productsList.getProductsByCompany);
      setFilteredData(productsList.getProductsByCompany);
    }
  }, [productsList]);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredData(productsData);
    } else {
      const filtered = filterData(productsData, searchText);
      setFilteredData(filtered);
    }
  }, [searchText, productsData]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (
    <>
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
