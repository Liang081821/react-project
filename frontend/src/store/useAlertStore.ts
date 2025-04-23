import { create } from "zustand";
import { AlertType, AlertVariantType } from "../types/alert";

interface AlertProps {
  isOpen: boolean;
  severity: AlertType;
  message: string;
  variant: AlertVariantType;
  showAlert: (
    severity: AlertType,
    message: string,
    variant?: AlertVariantType
  ) => void;
  closeAlert: () => void;
}

const useAlertStore = create<AlertProps>((set) => ({
  isOpen: false,
  severity: "info",
  message: "",
  variant: "outlined",

  showAlert: (severity, message, variant) =>
    set(() => ({
      severity,
      message,
      variant,
      isOpen: true,
    })),

  closeAlert: () =>
    set(() => ({
      isOpen: false,
    })),
}));
export default useAlertStore;
