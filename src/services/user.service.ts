import { User } from "../database/entities";
import { UserRepository } from "../database/repositories";
import { getUserSelections } from "../utils/helpers";
import { FindUserOptions, FindUserParams } from "../utils/types";

export const findUser = async (
  params: FindUserParams,
  options?: FindUserOptions
): Promise<User | null> => {
  const select = getUserSelections(options?.selectAll);

  const user = await UserRepository.findOne({
    where: { ...params },
    select,
  });

  return user;
};
