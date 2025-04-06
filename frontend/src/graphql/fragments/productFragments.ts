import { gql } from "@apollo/client";

export const PRODUCT_FULL_FIELDS = gql`
  fragment ProductFullFields on Product {
    id
    name
    description
    price
    unit
    taxType
    taxRate
  }
`;
