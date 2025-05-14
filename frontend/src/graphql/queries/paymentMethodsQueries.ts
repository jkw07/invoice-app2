import { gql } from "@apollo/client";

export const PAYMENT_METHODS_QUERY = gql`
  query GetPaymentMethods {
    getPaymentMethods {
      id
      method
    }
  }
`;
