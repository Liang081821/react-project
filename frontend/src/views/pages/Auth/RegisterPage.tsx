import AuthForm from "../../components/Form/AuthForm";
import { User } from "../../../models/User";
import { register } from "../../../services/userServices";
import { useForm } from "react-hook-form";
import useAlertStore from "../../../store/useAlertStore";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const { reset } = useForm<User>();
  const showAlert = useAlertStore((state) => state.showAlert);
  const navigate = useNavigate();

  const handleSubmit = async (data: User) => {
    try {
      const response = await register(data);
      // console.log(response);
      showAlert("success", response.msg);
      setTimeout(() => {
        navigate("/");
      }, 0);
      reset(); // 沒有作用
    } catch (e: any) {
      let message = "未知錯誤";

      if (e?.response?.data?.msg) {
        message = e.response.data.msg; // ⬅️ 重點：拿到後端的 msg
      } else if (e?.message) {
        message = e.message;
      }
      console.error("Register error:", e);
      showAlert("error", message);
    }
  };

  return <AuthForm submitTitle="註冊" onSubmit={handleSubmit} />;
};

export default RegisterPage;
