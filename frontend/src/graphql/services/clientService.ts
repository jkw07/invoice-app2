import { useMutation, useQuery } from "@apollo/client";
import {
  GET_CLIENT_BY_ID,
  GET_CLIENTS_BY_COMPANY,
} from "../queries/clientQueries";
import {
  AddClientMutation,
  AddClientVariables,
  DeleteClientMutation,
  DeleteClientVariables,
  GetClientByIdQuery,
  GetClientByIdVariables,
  GetClientsByCompanyQuery,
  GetClientsByCompanyVariables,
} from "../types/client";
import { safeId } from "../../utils/safeId";
import { ADD_CLIENT, DELETE_CLIENT } from "../mutations/clientMutations";

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

export const useAddClient = () => {
  return useMutation<AddClientMutation, AddClientVariables>(ADD_CLIENT);
};

export const useDeleteClient = () => {
  return useMutation<DeleteClientMutation, DeleteClientVariables>(
    DELETE_CLIENT
  );
};
