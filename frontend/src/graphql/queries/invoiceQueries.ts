import { gql } from "@apollo/client";
import { INVOICE_BASIC_FIELDS } from "../fragments/invoiceFragments";

export const GET_INVOICE_BY_ID = gql`
  query GetInvoiceById($invoiceId: Int!) {
    getInvoiceById(invoiceId: $invoiceId) {
      id
      amount
      date
    }
  }
`;

export const GET_INVOICES_BY_COMPANY = gql`
  query GetInvoicesByCompany($companyId: Int!) {
    getInvoicesByCompany(companyId: $companyId) {
      ...InvoiceBasicFields
      buyer {
        name
      }
    }
  }
  ${INVOICE_BASIC_FIELDS}
`;
