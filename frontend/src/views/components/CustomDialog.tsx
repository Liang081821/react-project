import * as React from "react";
import Dialog from "@mui/material/Dialog";
import useDialogStore from "../../store/useDialogStore";
import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CustomDialogProps {
  content: React.ReactNode;
  title: string;
}

export default function CustomDialog({ content, title }: CustomDialogProps) {
  const isOpen = useDialogStore((state) => state.isOpen); // 這種取值的方法只會訂閱單一個狀態，重新渲染訂閱的狀態
  const closeDialog = useDialogStore((state) => state.closeDialog);

  return (
    <Dialog open={isOpen}>
      <DialogTitle sx={{ position: "relative" }}>
        {title}
        <IconButton
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          onClick={() => {
            closeDialog();
            console.log("Click close");
            console.log(isOpen);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {content}
    </Dialog>
  );
}
