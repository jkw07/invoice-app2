import { gql } from "@apollo/client";

export const PAYMENT_METHODS_QUERY = gql`
  query GetPaymentMethodsByUser {
    getPaymentMethodsByUser {
      id
      method
    }
  }
`;
