import { useMutation, useQuery } from "@apollo/client";
import { safeId } from "../../utils/safeId";
import {
  AddInvoiceWithItemsMutation,
  AddInvoiceWithItemsMutationVariables,
  GetInvoicesByCompanyQuery,
  GetInvoicesByCompanyVariables,
} from "../types/invoice";
import { GET_INVOICES_BY_COMPANY } from "../queries/invoiceQueries";
import { ADD_INVOICE } from "../mutations/invoiceMutations";

export const useInvoicesByCompany = (companyId?: number) => {
  return useQuery<GetInvoicesByCompanyQuery, GetInvoicesByCompanyVariables>(
    GET_INVOICES_BY_COMPANY,
    {
      variables: { companyId: safeId(companyId) },
      skip: !companyId,
      fetchPolicy: "no-cache",
    }
  );
};

export const useAddInvoiceWithItems = () => {
  return useMutation<
    AddInvoiceWithItemsMutation,
    AddInvoiceWithItemsMutationVariables
  >(ADD_INVOICE);
};
