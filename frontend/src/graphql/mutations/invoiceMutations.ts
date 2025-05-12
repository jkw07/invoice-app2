import { gql } from "@apollo/client";
import { INVOICE_BASIC_FIELDS } from "../fragments/invoiceFragments";

export const UPDATE_INVOICE_STATUS = gql`
  mutation UpdateInvoiceStatus(
    $invoiceId: Int!
    $inputInvoice: UpdateInvoiceInput!
  ) {
    updateInvoice(invoiceId: $invoiceId, inputInvoice: $input) {
      id
    }
  }
`;

export const ADD_INVOICE = gql`
  mutation addInvoiceWithItems(
    $inputInvoice: CreateInvoiceInput!
    $inputItem: CreateInvoiceItemInput!
  ) {
    addInvoiceWithItems(inputInvoice: $inputInvoice, inputItem: $inputItem) {
      ...InvoiceBasicFields
    }
  }
  ${INVOICE_BASIC_FIELDS}
`;
