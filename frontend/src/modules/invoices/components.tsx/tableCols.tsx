import { Chip, IconButton, Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Edit, Trash2, Info } from "lucide-react";
import { Status, StatusTranslated } from "../../../graphql/types/enums";
import { GridRenderCellParams } from "@mui/x-data-grid";

interface TableColsInvoicesProps {
  handleOpenDeleteInvoiceDialog: (id: string) => void;
  handleGoToEditInvoiceForm: (id: string) => void;
  handleGoToInvoiceInfo: (id: string) => void;
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("pl-PL");

const formatAmount = (amount?: number | string) => {
  if (amount === undefined || amount === null) return "-";
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(num)) return "-";
  return num.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
  });
};

const renderStatusChip = (status: Status) => {
  let text = StatusTranslated.DRAFT;
  let color:
    | "default"
    | "primary"
    | "success"
    | "error"
    | "secondary"
    | "warning" = "default";

  switch (status) {
    case Status.PAID:
      text = StatusTranslated.PAID;
      color = "success";
      break;
    case Status.PENDING:
      text = StatusTranslated.PENDING;
      color = "primary";
      break;
    case Status.OVERDUE:
      text = StatusTranslated.OVERDUE;
      color = "error";
      break;
    case Status.CANCELLED:
      text = StatusTranslated.CANCELLED;
      color = "secondary";
      break;
    case Status.PARTIALLY_PAID:
      text = StatusTranslated.PARTIALLY_PAID;
      color = "warning";
      break;
    case Status.DRAFT:
    default:
      text = StatusTranslated.DRAFT;
      color = "default";
  }

  return <Chip label={text} color={color} size="small" />;
};

export const tableColsInvoices = ({
  handleOpenDeleteInvoiceDialog,
  handleGoToEditInvoiceForm,
  handleGoToInvoiceInfo,
}: TableColsInvoicesProps) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "invoiceNo",
      headerName: "Numer faktury",
      width: 180,
    },
    {
      field: "issuedDate",
      headerName: "Data wystawienia",
      width: 180,
      renderCell: (params: GridRenderCellParams) => formatDate(params.value),
    },
    {
      field: "buyer",
      headerName: "Nabywca",
      width: 280,
      renderCell: (params: GridRenderCellParams) =>
        params.row?.buyer?.name ?? "-",
    },
    {
      field: "totalAmount",
      headerName: "Kwota",
      width: 160,
      renderCell: (params: GridRenderCellParams) => formatAmount(params.value),
    },
    {
      field: "dueDate",
      headerName: "Termin płatności",
      width: 180,
      renderCell: (params: GridRenderCellParams) => formatDate(params.value),
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => renderStatusChip(params.value),
    },
    {
      field: "actions",
      headerName: "Akcje",
      width: 150,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "4px",
            }}
          >
            <Tooltip title="Szczegóły">
              <IconButton
                onClick={() => handleGoToInvoiceInfo(params.row.id)}
                aria-label="Info"
              >
                <Info className="info-button" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edytuj">
              <IconButton
                onClick={() => handleGoToEditInvoiceForm(params.row.id)}
                aria-label="Edit"
              >
                <Edit className="edit-button" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Usuń">
              <IconButton
                onClick={() => handleOpenDeleteInvoiceDialog(params.row.id)}
                aria-label="Delete"
              >
                <Trash2 className="delete-button" />
              </IconButton>
            </Tooltip>
          </div>
        );
      },
    },
  ];
  return columns;
};
