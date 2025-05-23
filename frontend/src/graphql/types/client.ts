import { InvoiceBasic } from "./invoice";

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
    name: string;
  };
}

export interface DeleteClientVariables {
  clientId: number;
}

export type UpdateClientMutation = {
  updateClient: {
    id: number;
  };
};

export type UpdateClientVariables = {
  clientId: number;
  input: UpdateClientInput;
};

export type UpdateClientInput = {
  name?: string | null;
  tin?: string | null;
  bin?: string | null;
  street?: string | null;
  buildingNo?: string | null;
  apartmentNo?: string | null;
  zipCode?: string | null;
  city?: string | null;
  country?: string | null;
  province?: string | null;
  county?: string | null;
  municipality?: string | null;
  email?: string | null;
  phone?: string | null;
};
