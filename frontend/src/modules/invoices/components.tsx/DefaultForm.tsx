import {
  Box,
  Button,
  Divider,
  MenuItem,
  TextField,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import { Save, RotateCcw, Trash2, Plus } from "lucide-react";
import {
  CreateInvoiceInput,
  CreateInvoiceItemInput,
} from "../../../graphql/types/invoice";
import {
  Status,
  StatusTranslated,
  VatRateType,
} from "../../../graphql/types/enums";
import { useUserStore } from "../../../store/currentUserStore";
import { useEffect, useState } from "react";
import { useClientsByCompany } from "../../../graphql/services/clientService";
import { ClientBasic } from "../../../graphql/types/client";

interface Props {
  formData: CreateInvoiceInput;
  invoiceItems: CreateInvoiceItemInput[];
  setInvoiceItems: React.Dispatch<
    React.SetStateAction<CreateInvoiceItemInput[]>
  >;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
  const { vatRates, paymentMethods, company } = useUserStore();
  const [vatSelectValue, setVatSelectValue] = useState<number | null>(null);
  const [clientsList, setClientsList] = useState<ClientBasic[]>([]);

  const { data: clientsData } = useClientsByCompany(company?.id);

  useEffect(() => {
    if (clientsData?.getClientsByCompany) {
      setClientsList(clientsData.getClientsByCompany);
    }
  }, [clientsData]);

  const handleItemChange = (
    index: number,
    field: keyof CreateInvoiceItemInput,
    value: unknown
  ) => {
    const updated = [...invoiceItems];

    const original = updated[index];
    const item = { ...original, [field]: value };

    const quantity = Number(item.quantity) || 0;
    const unitPrice = Number(item.unitPrice) || 0;
    item.totalNet = quantity * unitPrice;

    const taxRate = item.taxRate ?? 0;
    if (item.taxType === VatRateType.STANDARD && taxRate > 0) {
      item.totalTax = Math.round(item.totalNet * (taxRate / 100));
    } else {
      item.totalTax = 0;
    }

    item.totalGross = item.totalNet + (item.totalTax ?? 0);

    updated[index] = item;
    setInvoiceItems(updated);
  };

  const selectedClient = clientsList.find(
    (client) => client.id === formData.buyerId
  );

  useEffect(() => {
    const total = invoiceItems.reduce(
      (sum, item) => sum + (item.totalGross || 0),
      0
    );

    handleChange({
      target: {
        name: "totalAmount",
        value: total.toString(),
      },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [invoiceItems]);

  const addNewItem = () => {
    setInvoiceItems((prev) => [
      ...prev,
      {
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
            required
            value={formData.invoiceType}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Klient"
            name="buyerId"
            required
            value={formData.buyerId}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {clientsList.map((client) => (
              <MenuItem key={client.id} value={client.id}>
                {client.name} ({client.tin})
              </MenuItem>
            ))}
          </TextField>
          {selectedClient && (
            <Box
              mt={2}
              p={2}
              border={1}
              borderRadius={2}
              borderColor="grey.300"
            >
              <Typography variant="subtitle1">{selectedClient.name}</Typography>
              <Typography variant="body2">
                {selectedClient.street} {selectedClient.buildingNo}
                {selectedClient.apartmentNo && `/${selectedClient.apartmentNo}`}
                <br />
                {selectedClient.zipCode} {selectedClient.city}
              </Typography>
              <Typography variant="body2">NIP: {selectedClient.tin}</Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Divider>Terminy i płatność</Divider>
          <TextField
            type="date"
            label="Data wystawienia"
            name="issuedDate"
            required
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
            required
            value={formData.dueDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            select
            label="Metoda płatności"
            name="paymentId"
            required
            value={formData.paymentId || ""}
            onChange={(e) => {
              handleChange(e);
              const selectedId = Number(e.target.value);
              const selected = paymentMethods?.find((m) => m.id === selectedId);
              if (selected) {
                handleChange({
                  target: {
                    name: "paymentMethod",
                    value: selected.method,
                  },
                } as unknown as React.ChangeEvent<HTMLInputElement>);
              }
            }}
            fullWidth
            margin="normal"
          >
            {paymentMethods?.map((method) => (
              <MenuItem key={method.id} value={method.id}>
                {method.method}
              </MenuItem>
            ))}
          </TextField>

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
                {StatusTranslated[status as keyof typeof StatusTranslated]}
              </MenuItem>
            ))}
          </TextField>
          {formData.status === Status.PAID && (
            <TextField
              type="date"
              label="Data zapłaty"
              name="paymentDate"
              required={formData.status === Status.PAID}
              value={formData.paymentDate || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          )}
        </Box>
      </Box>

      {/* POZYCJE FAKTURY */}
      <Box>
        <Divider sx={{ mb: 2 }}>Pozycje faktury</Divider>
        {invoiceItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              mb: 1,
              width: "100%",
            }}
          >
            <TextField
              label="Nazwa"
              value={item.name}
              onChange={(e) => handleItemChange(index, "name", e.target.value)}
              fullWidth
              sx={{ maxWidth: 500 }}
            />
            <TextField
              label="Ilość"
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", parseInt(e.target.value))
              }
              sx={{ width: 80 }}
            />
            <TextField
              label="Cena jedn. netto"
              type="number"
              value={item.unitPrice}
              onChange={(e) =>
                handleItemChange(index, "unitPrice", parseFloat(e.target.value))
              }
              sx={{ width: 120 }}
            />

            <FormControl fullWidth sx={{ width: 120 }}>
              <InputLabel id={`vat-rate-label-${index}`}>Stawka VAT</InputLabel>
              <Select
                labelId={`vat-rate-label-${index}`}
                id={`vatRateSelect-${index}`}
                value={vatSelectValue}
                label="Stawka VAT"
                onChange={(e) => {
                  const selectedId = e.target.value as number;
                  setVatSelectValue(selectedId);

                  const selectedRate = vatRates?.find(
                    (rate) => rate.id === selectedId
                  );
                  if (!selectedRate) return;

                  handleItemChange(index, "taxType", selectedRate.type);
                  handleItemChange(
                    index,
                    "taxRate",
                    selectedRate.rate !== null
                      ? Number(selectedRate.rate)
                      : null
                  );
                }}
              >
                {vatRates?.map((vatRate) => (
                  <MenuItem key={vatRate.id} value={vatRate.id}>
                    {vatRate.type === "STANDARD"
                      ? `${vatRate.rate}%`
                      : vatRate.type === "EXEMPT"
                      ? "zw"
                      : "np"}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Wartość netto"
              InputProps={{ readOnly: true }}
              type="number"
              value={item.totalNet}
              onChange={(e) =>
                handleItemChange(index, "totalNet", parseInt(e.target.value))
              }
              sx={{ width: 150 }}
            />
            <TextField
              label="Kwota VAT"
              type="number"
              value={item.totalTax}
              slotProps={{
                input: { readOnly: true },
                inputLabel: { shrink: true },
              }}
              onChange={(e) =>
                handleItemChange(index, "totalTax", parseInt(e.target.value))
              }
              sx={{ width: 150 }}
            />
            <TextField
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                input: {
                  readOnly: true,
                },
              }}
              label="Wartość brutto"
              type="number"
              value={item.totalGross}
              onChange={(e) =>
                handleItemChange(index, "totalTax", parseInt(e.target.value))
              }
              sx={{ width: 150 }}
            />
            <IconButton onClick={() => removeItem(index)} color="error">
              <Trash2 size={18} />
            </IconButton>
          </Box>
        ))}
        <Button variant="outlined" startIcon={<Plus />} onClick={addNewItem}>
          Dodaj pozycję
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Łączna kwota brutto: {formData.totalAmount || "0.00"}{" "}
          {formData.currency}
        </Typography>
        <TextField
          label="Waluta"
          name="currency"
          required
          value={formData.currency}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Uwagi"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
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
