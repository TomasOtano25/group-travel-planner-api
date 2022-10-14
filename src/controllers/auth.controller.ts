import { Request, Response } from "express";

export const authLoginController = (req: Request, res: Response) =>
  res.status(200).send("Ok");

export const authStatusController = (req: Request, res: Response) =>
  req.user ? res.send(req.user) : res.sendStatus(401);
