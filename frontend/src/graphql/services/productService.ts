import { useQuery } from "@apollo/client";
import {
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_COMPANY,
} from "../queries/productQueries";
import {
  GetProductByIdQuery,
  GetProductByIdVariables,
  GetProductsByCompanyQuery,
  GetProductsByCompanyVariables,
} from "../types/product";
import { safeId } from "../../utils/safeId";

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
