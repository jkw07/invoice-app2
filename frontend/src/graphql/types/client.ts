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

export interface GetClientsByCompanyQuery {
  getClientsByCompany: ClientBasic[];
}

export interface GetClientsByCompanyVariables {
  companyId: number;
}

export interface GetClientByIdVariables {
  clientId: number;
  companyId: number;
}

export interface GetClientByIdQuery {
  getClientById: ClientFull;
}

export interface AddClientMutation {
  addClient: ClientBasic;
}

export interface AddClientVariables {
  input: {
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
  };
}

export interface DeleteClientMutation {
  deleteClient: {
    id: number;
  };
}

export interface DeleteClientVariables {
  clientId: number;
}
