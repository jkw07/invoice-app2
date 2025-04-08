import { useQuery } from "@apollo/client";
import { GetVatRatesQuery } from "../types/vatRate";
import { VAT_RATES_QUERY } from "../queries/vatRateQueries";

export const useVatRate = () => {
  return useQuery<GetVatRatesQuery>(VAT_RATES_QUERY);
};
