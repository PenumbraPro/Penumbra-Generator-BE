
import { Field, ObjectType, Int } from "type-graphql";


@ObjectType()
export class Status {
  @Field(() => Int)
  code!: number;

  @Field()
  token?: string;

  @Field()
  message?: string;
}
