import { Alert } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
// import { IoIosClose } from "react-icons/io";
import { AlertType, AlertVariantType } from "../../types/alert";
import useAlertStore from "../../store/useAlertStore";
interface AlertProps {
  severity: AlertType;
  message: string;
  variant?: AlertVariantType; // 不用寫 undefined 有?就代表惹
}

const CustomerAlert = ({ severity, message, variant }: AlertProps) => {
  const closeAlert = useAlertStore((state) => state.closeAlert);
  const isOpen = useAlertStore((state) => state.isOpen);

  return (
    <Collapse in={isOpen} timeout={1000}>
      <Alert
        severity={severity}
        variant={variant}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              closeAlert();
            }}
          >
            {/* <IoIosClose fontSize="inherit" /> */}
          </IconButton>
        }
        sx={{
          width: "70%",
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)", // 將 alert 置中
          zIndex: 1300,
        }}
      >
        <AlertTitle>
          {severity.charAt(0).toUpperCase() + severity.slice(1)}
        </AlertTitle>
        {message}
      </Alert>
    </Collapse>
  );
};

export default CustomerAlert;
