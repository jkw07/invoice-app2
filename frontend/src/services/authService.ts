import { useUserStore } from "../store/currentUserStore";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const registerUser = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Błąd rejestracji");
  }
  return res.json();
};

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  console.log("ODPOWIEDŹ Z BACKENDU:", data);

  if (!res.ok) {
    throw new Error(data.message || "Błąd logowania");
  }

  if (data.access_token && data.user) {
    localStorage.setItem("accessToken", data.access_token);
    useUserStore.getState().setUser({
      id: data.user.id,
      email: data.user.email,
    });
    return data;
  }

  throw new Error("Brak tokena w odpowiedzi");
};

export const logoutUser = () => {
  localStorage.removeItem("accessToken");
  useUserStore.getState().setUser(null);
};
