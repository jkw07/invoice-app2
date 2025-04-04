import { gql } from "@apollo/client";
import { CLIENT_BASIC_FIELDS } from "../fragments/clientFragments";
import { CLIENT_FULL_FIELDS } from "../fragments/clientFragments";

export const GET_CLIENTS_BY_COMPANY = gql`
  query getClientsByCompany($companyId: Int!) {
    getClientsByCompany(companyId: $companyId) {
      ...ClientBasicFields
    }
  }
  ${CLIENT_BASIC_FIELDS}
`;

export const GET_CLIENT_BY_ID = gql`
  query getClientById($clientId: Int!) {
    getClientById(clientId: $clientId) {
      ...ClientFullFields
    }
  }
  ${CLIENT_FULL_FIELDS}
`;
