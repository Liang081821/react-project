import bcrypt from "bcrypt";
import User from "../models/User.ts";
import { Response, Request } from "express";

export const createAccount = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { username, email, password } = req.body;
  const existing = await User.findOne({ email });

  if (existing) {
    return res.status(400).json({ msg: "這個 Email 已經被註冊囉!" });
  }

  const passwordHash = await bcrypt.hash(password, 10); // 將密碼加密
  const user = new User({ username, email, passwordHash });
  await user.save();

  res.status(201).json({ msg: "帳號註冊成功" });
};
