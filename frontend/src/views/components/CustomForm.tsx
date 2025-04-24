import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  Input,
  FormHelperText,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { BlogFormData } from "../../types/blogForm";
import CustomButton from "./CustomButton";

interface CustomFormProps {
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onSubmit: SubmitHandler<BlogFormData>;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CustomForm({ onSubmit, onClick }: CustomFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogFormData>();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 400,
        minWidth: 600,
        padding: 4,
        mx: "auto",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        建立貼文
      </Typography>

      <FormControl error={!!errors.content} variant="standard">
        <Input
          placeholder="在想些什麼?"
          id="content"
          multiline
          disableUnderline
          minRows={10}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: 2,
          }}
          {...register("content", { required: "內容為必填" })}
        />
        <FormHelperText>
          {errors.content ? errors.content.message : ""}
        </FormHelperText>
      </FormControl>

      <Box>
        <CustomButton title="發佈" type="submit" onClick={onClick} />
      </Box>
    </Box>
  );
}
