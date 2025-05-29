import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  Input,
  FormHelperText,
  Box,
  Typography,
} from "@mui/material";
import { BlogFormData } from "../../types/blogForm";
import CustomButton from "./CustomButton";
import { BlogItem } from "../../models/Blog";

interface CustomFormProps {
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onSubmit: SubmitHandler<BlogFormData>;
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  defaultValues?: BlogItem | null;
}

export default function CustomForm({
  onSubmit,
  title,
  onClick,
  defaultValues,
}: CustomFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormData>({
    defaultValues: {
      content: defaultValues?.content,
    },
  });

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
      {/* Hidden ID input */}
      <Input
        type="hidden"
        {...register("id")}
        defaultValue={defaultValues?._id} // 修改文章的時候才可以
      />
      <Typography variant="h5" align="center" gutterBottom>
        {title}
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
