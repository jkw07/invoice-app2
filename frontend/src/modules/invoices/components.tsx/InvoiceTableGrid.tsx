import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import { AlertColor, Box } from "@mui/material";
import { useState } from "react";
import { tableColsInvoices } from "./tableCols";
import { AlertDialog } from "../../../components/AlertDialog";
import { safeId } from "../../../utils/safeId";
import { InvoiceWithClient } from "../../../graphql/types/invoice";

interface AlertType {
  severity: AlertColor | undefined;
  message: string;
}

interface InvoicesTableProps {
  invoices?: InvoiceWithClient[];
  loading: boolean;
}

export const InvoicesTableGrid = ({
  invoices = [],
  loading,
}: InvoicesTableProps) => {
  //const navigate = useNavigate();
  //const [deleteClient] = useDeleteClient();
  const [hasConfirm, setHasConfirm] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState<AlertType>({
    severity: undefined,
    message: "",
  });
  const [invoiceId, setInvoiceId] = useState<number>(0);

  const handleOpenDeleteInvoiceDialog = (id: string) => {
    setAlert({
      severity: "warning",
      message: "Czy na pewno chcesz usunąć fakturę?",
    });
    setHasConfirm(true);
    setInvoiceId(safeId(id));
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    handleDeleteInvoice(invoiceId);
  };

  const handleDeleteInvoice = async (invoiceId: number) => {
    console.log(invoiceId);
    //spr numeracja
    /* try {
      await deleteClient({
        variables: {
          clientId,
        },
        onCompleted: (data) => {
          setOpenDialog(false);
          setHasConfirm(false);
          setAlert({
            severity: "success",
            message: `Faktura ${data.deleteClient.name} został usunięty.`,
          });
          setOpenDialog(true);
        },
      });
      await refetch();
    } catch (error) {
      console.error("Błąd przy usuwaniu klienta", error);
      setOpenDialog(false);
      setHasConfirm(false);
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      const translated = translateError(errorKey);
      setAlert({ severity: "error", message: `Błąd: ${translated}` });
      setOpenDialog(true);
    } */
  };

  const handleGoToEditInvoiceForm = (id: string) => {
    //navigate(`/clients/edit/${id}`);
    console.log(id);
  };

  const handleGoToInvoiceInfo = (id: string) => {
    //navigate(`/clients/info/${id}`);
    console.log(id);
  };

  const columns = tableColsInvoices({
    handleOpenDeleteInvoiceDialog,
    handleGoToEditInvoiceForm,
    handleGoToInvoiceInfo,
  });

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  console.log("invoices", invoices);

  return (
    <>
      <AlertDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        alertSeverity={alert.severity}
        alertMessage={alert.message}
        {...(hasConfirm ? { handleConfirm: handleConfirmDelete } : {})}
      />
      <Box sx={{ width: "100%", background: "white" }}>
        <DataGrid
          rows={invoices}
          getRowId={(row) => row.id}
          loading={loading}
          slotProps={{
            loadingOverlay: loading
              ? {
                  variant: "linear-progress",
                  noRowsVariant: "linear-progress",
                }
              : undefined,
          }}
          columns={columns}
          columnHeaderHeight={56}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 30, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </>
  );
};
