import { useMutation, useQuery } from "@apollo/client";
import {
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_COMPANY,
} from "../queries/productQueries";
import {
  AddProductMutation,
  AddProductVariables,
  DeleteProductMutation,
  DeleteProductVariables,
  GetProductByIdQuery,
  GetProductByIdVariables,
  GetProductsByCompanyQuery,
  GetProductsByCompanyVariables,
  UpdateProductMutation,
  UpdateProductVariables,
} from "../types/product";
import { safeId } from "../../utils/safeId";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../mutations/productMutations";

export const useProductsByCompany = (companyId?: number) => {
  return useQuery<GetProductsByCompanyQuery, GetProductsByCompanyVariables>(
    GET_PRODUCTS_BY_COMPANY,
    {
      variables: { companyId: safeId(companyId) },
      skip: !companyId,
      fetchPolicy: "no-cache",
    }
  );
};

export const useProductById = (productId?: number) => {
  return useQuery<GetProductByIdQuery, GetProductByIdVariables>(
    GET_PRODUCT_BY_ID,
    {
      variables: { productId: safeId(productId) },
      skip: !productId,
      fetchPolicy: "no-cache",
    }
  );
};

export const useAddProduct = () => {
  return useMutation<AddProductMutation, AddProductVariables>(ADD_PRODUCT);
};

export const useDeleteProduct = () => {
  return useMutation<DeleteProductMutation, DeleteProductVariables>(
    DELETE_PRODUCT
  );
};

export const useUpdateProduct = () => {
  return useMutation<UpdateProductMutation, UpdateProductVariables>(
    UPDATE_PRODUCT
  );
};
