import { gql } from "@apollo/client";
import { COMPANY_BASIC_FIELDS } from "../fragments/companyFragments";

export const CREATE_COMPANY = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      ...CompanyBasicFields
    }
  }
  ${COMPANY_BASIC_FIELDS}
`;
