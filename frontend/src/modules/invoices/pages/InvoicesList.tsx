import { useInvoicesNavigation } from "../hooks/useInvoicesNavigation";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_DEFAULT_COMPANY } from "../../../graphql/company-queries";
import { useUserStore } from "../../../store/currentUserStore";
export const InvoicesList = () => {
  const { goToNewInvoice } = useInvoicesNavigation();
  const { companyId, setCompanyId } = useUserStore();
  const { data, loading, error } = useQuery(GET_DEFAULT_COMPANY, {
    skip: companyId !== null,
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    if (data && data.getDefaultCompanyByUser && !companyId) {
      const defaultCompanyId = data.getDefaultCompanyByUser.id;
      setCompanyId(defaultCompanyId);
    }
  }, [data, companyId, setCompanyId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <h1>Lista faktur</h1>
      <button onClick={goToNewInvoice}>Dodaj nową fakturę</button>
    </>
  );
};
