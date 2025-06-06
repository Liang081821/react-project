import { body } from "express-validator";
export const loginValidation = [
  body("email").isEmail().withMessage("請輸入正確的 Email"),
  body("password").notEmpty().withMessage("密碼不能為空"),
];
