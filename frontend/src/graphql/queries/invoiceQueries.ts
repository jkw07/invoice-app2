import { gql } from "@apollo/client";

export const GET_INVOICE_BY_ID = gql`
  query GetInvoiceById($invoiceId: Int!) {
    getInvoiceById(invoiceId: $invoiceId) {
      id
      amount
      date
      // inne pola
    }
  }
`;
