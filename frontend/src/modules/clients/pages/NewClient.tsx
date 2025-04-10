import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { ImportClient } from "../components/ImportClient";
import { AddClientVariables } from "../../../graphql/types/client";
import { safeId } from "../../../utils/safeId";
import { useUserStore } from "../../../store/currentUserStore";
import { GET_CLIENTS_BY_COMPANY } from "../../../graphql/queries/clientQueries";
import { useSnackbarStore } from "../../../store/snackbarStore";
import { useAddClient } from "../../../graphql/services/clientService";
import { Alert, AlertColor } from "@mui/material";
import { useNavigation } from "../../../hooks/useNavigation";
import { AlertDialog } from "../../../components/AlertDialog";
import { ClientForm } from "../components/ClientForm";
import { translateError } from "../../../utils/translateError";

type AddClientInput = AddClientVariables["input"];
const emptyClient: AddClientInput = {
  companyId: 0,
  name: "",
  tin: null,
  bin: null,
  street: null,
  buildingNo: null,
  apartmentNo: null,
  zipCode: null,
  city: null,
  country: null,
  province: null,
  county: null,
  municipality: null,
  email: null,
  phone: null,
};

export const NewClient = () => {
  const companyId = useUserStore((state) => state.company?.id);
  const [openImportClientDialog, setOpenImportClientDialog] = useState(true);
  const [newClientData, setNewClientData] =
    useState<AddClientInput>(emptyClient);
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
    setNewClientData(emptyClient);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewClientData((prevState) => ({
      ...prevState,
      [name]: value === "" ? null : value,
    }));
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
    console.log(fullClientData);
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
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setAlertMessage(`Błąd: ${translated}`);
      setOnError(true);
    } finally {
      setNewClientData(emptyClient);
      setOnError(false);
    }
  };

  //TODO utility types

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
      {onError && <Alert severity="error">{alertMessage}</Alert>}
      <NavLink to="/clients" className="link-button">
        <Button>Powrót</Button>
      </NavLink>
      <ImportClient
        open={openImportClientDialog}
        handleClose={handleCloseImportClient}
      />
      <ClientForm
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
