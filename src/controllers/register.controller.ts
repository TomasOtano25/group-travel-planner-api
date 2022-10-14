import { Request, Response } from "express";
import { createUser } from "../services/register.service";

export const registerUserController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await createUser({ username, password });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }

  res.status(200).json();
};
