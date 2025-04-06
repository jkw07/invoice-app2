import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/buttons.scss";
import Button from "@mui/material/Button";
import { ImportClient } from "../components/ImportClient";
import { AddClientVariables } from "../../../graphql/types/client";
import { safeId } from "../../../utils/safeId";
import { useUserStore } from "../../../store/currentUserStore";
import { NewClientForm } from "../components/NewClientForm";
import { GET_CLIENTS_BY_COMPANY } from "../../../graphql/queries/clientQueries";
import { useSnackbarStore } from "../../../store/snackbarStore";
import { useAddClient } from "../../../graphql/services/clientService";
import { Alert, AlertColor } from "@mui/material";
import { useNavigation } from "../../../hooks/useNavigation";
import { AlertDialog } from "../../../components/AlertDialog";

export const NewClient = () => {
  const companyId = useUserStore((state) => state.company?.id);
  type AddClientInput = AddClientVariables["input"];
  const [openImportClientDialog, setOpenImportClientDialog] = useState(true);
  const [newClientData, setNewClientData] = useState<AddClientInput>(
    {} as AddClientInput
  );
  const [addClient, { loading }] = useAddClient();
  const [onError, setOnError] = useState(false);
  const { showSnackbar } = useSnackbarStore();
  const { goToClientsModule } = useNavigation();
  const [openDialog, setOpenDialog] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertMessage, setAlertMessage] = useState("");

  const resetNewClientData = () => {
    setNewClientData({} as AddClientInput);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewClientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    goToClientsModule();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId) {
      showSnackbar("Brak przypisanej firmy. Spróbuj ponownie.", "error");
      return;
    }
    const fullClientData: AddClientInput = {
      ...newClientData,
      companyId: safeId(companyId),
    };
    handleAddNewClient(fullClientData);
  };

  const handleAddNewClient = async (formValues: AddClientInput) => {
    try {
      await addClient({
        variables: { input: formValues },
        refetchQueries: [GET_CLIENTS_BY_COMPANY],
        onCompleted: (data) => {
          setAlertSeverity("success");
          setAlertMessage(`Klient ${data.addClient.name} został dodany!`);
          setOpenDialog(true);
        },
        onError: (error) => {
          console.error("Błąd:", error.message);
          setOnError(true);
        },
      });
    } catch (error) {
      console.error("Coś poszło nie tak:", error);
      setOnError(true);
    } finally {
      setNewClientData({} as AddClientInput);
      setOnError(false);
    }
  };

  const handleCloseImportClient = () => {
    setOpenImportClientDialog(false);
  };

  return (
    <>
      <AlertDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        alertSeverity={alertSeverity}
        alertMessage={alertMessage}
      />
      <h2>Nowy Klient</h2>
      {onError && <Alert severity="error">Operacja nie powiodła się.</Alert>}
      <NavLink to="/clients" className="link-button">
        <Button>Powrót</Button>
      </NavLink>
      <ImportClient
        open={openImportClientDialog}
        handleClose={handleCloseImportClient}
      />
      <NewClientForm
        formData={newClientData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleReset={resetNewClientData}
        hasReset={true}
        loading={loading}
      />
    </>
  );
};
