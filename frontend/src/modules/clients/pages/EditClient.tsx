import {
  Alert,
  AlertColor,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AlertDialog } from "../../../components/AlertDialog";
import { ClientFull } from "../../../graphql/types/client";
import {
  useClientById,
  useUpdateClient,
} from "../../../graphql/services/clientService";
import { safeId } from "../../../utils/safeId";
import { translateError } from "../../../utils/translateError";
import { DefaultForm } from "../components/DefaultForm";
import { useNavigation } from "../../../hooks/useNavigation";

interface AlertType {
  severity: AlertColor | undefined;
  message: string;
}

export const EditClient = () => {
  const { id: clientIdFromUrl } = useParams();
  const clientId = safeId(clientIdFromUrl);
  const [formData, setFormData] = useState<ClientFull>({} as ClientFull);
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState<AlertType>({
    severity: undefined,
    message: "",
  });
  const [updatedFields, setUpdatedFields] = useState<Partial<ClientFull>>({});
  const { goToClientsModule } = useNavigation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = value === "" ? null : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
    setUpdatedFields((prevFields) => ({
      ...prevFields,
      [name]: newValue,
    }));
  };

  const { data: clientData, loading, error, refetch } = useClientById(clientId);

  useEffect(() => {
    if (clientData?.getClientById) {
      setFormData(clientData.getClientById);
    }
  }, [clientData]);

  const [updateClient] = useUpdateClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (clientId) {
        await updateClient({
          variables: {
            clientId: clientId,
            input: updatedFields,
          },
        });
        setAlert({
          severity: "success",
          message: "Dane klienta zostały zaktualizowane pomyślnie.",
        });
      } else {
        setAlert({
          severity: "error",
          message: "Błąd: nie znaleziono klienta.",
        });
        setOpenDialog(true);
        return;
      }
    } catch (error) {
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setAlert({ severity: "error", message: `Błąd: ${translated}` });
    } finally {
      setOpenDialog(true);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    goToClientsModule();
  };

  return (
    <>
      <h2>Edytuj dane klienta: {clientData?.getClientById.name}</h2>
      <NavLink to="/clients" className="link-button">
        <Button>Powrót</Button>
      </NavLink>
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
              Nie udało się załadować danych klienta.
            </Alert>
          )}
        </Alert>
      )}
      <DefaultForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <AlertDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        alertSeverity={alert.severity}
        alertMessage={alert.message}
      />
    </>
  );
};
