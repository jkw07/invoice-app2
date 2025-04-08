import { Alert, Box, CircularProgress, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../styles/buttons.scss";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useProductById } from "../../../graphql/services/productService";
import { safeId } from "../../../utils/safeId";
import { useNavigate } from "react-router-dom";
import { VatRateType } from "../../../graphql/types/enums";

export const ProductInfo = () => {
  const { id: productIdFromUrl } = useParams();
  const productId = safeId(productIdFromUrl);
  const { data: formData, loading, error, refetch } = useProductById(productId);
  const navigate = useNavigate();

  const handleGoToEditProductForm = (id: string) => {
    navigate(`/products/edit/${id}`);
  };

  const formatVatType = (vatType: VatRateType) => {
    if (vatType === VatRateType.NOT_TAXED) return "np";
    if (vatType === VatRateType.EXEMPT) return "zw";
    return "";
  };

  return (
    <>
      <h2>Dane produktu</h2>
      <Box sx={{ display: "flex", gap: 2 }}>
        <NavLink to="/clients" className="link-button">
          <Button>Powrót</Button>
        </NavLink>
        <Button onClick={() => handleGoToEditProductForm(`${productId}`)}>
          Edytuj
        </Button>
      </Box>
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
      <Box sx={{ width: "60%" }}>
        <TextField
          required
          type="text"
          name="name"
          value={formData?.getProductById.name}
          disabled={true}
          label="Nazwa produktu"
          margin="normal"
          variant="outlined"
          fullWidth
          sx={{ background: "white" }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          required
          type="text"
          name="description"
          value={formData?.getProductById.description}
          disabled={true}
          label="Opis"
          margin="normal"
          variant="outlined"
          fullWidth
          sx={{ background: "white" }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          type="text"
          name="price"
          value={formData?.getProductById.price}
          disabled={true}
          label="Cena jednostkowa"
          margin="normal"
          variant="outlined"
          fullWidth
          sx={{ background: "white" }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          type="text"
          name="unit"
          value={formData?.getProductById.unit}
          disabled={true}
          label="Jednostka miary"
          margin="normal"
          variant="outlined"
          fullWidth
          sx={{ background: "white" }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        {formData?.getProductById.vatRate &&
          formData.getProductById.vatRate.type !== VatRateType.STANDARD && (
            <TextField
              type="text"
              name="taxType"
              value={formatVatType(formData.getProductById.vatRate.type)}
              disabled={true}
              label="Stawka VAT"
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ background: "white" }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          )}
        {formData?.getProductById.vatRate.type === VatRateType.STANDARD && (
          <TextField
            type="text"
            name="taxRate"
            value={formData?.getProductById.vatRate.rate}
            disabled={true}
            label="Stawka VAT"
            margin="normal"
            variant="outlined"
            fullWidth
            sx={{ background: "white" }}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        )}
      </Box>
    </>
  );
};
