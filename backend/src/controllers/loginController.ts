import User from "../models/User.ts";
import bcrypt from "bcrypt";
import { Response, Request } from "express";

const login = async (req: Request, res: Response): Promise<any> => {
  // 不加 Promise<any> 會報錯誤
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "查無此帳號" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ msg: "密碼錯誤" });
    }

    // 登入成功，發 JWT or 設 Cookie...
    res.status(200).json({ msg: "登入成功", user });
  } catch (error) {
    res.status(500).json({ msg: "伺服器錯誤" });
  }
};

export default login;
