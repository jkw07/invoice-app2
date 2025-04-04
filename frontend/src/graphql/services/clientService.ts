import { useQuery } from "@apollo/client";
import {
  GET_CLIENT_BY_ID,
  GET_CLIENTS_BY_COMPANY,
} from "../queries/clientQueries";
import {
  GetClientByIdQuery,
  GetClientByIdVariables,
  GetClientsByCompanyQuery,
  GetClientsByCompanyVariables,
} from "../types/client";
import { safeId } from "../../utils/safeId";

export const useClientsByCompany = (companyId?: number) => {
  return useQuery<GetClientsByCompanyQuery, GetClientsByCompanyVariables>(
    GET_CLIENTS_BY_COMPANY,
    {
      variables: { companyId: safeId(companyId) },
      skip: !companyId,
      fetchPolicy: "no-cache",
    }
  );
};

export const useClientById = (clientId?: number) => {
  return useQuery<GetClientByIdQuery, GetClientByIdVariables>(
    GET_CLIENT_BY_ID,
    {
      variables: { clientId: safeId(clientId) },
      skip: !clientId,
      fetchPolicy: "no-cache",
    }
  );
};
