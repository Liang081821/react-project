import { TextField } from "@mui/material";
import { Box, Avatar } from "@mui/material";
import CustomDialog from "../../components/CustomDialog";
import useDialogStore from "../../../store/useDialogStore";
import BlogForm from "./BlogForm";
import { SubmitHandler } from "react-hook-form";
import { BlogFormData } from "../../../types/blogForm";

interface CreateBlogProp {
  onSubmit: SubmitHandler<BlogFormData>;
}

const BlogDialog = ({ onSubmit }: CreateBlogProp) => {
  const showDialog = useDialogStore((state) => state.showCreateDialog);
  return (
    <Box
      sx={{
        backgroundColor: "#fcfcfc",
        width: "50%",
        display: "flex",
        alignItems: "center",
        padding: "8px",
        gap: "8px",
      }}
    >
      <Avatar></Avatar>
      <TextField
        onClick={() => showDialog()}
        sx={{
          borderRadius: "100px",
          backgroundColor: "#f5f5f5",
          flexGrow: 1,
          cursor: "pointer",

          "& .MuiOutlinedInput-root": {
            borderRadius: "100px",
            height: "40px",
          },
          "& .MuiOutlinedInput-input": {
            // 覆蓋游標的 text
            cursor: "pointer",
          },
        }}
        placeholder="量，你在想什麼?"
      />

      <CustomDialog content={<BlogForm onSubmit={onSubmit} />} />
    </Box>
  );
};
export default BlogDialog;
