import { create } from "zustand";
import { VatRate } from "../graphql/types/vatRate";

type User = {
  id: string;
  email: string;
};

type Company = {
  id: number;
  fullName: string;
};

interface UserState {
  user: User | null;
  company: Company | null;
  vatRates: VatRate[] | null;
  setUser: (user: User | null) => void;
  setCompany: (company: Company | null) => void;
  replaceCompany: (company: Company | null) => void;
  setVatRates: (vatRates: VatRate[]) => void;
}

const getUserFromStorage = (): User | null => {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
};

const getCompanyFromStorage = (): Company | null => {
  const stored = localStorage.getItem("company");
  return stored ? JSON.parse(stored) : null;
};

export const useUserStore = create<UserState>((set) => ({
  user: getUserFromStorage(),
  company: getCompanyFromStorage(),
  vatRates: null,
  setUser: (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    set({ user });
  },
  setCompany: (company) => {
    if (company) {
      localStorage.setItem("company", JSON.stringify(company));
    } else {
      localStorage.removeItem("company");
    }
    set({ company });
  },
  replaceCompany: (company) => {
    if (company) {
      localStorage.removeItem("company");
      localStorage.setItem("company", JSON.stringify(company));
    } else {
      localStorage.removeItem("company");
    }
    set({ company });
  },
  setVatRates: (vatRates) => {
    set({ vatRates });
  },
}));
