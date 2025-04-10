import { Status } from "./enums";

export interface ClientBasic {
  id: number;
  name: string;
  tin: string | null;
  bin: string | null;
  street: string | null;
  buildingNo: string | null;
  apartmentNo: string | null;
  zipCode: string | null;
  city: string | null;
  email: string | null;
  phone: string | null;
}

export interface ClientFull extends ClientBasic {
  country: string | null;
  province: string | null;
  county: string | null;
  municipality: string | null;
}

export interface InvoiceBasic {
  id: number;
  invoiceNo: string;
  issuedDate: string;
  totalAmount: number;
  dueDate: string;
  status: Status;
}

export interface ClientWithInvoices extends ClientFull {
  invoices: InvoiceBasic[];
}

export interface GetClientsByCompanyQuery {
  getClientsByCompany: ClientBasic[];
}

export interface GetClientsByCompanyVariables {
  companyId: number;
}

export interface GetClientByIdVariables {
  clientId: number;
}

export interface GetClientByIdQuery {
  getClientById: ClientWithInvoices;
}

export interface AddClientMutation {
  addClient: ClientBasic;
}

export interface AddClientInput {
  companyId: number;
  name: string;
  tin: string | null;
  bin: string | null;
  street: string | null;
  buildingNo: string | null;
  apartmentNo: string | null;
  zipCode: string | null;
  city: string | null;
  country: string | null;
  province: string | null;
  county: string | null;
  municipality: string | null;
  email: string | null;
  phone: string | null;
}
export interface AddClientVariables {
  input: AddClientInput;
}

export interface DeleteClientMutation {
  deleteClient: {
    id: number;
  };
}

export interface DeleteClientVariables {
  clientId: number;
}
