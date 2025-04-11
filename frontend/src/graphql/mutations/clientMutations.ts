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

export const DELETE_CLIENT = gql`
  mutation DeleteClient($clientId: Int!) {
    deleteClient(clientId: $clientId) {
      id
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($clientId: Int!, $input: UpdateClientInput!) {
    updateClient(clientId: $clientId, input: $input) {
      id
    }
  }
`;
