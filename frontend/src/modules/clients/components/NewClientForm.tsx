import { Box, Button, Divider, TextField } from "@mui/material";
import { Save, RotateCcw } from "lucide-react";
import { AddClientVariables } from "../../../graphql/types/client";

type AddClientInput = AddClientVariables["input"];

interface ClientFormProps {
  formData: AddClientInput;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
  hasReset?: boolean;
  loading?: boolean;
}
export const NewClientForm = ({
  formData,
  handleSubmit,
  handleChange,
  handleReset,
  hasReset = false,
  loading = false,
}: ClientFormProps) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%", display: "flex", gap: 4 }}
    >
      <Box sx={{ width: "40%" }}>
        <Divider>Dane podstawowe</Divider>
        <TextField
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Nazwa firmy lub imię i nazwisko klienta"
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
          name="tin"
          value={formData.tin ?? ""}
          onChange={handleChange}
          label="NIP"
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
          name="bin"
          value={formData.bin ?? ""}
          onChange={handleChange}
          label="REGON"
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
        <Divider>Dane kontaktowe</Divider>
        <TextField
          type="email"
          name="email"
          value={formData.email ?? ""}
          onChange={handleChange}
          label="Email"
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
          name="phone"
          value={formData.phone ?? ""}
          onChange={handleChange}
          label="Telefon"
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
      </Box>
      <Box sx={{ width: "40%" }}>
        <Divider>Adres</Divider>
        <TextField
          type="text"
          name="street"
          value={formData.street ?? ""}
          onChange={handleChange}
          label="Ulica"
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
          name="buildingNo"
          value={formData.buildingNo ?? ""}
          onChange={handleChange}
          label="Numer domu"
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
          name="apartmentNo"
          value={formData.apartmentNo ?? ""}
          onChange={handleChange}
          label="Numer lokalu"
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
          name="zipCode"
          value={formData.zipCode ?? ""}
          onChange={handleChange}
          label="Kod pocztowy"
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
          name="city"
          value={formData.city ?? ""}
          onChange={handleChange}
          label="Miasto"
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
          name="municipality"
          value={formData.municipality ?? ""}
          onChange={handleChange}
          label="Gmina"
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
          name="county"
          value={formData.county ?? ""}
          onChange={handleChange}
          label="Powiat"
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
          name="province"
          value={formData.province ?? ""}
          onChange={handleChange}
          label="Województwo"
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
          name="country"
          value={formData.country ?? ""}
          onChange={handleChange}
          label="Państwo"
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
            {loading ? "Dodawanie klienta..." : "Dodaj Klienta"}
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
    </Box>
  );
};
