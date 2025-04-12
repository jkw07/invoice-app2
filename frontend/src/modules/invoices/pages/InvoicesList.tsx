import { useInvoicesNavigation } from "../hooks/useInvoicesNavigation";
export const InvoicesList = () => {
  const { goToNewInvoice } = useInvoicesNavigation();
  /* const { company, setCompany } = useUserStore();
  const { data, loading, error } = useQuery(GET_DEFAULT_COMPANY, {
    skip: company !== null,
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    if (data?.getDefaultCompanyByUser && !company) {
      const defaultCompany = data.getDefaultCompanyByUser;
      setCompany(defaultCompany);
    }
  }, [data, company, setCompany]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>; */
  return (
    <>
      <h1>Lista faktur</h1>
      <button onClick={goToNewInvoice}>Dodaj nową fakturę</button>
    </>
  );
};
