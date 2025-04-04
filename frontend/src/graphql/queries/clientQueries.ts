import { gql } from "@apollo/client";
import { CLIENT_BASIC_FIELDS } from "../fragments/clientFragments";

export const GET_CLIENTS_BY_USER = gql`
  query getClientsByCompany {
    getClientsByCompany {
      ...ClientBasicFields
    }
  }
  ${CLIENT_BASIC_FIELDS}
`;
