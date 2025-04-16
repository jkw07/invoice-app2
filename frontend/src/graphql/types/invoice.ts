import { Status } from "./enums";

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
