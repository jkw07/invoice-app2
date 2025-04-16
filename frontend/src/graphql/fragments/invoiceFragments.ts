import { gql } from "@apollo/client";

export const INVOICE_BASIC_FIELDS = gql`
  fragment InvoiceBasicFields on Invoice {
    id
    invoiceNo
    issuedDate
    totalAmount
    dueDate
    status
  }
`;
