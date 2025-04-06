export interface CompanyBasic {
  id: number;
  fullName: string;
}

export interface CompanyFull extends CompanyBasic {
  shortName: string | null;
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

export interface GetDefaultCompanyByUserQuery {
  getDefaultCompanyByUser: CompanyBasic;
}

export interface GetCompaniesByUserQuery {
  getCompaniesByUser: CompanyBasic[];
}

export interface GetCompanyByIdFullVariables {
  companyId: number;
}

export interface GetCompanyByIdFullQuery {
  getCompanyById: CompanyFull;
}

export interface CreateCompanyMutation {
  createCompany: CompanyBasic;
}

export interface CreateCompanyVariables {
  input: {
    fullName: string;
    shortName: string | null;
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
  };
}
