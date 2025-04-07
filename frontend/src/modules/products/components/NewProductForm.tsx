import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Save, RotateCcw } from "lucide-react";
import { AddProductVariables } from "../../../graphql/types/product";
import { useState } from "react";
import { VatRateType } from "../../../graphql/types/enums";

type AddProductInput = AddProductVariables["input"];

interface NewProductFormProps {
  formData: AddProductInput;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
  handleSelectChange: (name: string, value: string | number | null) => void;
  hasReset?: boolean;
  loading?: boolean;
}
export const NewProductForm = ({
  formData,
  handleSubmit,
  handleChange,
  handleReset,
  hasReset = false,
  handleSelectChange,
  loading,
}: NewProductFormProps) => {
  const [vatSelectValue, setVatSelectValue] = useState<string | number>(23);
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
        required
        type="number"
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
      <FormControl fullWidth margin="normal" sx={{ background: "white" }}>
        <InputLabel id="vat-rate-label">Stawka VAT</InputLabel>
        <Select
          labelId="vat-rate-label"
          id="vatRateSelect"
          value={vatSelectValue}
          label="Stawka VAT"
          onChange={(e) => {
            const selectedValue = e.target.value;
            setVatSelectValue(selectedValue);
            if (selectedValue === "zw") {
              handleSelectChange("taxType", VatRateType.EXEMPT);
              handleSelectChange("taxRate", null);
            } else if (selectedValue === "np") {
              handleSelectChange("taxType", VatRateType.NOT_TAXED);
              handleSelectChange("taxRate", null);
            } else {
              handleSelectChange("taxType", VatRateType.STANDARD);
              handleSelectChange("taxRate", Number(selectedValue));
            }
          }}
        >
          <MenuItem value="zw">zw</MenuItem>
          <MenuItem value="np">np</MenuItem>
          <MenuItem value={0}>0%</MenuItem>
          <MenuItem value={5}>5%</MenuItem>
          <MenuItem value={8}>8%</MenuItem>
          <MenuItem value={23}>23%</MenuItem>
        </Select>
      </FormControl>
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
          {loading ? "Dodawanie produktu..." : "Zapisz"}
        </Button>
        {hasReset && (
          <Button
            variant="outlined"
            startIcon={<RotateCcw />}
            onClick={handleReset}
          >
            Wyczyść
          </Button>
        )}
      </div>
    </Box>
  );
};
