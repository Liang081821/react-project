import express from "express";

import { createAccount } from "../controllers/registerController.ts";
import login from "../controllers/loginController.ts";
import { loginValidation } from "../middleware/loginValidation.ts";
import { validateResult } from "../middleware/validateResult.ts";

const router = express.Router();

router.post("/", createAccount);

router.post("/login", loginValidation, validateResult, login);

export default router;
