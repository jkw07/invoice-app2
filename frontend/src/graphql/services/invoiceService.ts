import { useQuery } from "@apollo/client";
import { safeId } from "../../utils/safeId";
import {
  GetInvoicesByCompanyQuery,
  GetInvoicesByCompanyVariables,
} from "../types/invoice";
import { GET_INVOICES_BY_COMPANY } from "../queries/invoiceQueries";

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
