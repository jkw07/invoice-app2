import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import { ClipboardPen } from "lucide-react";
import { useState } from "react";
import { AddCompanyInput } from "../graphql/types/company";
import { useCreateCompany } from "../graphql/services/companyService";
import { GET_COMPANIES_BY_USER } from "../graphql/queries/companyQueries";
import { useSnackbarStore } from "../store/snackbarStore";
import { translateError } from "../utils/translateError";
import { useUserStore } from "../store/currentUserStore";

interface AddNewCompanyProps {
  open: boolean;
  handleClose: () => void;
}

type onErrorType = {
  isError: boolean;
  errorMessage: string;
};

export const AddNewCompany = ({ open, handleClose }: AddNewCompanyProps) => {
  const [formData, setFormData] = useState<AddCompanyInput>(
    {} as AddCompanyInput
  );
  const [createCompany, { loading }] = useCreateCompany();
  const [onError, setOnError] = useState<onErrorType>({
    isError: false,
    errorMessage: "",
  });
  const { showSnackbar } = useSnackbarStore();
  const { replaceCompany } = useUserStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddNewCompany(formData);
  };

  const handleAddNewCompany = async (formValues: AddCompanyInput) => {
    setOnError({ isError: false, errorMessage: "" });
    try {
      await createCompany({
        variables: { input: formValues },
        refetchQueries: [GET_COMPANIES_BY_USER],
        onCompleted: (data) => {
          showSnackbar(
            `Firma ${data.createCompany.fullName} została utworzona!`,
            "success"
          );
          replaceCompany(data.createCompany);
          handleClose();
        },
      });
    } catch (error) {
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setOnError({ isError: true, errorMessage: translated });
    } finally {
      setFormData({} as AddCompanyInput);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: "form",
          onSubmit: handleSubmit,
          sx: { backgroundImage: "none", width: "600px" },
        },
      }}
    >
      <DialogTitle>
        <ClipboardPen color="#1976d2" size={40} />
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "90%" }}
      >
        <DialogContentText>
          Uzupełnij dane nowej firmy:
          {onError.isError && (
            <Alert severity="error">
              `Operacja nie powiodła się: ${onError.errorMessage}`
            </Alert>
          )}
        </DialogContentText>
        <TextField
          required
          label="Pełna nazwa firmy"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Skrócona nazwa"
          name="shortName"
          value={formData.shortName}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="NIP"
          name="tin"
          value={formData.tin}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="REGON"
          name="bin"
          value={formData.bin}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Ulica"
          name="street"
          value={formData.street}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Numer budynku"
          name="buildingNo"
          value={formData.buildingNo}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Numer lokalu"
          name="apartmentNo"
          value={formData.apartmentNo ?? ""}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Kod pocztowy"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Miasto"
          name="city"
          value={formData.city}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Województwo"
          name="province"
          value={formData.province}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Powiat"
          name="county"
          value={formData.county}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Gmina"
          name="municipality"
          value={formData.municipality}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email ?? ""}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Telefon"
          name="phone"
          value={formData.phone ?? ""}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Anuluj</Button>
        <Button variant="contained" type="submit">
          {loading ? "Dodawanie firmy..." : "Dodaj firmę"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
