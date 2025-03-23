export const addInvoice = async (invoice: {
  client: string;
  amount: number;
  date: string;
}) => {
  console.log("Adding invoice to Firestore", invoice);
};

export const getInvoices = async () => {
  console.log("Fetching invoices from Firestore");
};
