import { NavLink } from "react-router-dom";
import {
  FileText,
  ShoppingCart,
  Users,
  Bell,
  Settings,
  ChartArea,
  LogOut,
} from "lucide-react";
import { ROUTES } from "../config/routes";
import { logoutUser } from "../graphql/services/authService";
import logo from "../../public/assets/logo/logo1sidebar.png";
import { LOGOUT_MUTATION } from "../graphql/mutations/authMutations";
import { useMutation } from "@apollo/client";

export const Sidebar = () => {
  const [logout] = useMutation(LOGOUT_MUTATION);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.warn("Logout mutation failed", error);
    } finally {
      logoutUser();
    }
  };
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="sidebar-nav">
        <NavLink to={ROUTES.INVOICES} className="sidebar-button">
          <FileText size={28} />
          <span className="sidebar-tooltip">Faktury</span>
        </NavLink>
        <NavLink to={ROUTES.PRODUCTS} className="sidebar-button">
          <ShoppingCart size={28} />
          <span className="sidebar-tooltip">Produkty</span>
        </NavLink>
        <NavLink to={ROUTES.CLIENTS} className="sidebar-button">
          <Users size={28} />
          <span className="sidebar-tooltip">Klienci</span>
        </NavLink>
        <NavLink to={ROUTES.REMINDERS} className="sidebar-button">
          <Bell size={28} />
          <span className="sidebar-tooltip">Powiadomienia</span>
        </NavLink>
        <NavLink to={ROUTES.REPORTS} className="sidebar-button">
          <ChartArea size={28} />
          <span className="sidebar-tooltip">Raporty</span>
        </NavLink>
        <NavLink to={ROUTES.SETTINGS} className="sidebar-button">
          <Settings size={28} />
          <span className="sidebar-tooltip">Ustawienia</span>
        </NavLink>
        <div className="sidebar-button" onClick={handleLogout}>
          <LogOut size={28} />
          <span className="sidebar-tooltip">Wyloguj</span>
        </div>
      </div>
    </nav>
  );
};
