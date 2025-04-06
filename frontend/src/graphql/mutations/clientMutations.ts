import { gql } from "@apollo/client";
import { CLIENT_BASIC_FIELDS } from "../fragments/clientFragments";

export const ADD_CLIENT = gql`
  mutation AddClient($input: CreateClientInput!) {
    addClient(input: $input) {
      ...ClientBasicFields
    }
  }
  ${CLIENT_BASIC_FIELDS}
`;
