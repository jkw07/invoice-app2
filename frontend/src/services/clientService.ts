import { Client } from "../modules/clients/types";

export const addClient = async (client: {
  name: string;
  taxId: string;
  address: string;
  email: string;
  phone: string;
}) => {
  console.log("Adding client to Firestore", client);
};

export const getClients = async () => {
  console.log("Fetching clients from Firestore");
};

export const getClientById = async (clientId: string) => {
  console.log("Fetching client by ID from Firestore", clientId);
};

export const deleteClient = async (clientId: string) => {
  console.log("Deleting client from Firestore", clientId);
};

export const updateClient = async (
  clientId: string,
  updatedData: Partial<Client>
) => {
  console.log("Updating client in Firestore", clientId, updatedData);
};
