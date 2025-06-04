import express from "express";

import { createAccount } from "../controllers/authController.ts";

const router = express.Router();

router.post("/", createAccount);

export default router;
