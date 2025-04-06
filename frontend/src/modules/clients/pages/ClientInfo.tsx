import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/buttons.scss";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { ClientFull } from "../../../graphql/types/client";
import { useClientById } from "../../../graphql/services/clientService";
import { safeId } from "../../../utils/safeId";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/currentUserStore";

export const ClientInfo = () => {
  const { id: clientIdFromUrl } = useParams();
  const companyId = useUserStore((state) => state.company?.id);
  const clientId = safeId(clientIdFromUrl);
  const [formData, setFormData] = useState<ClientFull>({} as ClientFull);
  const {
    data: clientData,
    loading,
    error,
    refetch,
  } = useClientById(clientId, companyId);
  const navigate = useNavigate();

  useEffect(() => {
    if (clientData?.getClientById) {
      setFormData(clientData.getClientById);
    }
  }, [clientData]);

  const handleGoToEditClientForm = (id: string) => {
    navigate(`/clients/edit/${id}`);
  };

  return (
    <>
      <h2>Dane klienta</h2>
      <Box sx={{ display: "flex", gap: 2 }}>
        <NavLink to="/clients" className="link-button">
          <Button>Powrót</Button>
        </NavLink>
        <Button onClick={() => handleGoToEditClientForm(`${clientId}`)}>
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
      <Box sx={{ width: "100%", display: "flex", gap: 4 }}>
        <Box sx={{ width: "40%" }}>
          <Divider>Dane podstawowe</Divider>
          <TextField
            required
            type="text"
            name="name"
            value={formData.name}
            disabled={true}
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
            value={formData.tin}
            disabled={true}
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
            value={formData.bin}
            disabled={true}
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
            value={formData.email}
            disabled={true}
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
            value={formData.phone}
            disabled={true}
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
            value={formData.street}
            disabled={true}
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
            value={formData.buildingNo}
            disabled={true}
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
            value={formData.apartmentNo}
            disabled={true}
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
            value={formData.zipCode}
            disabled={true}
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
            value={formData.city}
            disabled={true}
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
            value={formData.municipality}
            disabled={true}
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
            value={formData.county}
            disabled={true}
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
            value={formData.province}
            disabled={true}
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
            value={formData.country}
            disabled={true}
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
        </Box>
      </Box>
    </>
  );
};
