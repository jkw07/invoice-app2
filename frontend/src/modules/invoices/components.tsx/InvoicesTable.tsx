import { Status } from "../../../graphql/types/enums";
import {
  Alert,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { InvoiceWithClient } from "../../../graphql/types/invoice";

interface InvoicesTableProps {
  invoices?: InvoiceWithClient[];
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("pl-PL");
};
const formatAmount = (amount: number | string) => {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  return num.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
  });
};

const renderStatus = (status: Status) => {
  let text: string = "szkic";
  let color:
    | "default"
    | "primary"
    | "success"
    | "error"
    | "secondary"
    | "warning" = "default";

  switch (status) {
    case Status.PAID:
      text = "opłacona";
      color = "success";
      break;
    case Status.PENDING:
      text = "oczekująca";
      color = "primary";
      break;
    case Status.OVERDUE:
      text = "po terminie";
      color = "error";
      break;
    case Status.CANCELLED:
      text = "anulowana";
      color = "secondary";
      break;
    case Status.PARTIALLY_PAID:
      text = "opłacona częściowo";
      color = "warning";
      break;
    case Status.DRAFT:
      text = "szkic";
      color = "default";
      break;
    default:
      text = "szkic";
      color = "default";
      break;
  }

  return <Chip label={text} color={color} size="small" />;
};

export default function InvoicesTable({ invoices = [] }: InvoicesTableProps) {
  const notEmpty = invoices.length > 0;
  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        {!notEmpty && <Alert severity="info">Brak faktur.</Alert>}
        <Table sx={{ minWidth: 650 }} aria-label="invoices table">
          <TableHead>
            <TableRow>
              <TableCell>Numer faktury</TableCell>
              <TableCell>Data wystawienia</TableCell>
              <TableCell>Nabywca</TableCell>
              <TableCell>Kwota</TableCell>
              <TableCell>Termin płatności</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {invoice.invoiceNo}
                </TableCell>
                <TableCell>{formatDate(invoice.issuedDate)}</TableCell>
                <TableCell>{invoice.buyer.name}</TableCell>
                <TableCell>{formatAmount(invoice.totalAmount)}</TableCell>
                <TableCell>{formatDate(invoice.dueDate)}</TableCell>
                <TableCell>{renderStatus(invoice.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
