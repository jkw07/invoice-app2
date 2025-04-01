import { create } from "zustand";

type User = {
  id: string;
  email: string;
};

interface UserState {
  user: User | null;
  companyId: number | null;
  setUser: (user: User | null) => void;
  setCompanyId: (companyId: number | null) => void;
}

const getUserFromStorage = (): User | null => {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
};

const getCompanyFromStorage = (): number | null => {
  const stored = localStorage.getItem("companyId");
  return stored ? JSON.parse(stored) : null;
};

export const useUserStore = create<UserState>((set) => ({
  user: getUserFromStorage(),
  companyId: getCompanyFromStorage(),
  setUser: (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    set({ user });
  },
  setCompanyId: (companyId) => {
    if (companyId) {
      localStorage.setItem("companyId", JSON.stringify(companyId));
    } else {
      localStorage.removeItem("companyId");
    }
    set({ companyId });
  },
}));
