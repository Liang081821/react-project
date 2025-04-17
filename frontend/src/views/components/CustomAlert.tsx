import { Snackbar, Alert } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import { AlertType, AlertVariantType } from "../../types/alert";
import useAlertStore from "../../store/useAlertStore";
interface AlertProps {
  severity: AlertType;
  message: string;
  variant?: AlertVariantType; // 不用寫 undefined 有?就代表惹
}

const CustomerAlert = ({ severity, message, variant }: AlertProps) => {
  const isOpen = useAlertStore((state) => state.isOpen);

  return (
    <Snackbar
      open={isOpen}
      // onClose={closeAlert}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ width: "100%" }}
    >
      <Alert severity={severity} variant={variant} sx={{ width: "50%" }}>
        <AlertTitle>{severity}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomerAlert;
