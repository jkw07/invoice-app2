import { Status } from "../../../graphql/types/enums";
import { CreateInvoiceInput } from "../../../graphql/types/invoice";

export const emptyInvoice: CreateInvoiceInput = {
  companyId: 0,
  buyerId: 0,
  paymentId: 0,
  recipient: null,
  invoiceType: "Faktura VAT",
  invoiceNo: "",
  issuedDate: new Date().toISOString().split("T")[0],
  transactionDate: new Date().toISOString().split("T")[0],
  dueDate: new Date().toISOString().split("T")[0],
  paymentMethod: "przelew",
  paymentDate: null,
  description: null,
  totalAmount: 0,
  currency: "PLN",
  status: Status.DRAFT,
};
