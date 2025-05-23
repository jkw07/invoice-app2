import { useEffect, useState } from "react";
import { InvoiceWithClient } from "../../../graphql/types/invoice";
import { useUserStore } from "../../../store/currentUserStore";
import { Alert, Button } from "@mui/material";
import { translateError } from "../../../utils/translateError";
import { FilePlus } from "lucide-react";
import { GET_INVOICES_BY_COMPANY } from "../../../graphql/queries/invoiceQueries";
import { useLazyQuery, useMutation } from "@apollo/client";
import { safeId } from "../../../utils/safeId";
import { InvoicesTableGrid } from "../components.tsx/InvoiceTableGrid";
import "../../../styles/tables.scss";
import { NavLink } from "react-router-dom";
import { UPDATE_INVOICE_STATUS } from "../../../graphql/mutations/invoiceMutations";
import { Status } from "../../../graphql/types/enums";

export const InvoicesList = () => {
  const { company } = useUserStore();
  const [tableData, setTableData] = useState<InvoiceWithClient[]>(
    [] as InvoiceWithClient[]
  );
  const [updateInvoiceStatus] = useMutation(UPDATE_INVOICE_STATUS);

  const [getInvoices, { data, loading, error, refetch }] = useLazyQuery(
    GET_INVOICES_BY_COMPANY,
    { fetchPolicy: "no-cache" }
  );

  useEffect(() => {
    if (company?.id) {
      getInvoices({ variables: { companyId: safeId(company.id) } });
    }
  }, [company?.id]);

  useEffect(() => {
    if (data?.getInvoicesByCompany) {
      setTableData(data.getInvoicesByCompany);
    }
  }, [data]);

  useEffect(() => {
    const updateOverdueStatuses = async () => {
      if (!data?.getInvoicesByCompany) return;

      const now = new Date();
      const updatedInvoices = await Promise.all(
        data.getInvoicesByCompany.map(async (invoice: InvoiceWithClient) => {
          if (
            invoice.status === Status.PENDING &&
            new Date(invoice.dueDate) < now
          ) {
            try {
              await updateInvoiceStatus({
                variables: {
                  invoiceId: safeId(invoice.id),
                  inputInvoice: {
                    status: Status.OVERDUE,
                  },
                },
              });
              return { ...invoice, status: Status.OVERDUE };
            } catch (err) {
              console.error(
                `Błąd aktualizacji statusu faktury ${invoice.id}`,
                err
              );
              return invoice;
            }
          }
          return invoice;
        })
      );
      setTableData(updatedInvoices);
    };

    updateOverdueStatuses();
  }, [data]);

  if (!company?.id) {
    return (
      <>
        <h1>Lista faktur</h1>
        <div className="actions-container">
          <Alert severity="error">
            Brak firmy. Proszę dodać firmę, aby móc wyświetlić listę.
          </Alert>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Lista faktur</h1>
      <div className="actions-container">
        <NavLink to="/invoices/new" className="link-button">
          <Button variant="contained" startIcon={<FilePlus />}>
            Dodaj nową fakturę
          </Button>
        </NavLink>
      </div>
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
          sx={{ marginBottom: "20px" }}
        >
          Wystąpił błąd: {translateError(error.message)}
        </Alert>
      )}
      <div className="table-container">
        <InvoicesTableGrid invoices={tableData} loading={loading} />
      </div>
    </>
  );
};
