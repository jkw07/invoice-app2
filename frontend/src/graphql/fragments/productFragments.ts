import { gql } from "@apollo/client";

export const PRODUCT_BASIC_FIELDS = gql`
  fragment ProductBasicFields on Product {
    id
    name
  }
`;

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
