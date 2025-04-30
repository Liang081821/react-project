import * as React from "react";
import Dialog from "@mui/material/Dialog";
import useDialogStore from "../../store/useDialogStore";
import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CustomDialogProps {
  content: React.ReactNode;
}

export default function CustomDialog({ content }: CustomDialogProps) {
  const dialog = useDialogStore((state) => state.dialog);
  const isCreatePostDialogOpen = dialog === "create";
  const closeDialog = useDialogStore((state) => state.closeDialog);

  return (
    <Dialog open={isCreatePostDialogOpen}>
      <DialogTitle sx={{ position: "relative" }}>
        <IconButton
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          onClick={() => closeDialog()}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {content}
    </Dialog>
  );
}
