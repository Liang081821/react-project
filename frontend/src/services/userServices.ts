import axios from "axios";
import { User } from "../models/User";

const API_URL = "http://localhost:5000/api/auth";

export const register = async (userData: User) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (e: any) {
    const errorMessage = e.response?.data?.msg || "註冊失敗，請稍後再試";
    throw new Error(errorMessage); // ✅ 這會生成一個 Error 物件，裡面有 message 屬性
  }
};
