import { Alert, AlertColor, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AlertDialog } from "../../../components/AlertDialog";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { ClientFull } from "../../../graphql/types/client";
import {
  useClientById,
  useUpdateClient,
} from "../../../graphql/services/clientService";
import { safeId } from "../../../utils/safeId";
import { translateError } from "../../../utils/translateError";
import { DefaultForm } from "../components/DefaultForm";
import { useNavigation } from "../../../hooks/useNavigation";

export const EditClient = () => {
  const { id: clientIdFromUrl } = useParams();
  const clientId = safeId(clientIdFromUrl);
  const [formData, setFormData] = useState<ClientFull>({} as ClientFull);
  const [openDialog, setOpenDialog] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertMessage, setAlertMessage] = useState("");
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
        setAlertSeverity("success");
        setAlertMessage("Dane klienta zostały zaktualizowane pomyślnie.");
      } else {
        setAlertSeverity("error");
        setAlertMessage("Nieprawidłowy identyfikator klienta.");
        setOpenDialog(true);
        return;
      }
    } catch (error) {
      setAlertSeverity("error");
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setAlertMessage(`Błąd: ${translated}`);
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
      <h2>Edytuj dane klienta</h2>
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
          {alertMessage}
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
        alertSeverity={alertSeverity}
        alertMessage={alertMessage}
      />
    </>
  );
};
