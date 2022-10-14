import { param } from "express-validator";
import { AppDataSource } from "../database";
import { User } from "../database/entities";
import { CreateUserParams } from "../utils/types";
const userRepository = AppDataSource.getRepository(User);

export const createUser = async (params: CreateUserParams) => {
  const userDB = await userRepository.findOneBy({ username: params.username });
  if (userDB) throw new Error("User Exists");

  const newUser = userRepository.create(params);
  return userRepository.save(newUser);
};
