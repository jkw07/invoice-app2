import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { InvoiceBasic } from "../../../graphql/types/client";
import Chip from "@mui/material/Chip";
import { Status } from "../../../graphql/types/enums";

interface InvoicesTableProps {
  invoices?: InvoiceBasic[];
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
  let color: "default" | "primary" | "success" | "error" | "warning" =
    "default";

  switch (status) {
    case "PAID":
      color = "success";
      break;
    case "PENDING":
      color = "warning";
      break;
    case "OVERDUE":
      color = "error";
      break;
    default:
      color = "default";
      break;
  }

  return <Chip label={status} color={color} size="small" />;
};

export default function InvoicesTable({ invoices = [] }: InvoicesTableProps) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="invoices table">
        <TableHead>
          <TableRow>
            <TableCell>Numer faktury</TableCell>
            <TableCell>Data wystawienia</TableCell>
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
              <TableCell>{formatAmount(invoice.totalAmount)}</TableCell>
              <TableCell>{formatDate(invoice.dueDate)}</TableCell>
              <TableCell>{renderStatus(invoice.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
