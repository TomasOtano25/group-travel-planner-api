import bcrypt from "bcrypt";
import passport from "passport";
import { User } from "../../database/entities";
import { userSelections } from "../contants";

export const hashPassword = (passport: string) =>
  bcrypt.hash(passport, bcrypt.genSaltSync(10));

export const validatePassword = (passport: string, hash: string) =>
  bcrypt.compare(passport, hash);

export const getUserSelections = (selectAll?: boolean): (keyof User)[] =>
  selectAll ? [...userSelections, "password"] : userSelections;
