import { Status, VatRateType } from "./enums";

export interface InvoiceBasic {
  id: number;
  invoiceNo: string;
  issuedDate: string;
  totalAmount: number;
  dueDate: string;
  status: Status;
}

export interface ClientBasic {
  name: string;
}

export interface InvoiceWithClient extends InvoiceBasic {
  buyer: ClientBasic;
}

export interface GetInvoicesByCompanyQuery {
  getInvoicesByCompany: InvoiceWithClient[];
}

export interface GetInvoicesByCompanyVariables {
  companyId: number;
}

export interface AddInvoiceWithItemsMutation {
  addInvoiceWithItems: InvoiceBasic;
}

export interface CreateInvoiceInput {
  companyId: number;
  buyerId: number;
  paymentId: number;
  recipient: string | null;
  invoiceType: string;
  invoiceNo: string;
  issuedDate: string;
  transactionDate: string | null;
  dueDate: string;
  paymentMethod: string;
  paymentDate: string | null;
  description: string | null;
  totalAmount: number;
  currency: string;
  status: Status;
}

export interface CreateInvoiceItemInput {
  productId: number | null;
  name: string;
  quantity: number;
  unitPrice: number;
  taxType: VatRateType;
  taxRate: number | null;
  discount: number | null;
  totalNet: number;
  totalTax: number | null;
  totalGross: number;
}

export interface AddInvoiceWithItemsMutationVariables {
  inputInvoice: CreateInvoiceInput;
  inputItem: CreateInvoiceItemInput[];
}
