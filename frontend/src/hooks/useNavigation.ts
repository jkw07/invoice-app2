import { useNavigate } from "react-router-dom";
import { ROUTES } from "../config/routes";

export function useNavigation() {
  const navigate = useNavigate();
  const goToInvoicesModule = () => navigate(ROUTES.INVOICES);
  const goToClientsModule = () => navigate(ROUTES.CLIENTS);
  const goToProductsModule = () => navigate(ROUTES.PRODUCTS);
  return {
    goToInvoicesModule,
    goToClientsModule,
    goToProductsModule,
  };
}
