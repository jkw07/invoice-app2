import { useQuery } from "@apollo/client";
import { PAYMENT_METHODS_QUERY } from "../queries/paymentMethodsQueries";
import { GetPaymentMethodsQuery } from "../types/paymentMethods";

export const usePaymentMethod = () => {
  return useQuery<GetPaymentMethodsQuery>(PAYMENT_METHODS_QUERY);
};
