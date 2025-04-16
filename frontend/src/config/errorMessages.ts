export const errorMessages = {
  USER_NOT_AUTHENTICATED: "Użytkownik niezalogowany.",
  ACCESS_DENIED: "Brak dostępu.",
  CLIENT_NOT_FOUND: "Nie znaleziono klienta.",
  COMPANY_NOT_FOUND: "Nie znaleziono firmy.",
  INVOICE_NOT_FOUND: "Nie znaleziono faktury.",
  PAYMENT_METHOD_NOT_FOUND: "Nie znaleziono metody płatności.",
  PRODUCT_NOT_FOUND: "Nie znaleziono produktu.",
  SETTING_NOT_FOUND: "Nie znaleziono ustawień.",
  CLIENT_HAS_INVOICES:
    "Nie można usunąć klienta, dla którego wystawiono faktury.",
  CLIENT_HAS_INVOICES_U:
    "Dane klienta widnieją na wystawionych fakturach. Jeśli chcesz je zmienić, dodaj nowego klienta.",
  PAYMENT_METHOD_HAS_INVOICES:
    "Nie można zmienić metody płatności, która widnieje na wystawionych fakturach.",
  PRODUCT_HAS_INVOICES:
    "Nie można zmienić danych produktu, który widnieje na wystawionych fakturach.",
  COMPANY_ALREADY_EXISTS: "Firma o podanym NIP już istnieje.",
  INVOICE_ALREADY_EXISTS: "Faktura o danym numerze już istnieje.",
  PAYMENT_METHOD_ALREADY_EXISTS: "Dana metoda płatności już istnieje.",
  USER_NOT_FOUND: "Nie znaleziono użytkownika.",
  INVALID_CREDENTIALS: "Nieprawidłowy email lub hasło.",
  USER_ALREADY_EXISTS: "Konto z podanym adresem email już istnieje.",
  INVALID_TOKEN: "Błąd dostępu.",
  TOKEN_EXPIRED_OR_INVALID: "Błąd dostępu.",
} as const;
