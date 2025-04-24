import { TextField } from "@mui/material";
import { Box, Avatar } from "@mui/material";
import CustomDialog from "../../components/CustomDialog";
import useDialogStore from "../../../store/useDialogStore";
import BlogForm from "../../components/BlogForm";
import { SubmitHandler } from "react-hook-form";
import { BlogFormData } from "../../../types/blogForm";

type InputSetter = (value: string) => void;

interface CreateBlogProp {
  title: string;
  content: string;
  author: string;
  onSubmit: SubmitHandler<BlogFormData>;
  setAuthor: InputSetter;
  setContent: InputSetter;
  setTitle: InputSetter;
}

const CreateBlog = ({
  title,
  content,
  author,
  onSubmit,
  setAuthor,
  setContent,
  setTitle,
}: CreateBlogProp) => {
  const showDialog = useDialogStore((state) => state.showDialog);
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

      <CustomDialog
        content={
          <BlogForm
            onSubmit={onSubmit}
            title={title}
            content={content}
            author={author}
            setAuthor={setAuthor}
            setContent={setContent}
            setTitle={setTitle}
          />
        }
      />
    </Box>
  );
};
export default CreateBlog;
