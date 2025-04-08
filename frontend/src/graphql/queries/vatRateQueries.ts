import { gql } from "@apollo/client";

export const VAT_RATES_QUERY = gql`
  query GetVatRates {
    getVatRates {
      id
      type
      rate
    }
  }
`;
