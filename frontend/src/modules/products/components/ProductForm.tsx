import { Box, Button, TextField } from "@mui/material";
import { Save, RotateCcw } from "lucide-react";
import { ProductFull } from "../../../graphql/types/product";
import { VatRateType } from "../../../graphql/types/enums";

interface ProductFormProps {
  formData: ProductFull;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
  hasReset?: boolean;
}
export const ProductForm = ({
  formData,
  handleSubmit,
  handleChange,
  handleReset,
  hasReset = false,
}: ProductFormProps) => {
  const formatTaxRate = (taxType: VatRateType) => {
    if (taxType === "NOT_TAXED") return "np";
    if (taxType === "EXEMPT") return "zw";
    return "";
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "60%" }}>
      <TextField
        required
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
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
        value={formData.description}
        onChange={handleChange}
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
        value={formData.price}
        onChange={handleChange}
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
        value={formData.unit}
        onChange={handleChange}
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
      {formData.taxType !== "STANDARD" && (
        <TextField
          type="text"
          name="taxType"
          value={formatTaxRate(formData.taxType)}
          onChange={handleChange}
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
      {formData.taxType === "STANDARD" && (
        <TextField
          type="text"
          name="taxRate"
          value={formData.taxRate}
          onChange={handleChange}
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
      <div
        className="buttons-container"
        style={{
          display: "flex",
          gap: 20,
          marginTop: "20px",
          justifyContent: "end",
        }}
      >
        <Button
          variant="contained"
          startIcon={<Save />}
          type="submit"
          color="success"
        >
          Zapisz
        </Button>
        {hasReset && (
          <Button
            variant="outlined"
            startIcon={<RotateCcw />}
            type="reset"
            onClick={handleReset}
          >
            Wyczyść
          </Button>
        )}
      </div>
    </Box>
  );
};
