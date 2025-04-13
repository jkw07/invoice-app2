import { Alert, Box, CircularProgress, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { ClientWithInvoices } from "../../../graphql/types/client";
import { useClientById } from "../../../graphql/services/clientService";
import { safeId } from "../../../utils/safeId";
import { DefaultForm } from "../components/DefaultForm";
import InvoicesTable from "../components/invoicesTable";

export const ClientInfo = () => {
  const { id: clientIdFromUrl } = useParams();
  const clientId = safeId(clientIdFromUrl);
  const [formData, setFormData] = useState<ClientWithInvoices>(
    {} as ClientWithInvoices
  );
  const [showInvoices, setShowInvoices] = useState(false);
  const { data: clientData, loading, error, refetch } = useClientById(clientId);
  const navigate = useNavigate();

  useEffect(() => {
    if (clientData?.getClientById) {
      setFormData(clientData.getClientById);
    }
  }, [clientData]);

  const handleGoToEditClientForm = (id: string) => {
    navigate(`/clients/edit/${id}`);
  };

  const toggleShowInvoices: () => void = () => {
    setShowInvoices((prev: boolean) => !prev);
  };

  return (
    <>
      <h2>Dane klienta: {clientData?.getClientById.name}</h2>
      <Box sx={{ display: "flex", gap: 2 }}>
        {!showInvoices && (
          <>
            <NavLink to="/clients" className="link-button">
              <Button>Powrót</Button>
            </NavLink>
            <Button onClick={() => handleGoToEditClientForm(`${clientId}`)}>
              Edytuj
            </Button>
          </>
        )}
        <Button onClick={toggleShowInvoices}>
          {showInvoices ? "Powrót" : "Wystawione faktury"}
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
      {!showInvoices && (
        <DefaultForm formData={formData} isDisabled={true} hasSubmit={false} />
      )}
      {showInvoices && <InvoicesTable invoices={formData.invoices} />}
    </>
  );
};
