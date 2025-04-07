import { gql } from "@apollo/client";
import {
  COMPANY_BASIC_FIELDS,
  COMPANY_FULL_FIELDS,
} from "../fragments/companyFragments";

export const GET_DEFAULT_COMPANY = gql`
  query GetDefaultCompanyByUser {
    getDefaultCompanyByUser {
      ...CompanyBasicFields
    }
  }
  ${COMPANY_BASIC_FIELDS}
`;

export const GET_COMPANIES_BY_USER = gql`
  query GetCompaniesByUser {
    getCompaniesByUser {
      ...CompanyBasicFields
    }
  }
  ${COMPANY_BASIC_FIELDS}
`;

export const GET_COMPANY_BY_ID_FULL = gql`
  query GetCompanyByIdFull($companyId: Int!) {
    getCompanyById(companyId: $companyId) {
      ...CompanyFullFields
    }
  }
  ${COMPANY_FULL_FIELDS}
`;
//nazwa operacji dla apollo
//nazwa resolvera
//przy kolejnych nowe nazwy query!!
