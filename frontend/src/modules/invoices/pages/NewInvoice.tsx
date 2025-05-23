import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AlertColor, Button } from "@mui/material";
import { useAddInvoiceWithItems } from "../../../graphql/services/invoiceService";
import { useUserStore } from "../../../store/currentUserStore";
import { safeId } from "../../../utils/safeId";
import { translateError } from "../../../utils/translateError";
import { AlertDialog } from "../../../components/AlertDialog";
import {
  CreateInvoiceInput,
  CreateInvoiceItemInput,
} from "../../../graphql/types/invoice";
import { useNavigation } from "../../../hooks/useNavigation";
import { emptyInvoice } from "../utils/defaultFormData";
import { DefaultForm } from "../components.tsx/DefaultForm";

interface AlertType {
  severity: AlertColor | undefined;
  message: string;
}

export const NewInvoice = () => {
  const companyId = useUserStore((state) => state.company?.id);
  const [newInvoiceData, setNewInvoiceData] =
    useState<CreateInvoiceInput>(emptyInvoice);
  const [invoiceItems, setInvoiceItems] = useState<CreateInvoiceItemInput[]>(
    []
  );
  const [addInvoiceWithItems, { loading }] = useAddInvoiceWithItems();
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState<AlertType>({
    severity: undefined,
    message: "",
  });
  const { goToInvoicesModule } = useNavigation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewInvoiceData((prev) => ({
      ...prev,
      [name]: value === "" ? null : value,
    }));
  };

  const parsedInvoiceData = {
    ...newInvoiceData,
    companyId: safeId(companyId),
    buyerId: Number(newInvoiceData.buyerId),
    paymentId: Number(newInvoiceData.paymentId),
    totalAmount: Number(newInvoiceData.totalAmount),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId) {
      setAlert({
        severity: "error",
        message: "Brak przypisanej firmy. Spróbuj ponownie.",
      });
      setOpenDialog(true);
      return;
    }
    try {
      await addInvoiceWithItems({
        variables: {
          inputInvoice: parsedInvoiceData,
          inputItem: invoiceItems,
        },
        onCompleted: () => {
          setAlert({ severity: "success", message: "Faktura została dodana!" });
          setOpenDialog(true);
        },
      });
    } catch (error) {
      const errorKey = error instanceof Error ? error.message : "UNKNOWN_ERROR";
      setAlert({
        severity: "error",
        message: `Błąd: ${translateError(errorKey)}`,
      });
      setOpenDialog(true);
    }
  };

  const handleReset = () => {
    setNewInvoiceData(emptyInvoice);
    setInvoiceItems([]);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    goToInvoicesModule();
  };

  return (
    <>
      <AlertDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        alertSeverity={alert.severity}
        alertMessage={alert.message}
      />
      <h2>Nowa Faktura</h2>
      <NavLink to="/invoices" className="link-button">
        <Button>Powrót</Button>
      </NavLink>
      <DefaultForm
        formData={newInvoiceData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        loading={loading}
        invoiceItems={invoiceItems}
        setInvoiceItems={setInvoiceItems}
      />
    </>
  );
};
