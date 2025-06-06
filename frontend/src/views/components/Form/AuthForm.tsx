import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../../../models/User";
import CustomButton from "../CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router";

import {
  FormControl,
  FormHelperText,
  Box,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Button,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface AuthFormProps {
  onSubmit: SubmitHandler<User>;
  submitTitle: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AuthForm = ({ onSubmit, submitTitle, onClick }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((pre) => !pre);
  };

  const navigate = useNavigate();
  return (
    <div>
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
        <FormControl variant="standard">
          <OutlinedInput
            placeholder="使用者名稱"
            {...register("username", { required: "使用者名稱必填" })}
          ></OutlinedInput>
          {errors.username && (
            <FormHelperText>{errors.username.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl variant="standard">
          <OutlinedInput
            placeholder="信箱"
            {...register("email", { required: "信箱必填" })}
          ></OutlinedInput>
          {errors.email && (
            <FormHelperText>{errors.email.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl variant="standard">
          <OutlinedInput
            placeholder="密碼"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            {...register("password", {
              required: "密碼必填",
              minLength: { value: 8, message: "最少 8 個字" },
            })}
          />

          {errors.password && (
            <FormHelperText>{errors.password.message}</FormHelperText>
          )}
        </FormControl>
        <CustomButton title={submitTitle} type="submit" onClick={onClick} />
      </Box>
      <Box textAlign="center" mt={2}>
        <span>已有帳號？</span>
        <Button
          onClick={() => {
            setTimeout(() => {
              navigate("/login");
            }, 0);
          }}
          variant="text"
        >
          立即登入
        </Button>
      </Box>
    </div>
  );
};

export default AuthForm;
