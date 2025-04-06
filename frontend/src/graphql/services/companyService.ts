import { useMutation, useQuery } from "@apollo/client";
import {
  GET_COMPANIES_BY_USER,
  GET_DEFAULT_COMPANY,
} from "../queries/companyQueries";
import {
  CreateCompanyMutation,
  CreateCompanyVariables,
  GetCompaniesByUserQuery,
  GetDefaultCompanyByUserQuery,
} from "../types/company";
import { CREATE_COMPANY } from "../mutations/companyMutations";

export const useDefaultCompany = (skip = false) => {
  return useQuery<GetDefaultCompanyByUserQuery>(GET_DEFAULT_COMPANY, {
    skip,
    fetchPolicy: "no-cache",
  });
};

export const useCompaniesByUser = () => {
  return useQuery<GetCompaniesByUserQuery>(GET_COMPANIES_BY_USER, {
    fetchPolicy: "no-cache",
  });
};

export const useCreateCompany = () => {
  return useMutation<CreateCompanyMutation, CreateCompanyVariables>(
    CREATE_COMPANY
  );
};
