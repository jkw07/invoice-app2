import { Company } from "../modules/settings/types";

export const addCompany = async (company: {
  fullName: string;
  shortName: string;
  tin: string; // NIP
  bin: string; // REGON
  address: {
    street: string;
    buildingNumber: string;
    apartmentNumber?: string;
    zipCode: string;
    city: string;
    province: string; // Województwo
    county: string; // Powiat
    municipality: string; // Gmina
  };
  email: string;
  phone: string;
  seller: string;
}) => {
  console.log("Adding company to Firestore", company);
};

export const getCompany = async () => {
  console.log("Fetching company from Firestore");
};

export const updateCompany = async (
  companyId: string,
  updatedData: Partial<Company>
) => {
  console.log("Updating company in Firestore", companyId, updatedData);
};
