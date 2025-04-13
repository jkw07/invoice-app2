import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImportClient } from "../components/ImportClient";
import { AddClientInput } from "../../../graphql/types/client";
import { safeId } from "../../../utils/safeId";
import { useUserStore } from "../../../store/currentUserStore";
import { GET_CLIENTS_BY_COMPANY } from "../../../graphql/queries/clientQueries";
import { useAddClient } from "../../../graphql/services/clientService";
import { AlertColor, Button } from "@mui/material";
import { useNavigation } from "../../../hooks/useNavigation";
import { AlertDialog } from "../../../components/AlertDialog";
import { translateError } from "../../../utils/translateError";
import { DefaultForm } from "../components/DefaultForm";
import { emptyClient } from "../utils/defaultFormData";

interface AlertType {
  severity: AlertColor | undefined;
  message: string;
}

export const NewClient = () => {
  const companyId = useUserStore((state) => state.company?.id);
  const [openImportClientDialog, setOpenImportClientDialog] = useState(true);
  const [newClientData, setNewClientData] =
    useState<AddClientInput>(emptyClient);
  const [addClient, { loading }] = useAddClient();
  const { goToClientsModule } = useNavigation();
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState<AlertType>({
    severity: undefined,
    message: "",
  });

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
      setAlert({
        severity: "error",
        message: "Brak przypisanej firmy. Spróbuj ponownie.",
      });
      setOpenDialog(true);
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
          setAlert({
            severity: "success",
            message: `Klient ${data.addClient.name} został dodany!`,
          });
          setOpenDialog(true);
        },
      });
    } catch (error) {
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setAlert({ severity: "error", message: `Błąd: ${translated}` });
      setOpenDialog(true);
    } finally {
      setNewClientData(emptyClient);
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
        alertSeverity={alert.severity}
        alertMessage={alert.message}
      />
      <h2>Nowy Klient</h2>
      <NavLink to="/clients" className="link-button">
        <Button>Powrót</Button>
      </NavLink>
      <ImportClient
        open={openImportClientDialog}
        handleClose={handleCloseImportClient}
      />
      <DefaultForm
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
