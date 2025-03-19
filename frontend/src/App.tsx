import { useState } from "react";

const API_URL = "http://localhost:4000";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [amount, setAmount] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  type Invoice = {
    id: string;
    userId: string;
    amount: number;
    createdAt: string;
  };

  //Rejestracja
  const register = async () => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log("Rejestracja:", data);
  };

  //Logowanie
  const login = async () => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      setToken(data.access_token);
      console.log("Zalogowano:", data);
    }
  };

  //Dodawanie faktury (TODO: tylko po zalogowaniu)
  const addInvoice = async () => {
    if (!token) return alert("Musisz być zalogowany!");
    const res = await fetch(`${API_URL}/invoices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount: parseFloat(amount) }),
    });
    const data = await res.json();
    console.log("Dodano fakturę:", data);
    fetchInvoices();
  };

  // Pobieranie faktur
  const fetchInvoices = async () => {
    if (!token) return alert("Musisz być zalogowany!");
    const decodedToken = JSON.parse(atob(token.split(".")[1])); //Dekodowanie
    const userId = decodedToken.sub; // to ID użytkownika
    console.log("User ID from token:", userId);
    const res = await fetch(`${API_URL}/invoices/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setInvoices(data);
    console.log(`ponbrano faktury: ${data}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Faktury</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Rejestracja</button>
      <button onClick={login}>Logowanie</button>

      {token && (
        <>
          <h2>Dodaj Fakturę</h2>
          <input
            type="number"
            placeholder="Kwota"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={addInvoice}>Dodaj fakturę</button>

          <h2>Lista Faktur</h2>
          <button onClick={fetchInvoices}>Pobierz faktury</button>
          <ul>
            {invoices.map((inv: Invoice) => (
              <li key={inv.id}>
                ID: {inv.id} - Kwota: {inv.amount} zł
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
