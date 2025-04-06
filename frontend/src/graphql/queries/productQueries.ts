import { gql } from "@apollo/client";
import { PRODUCT_FULL_FIELDS } from "../fragments/productFragments";

export const GET_PRODUCTS_BY_COMPANY = gql`
  query getProductsByCompany($companyId: Int!) {
    getProductsByCompany(companyId: $companyId) {
      ...ProductFullFields
    }
  }
  ${PRODUCT_FULL_FIELDS}
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($productId: Int!) {
    getProductById(productId: $productId) {
      ...ProductFullFields
    }
  }
  ${PRODUCT_FULL_FIELDS}
`;
