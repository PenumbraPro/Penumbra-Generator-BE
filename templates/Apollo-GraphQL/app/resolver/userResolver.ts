import { Resolver, Arg, Mutation } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";

import { User, Status } from "../schema";

@Resolver(() => User)
export class UserResolver {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  @Mutation(() => Status, { nullable: true })
  async Login(
    @Arg("account") account: string,
    @Arg("secret") secret: string
  ): Promise<Status> {
    return {
      code: 90001,
      token: `${account}-${secret}`,
      message: "Success",
    };
  }
}
