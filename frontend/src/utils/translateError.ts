import { errorMessages } from "../config/errorMessages";

export const translateError = (errorKey: string) => {
  return (
    (errorMessages as Record<string, string>)[errorKey] ||
    "Wystąpił nieznany błąd."
  );
};
