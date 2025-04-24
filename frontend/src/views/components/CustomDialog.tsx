import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useDialogStore from "../../store/useDialogStore";
import CustomButton from "./CustomButton";

interface CustomDialogProps {
  content: React.ReactNode;
}

export default function CustomDialog({ content }: CustomDialogProps) {
  const isOpen = useDialogStore((state) => state.isOpen);
  const closeDialog = useDialogStore((state) => state.closeDialog);
  return (
    <Dialog open={isOpen}>
      {content}

      <DialogActions>
        <CustomButton
          title="Cancel"
          type="button"
          onClick={() => closeDialog()}
        />
      </DialogActions>
    </Dialog>
  );
}
