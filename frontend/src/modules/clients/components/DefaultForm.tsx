import { Box, Button, Divider, TextField } from "@mui/material";
import { Save, RotateCcw } from "lucide-react";

interface ClientBase {
  name: string;
  tin: string | null;
  bin: string | null;
  street: string | null;
  buildingNo: string | null;
  apartmentNo: string | null;
  zipCode: string | null;
  city: string | null;
  country: string | null;
  province: string | null;
  county: string | null;
  municipality: string | null;
  email: string | null;
  phone: string | null;
}

interface ClientFormProps<T extends ClientBase> {
  formData: T;
  handleSubmit?: (e: React.FormEvent) => Promise<void>;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
  hasReset?: boolean;
  loading?: boolean;
  hasSubmit?: boolean;
  isDisabled?: boolean;
}
export const DefaultForm = <T extends ClientBase>({
  formData,
  handleSubmit,
  handleChange,
  handleReset,
  hasReset = false,
  loading = false,
  hasSubmit = true,
  isDisabled = false,
}: ClientFormProps<T>) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%", display: "flex", gap: 4, marginTop: "20px" }}
    >
      <Box sx={{ width: "40%" }}>
        <Divider>Dane podstawowe</Divider>
        <TextField
          required
          type="text"
          name="name"
          disabled={isDisabled}
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
          disabled={isDisabled}
          value={formData.tin}
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
          disabled={isDisabled}
          value={formData.bin}
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
          disabled={isDisabled}
          value={formData.email}
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
          disabled={isDisabled}
          value={formData.phone}
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
          disabled={isDisabled}
          value={formData.street}
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
          disabled={isDisabled}
          value={formData.buildingNo}
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
          disabled={isDisabled}
          value={formData.apartmentNo}
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
          disabled={isDisabled}
          value={formData.zipCode}
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
          disabled={isDisabled}
          value={formData.city}
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
          disabled={isDisabled}
          value={formData.municipality}
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
          disabled={isDisabled}
          value={formData.county}
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
          disabled={isDisabled}
          value={formData.province}
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
          disabled={isDisabled}
          value={formData.country}
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
          {hasSubmit && (
            <Button
              variant="contained"
              startIcon={<Save />}
              type="submit"
              color="success"
            >
              {loading ? "Zapisywanie..." : "Zapisz"}
            </Button>
          )}
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
