import { gql } from "@apollo/client";

export const GET_INVOICE_BY_ID = gql`
  query GetInvoiceById($invoiceId: Int!, $companyId: Int!) {
    getInvoiceById(invoiceId: $invoiceId, companyId: $companyId) {
      id
      amount
      date
      // inne pola faktury, które chcesz pobrać
    }
  }
`;
