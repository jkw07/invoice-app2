import { create } from "zustand";

type User = {
  id: string;
  email: string;
};

type Company = {
  id: number;
  name: string;
};

interface UserState {
  user: User | null;
  company: Company | null;
  setUser: (user: User | null) => void;
  setCompany: (company: Company | null) => void;
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
}));
