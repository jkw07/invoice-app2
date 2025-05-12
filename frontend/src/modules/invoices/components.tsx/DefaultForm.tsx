import {
  Box,
  Button,
  Divider,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import { Save, RotateCcw, Trash2, Plus } from "lucide-react";
import {
  CreateInvoiceInput,
  CreateInvoiceItemInput,
} from "../../../graphql/types/invoice";
import { Status, VatRateType } from "../../../graphql/types/enums";

interface Props {
  formData: CreateInvoiceInput;
  invoiceItems: CreateInvoiceItemInput[];
  setInvoiceItems: React.Dispatch<
    React.SetStateAction<CreateInvoiceItemInput[]>
  >;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  loading?: boolean;
}

export const DefaultForm = ({
  formData,
  invoiceItems,
  setInvoiceItems,
  handleSubmit,
  handleChange,
  handleReset,
  loading = false,
}: Props) => {
  const handleItemChange = (
    index: number,
    field: keyof CreateInvoiceItemInput,
    value: unknown
  ) => {
    const updated = [...invoiceItems];
    updated[index] = { ...updated[index], [field]: value };
    setInvoiceItems(updated);
  };

  const addNewItem = () => {
    setInvoiceItems((prev) => [
      ...prev,
      {
        invoiceId: 0,
        name: "",
        quantity: 1,
        unitPrice: 0,
        taxType: VatRateType.STANDARD,
        taxRate: 23,
        discount: null,
        totalNet: 0,
        totalTax: null,
        totalGross: 0,
        productId: null,
      },
    ]);
  };

  const removeItem = (index: number) => {
    const updated = [...invoiceItems];
    updated.splice(index, 1);
    setInvoiceItems(updated);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        mt: 3,
      }}
    >
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ flex: 2 }}>
          <Divider>Dane podstawowe</Divider>
          <TextField
            required
            label="Numer faktury"
            name="invoiceNo"
            value={formData.invoiceNo}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Typ faktury"
            name="invoiceType"
            value={formData.invoiceType}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Waluta"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Opis"
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {Object.values(Status).map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Divider>Terminy i płatność</Divider>
          <TextField
            type="date"
            label="Data wystawienia"
            name="issuedDate"
            value={formData.issuedDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="date"
            label="Data transakcji"
            name="transactionDate"
            value={formData.transactionDate || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="date"
            label="Termin płatności"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Metoda płatności"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            type="date"
            label="Data zapłaty"
            name="paymentDate"
            value={formData.paymentDate || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Box>

      {/* POZYCJE FAKTURY */}
      <Box>
        <Divider sx={{ mb: 2 }}>Pozycje faktury</Divider>
        {invoiceItems.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}
          >
            <TextField
              label="Nazwa"
              value={item.name}
              onChange={(e) => handleItemChange(index, "name", e.target.value)}
              fullWidth
            />
            <TextField
              label="Ilość"
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", parseInt(e.target.value))
              }
              sx={{ width: 100 }}
            />
            <TextField
              label="Cena netto"
              type="number"
              value={item.unitPrice}
              onChange={(e) =>
                handleItemChange(index, "unitPrice", parseFloat(e.target.value))
              }
              sx={{ width: 120 }}
            />
            <TextField
              select
              label="VAT"
              value={item.taxType}
              onChange={(e) =>
                handleItemChange(index, "taxType", e.target.value)
              }
              sx={{ width: 120 }}
            >
              {Object.values(VatRateType).map((v) => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
            </TextField>
            <IconButton onClick={() => removeItem(index)} color="error">
              <Trash2 size={18} />
            </IconButton>
          </Box>
        ))}
        <Button variant="outlined" startIcon={<Plus />} onClick={addNewItem}>
          Dodaj pozycję
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<Save />}
          type="submit"
          color="success"
        >
          {loading ? "Zapisywanie..." : "Zapisz"}
        </Button>
        <Button
          variant="outlined"
          startIcon={<RotateCcw />}
          onClick={handleReset}
        >
          Wyczyść
        </Button>
      </Box>
    </Box>
  );
};
