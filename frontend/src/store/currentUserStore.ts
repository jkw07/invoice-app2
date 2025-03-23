import { create } from "zustand";

type User = {
  id: string;
  email: string;
};

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

const getUserFromStorage = (): User | null => {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
};

export const useUserStore = create<UserState>((set) => ({
  user: getUserFromStorage(),
  setUser: (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    set({ user });
  },
}));
