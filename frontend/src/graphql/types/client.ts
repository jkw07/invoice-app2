export interface ClientBasic {
  id: number;
  name: string;
}

export interface ClientFull extends ClientBasic {
  tin: string;
  bin: string;
  street: string;
  buildingNo: string;
  apartmentNo: string | null;
  zipCode: string;
  city: string;
  province: string;
  county: string;
  municipality: string;
  email: string | null;
  phone: string | null;
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
  getClientById: ClientFull;
}
