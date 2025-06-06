import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateResult = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map((err) => err.msg),
    });
  }
  next();
};
