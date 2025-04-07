import { gql } from "@apollo/client";
import { CLIENT_BASIC_FIELDS } from "../fragments/clientFragments";
import { CLIENT_FULL_FIELDS } from "../fragments/clientFragments";

export const GET_CLIENTS_BY_COMPANY = gql`
  query GetClientsByCompany($companyId: Int!) {
    getClientsByCompany(companyId: $companyId) {
      ...ClientBasicFields
    }
  }
  ${CLIENT_BASIC_FIELDS}
`;

export const GET_CLIENT_BY_ID = gql`
  query GetClientById($clientId: Int!, $companyId: Int!) {
    getClientById(clientId: $clientId, companyId: $companyId) {
      ...ClientFullFields
    }
  }
  ${CLIENT_FULL_FIELDS}
`;
