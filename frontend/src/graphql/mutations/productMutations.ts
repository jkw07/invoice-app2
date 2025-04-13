import { gql } from "@apollo/client";
import { PRODUCT_BASIC_FIELDS } from "../fragments/productFragments";

export const ADD_PRODUCT = gql`
  mutation AddProduct($input: CreateProductInput!) {
    addProduct(input: $input) {
      ...ProductBasicFields
    }
  }
  ${PRODUCT_BASIC_FIELDS}
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: Int!) {
    deleteProduct(productId: $productId) {
      name
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($productId: Int!, $input: UpdateProductInput!) {
    updateProduct(productId: $productId, input: $input) {
      id
    }
  }
`;
