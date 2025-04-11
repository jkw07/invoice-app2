import { AddClientInput } from "../../../graphql/types/client";

export const emptyClient: AddClientInput = {
  companyId: 0,
  name: "",
  tin: null,
  bin: null,
  street: null,
  buildingNo: null,
  apartmentNo: null,
  zipCode: null,
  city: null,
  country: null,
  province: null,
  county: null,
  municipality: null,
  email: null,
  phone: null,
};
