import { gql } from "@apollo/client";
import { CLIENT_BASIC_FIELDS } from "../fragments/clientFragments";
import { CLIENT_FULL_FIELDS } from "../fragments/clientFragments";
import { INVOICE_BASIC_FIELDS } from "../fragments/invoiceFragments";

export const GET_CLIENTS_BY_COMPANY = gql`
  query GetClientsByCompany($companyId: Int!) {
    getClientsByCompany(companyId: $companyId) {
      ...ClientBasicFields
    }
  }
  ${CLIENT_BASIC_FIELDS}
`;

export const GET_CLIENT_BY_ID = gql`
  query GetClientById($clientId: Int!) {
    getClientById(clientId: $clientId) {
      ...ClientFullFields
      invoices {
        ...InvoiceBasicFields
      }
    }
  }
  ${CLIENT_FULL_FIELDS}
  ${INVOICE_BASIC_FIELDS}
`;
