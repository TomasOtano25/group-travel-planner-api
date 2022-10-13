import { Request, Response } from "express";

export const signupController = (req: Request, res: Response) => {
  console.log("registerController");
  res.send();
};

export const loginController = (req: Request, res: Response) => {
  console.log("loginController");
};
