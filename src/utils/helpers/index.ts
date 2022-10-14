import bcrypt from "bcrypt";
import passport from "passport";

export const hashPassword = (passport: string) =>
  bcrypt.hash(passport, bcrypt.genSaltSync(10));

export const validatePassword = (passport: string, hash: string) =>
  bcrypt.compare(passport, hash);
