import { Field, ObjectType, Int } from "type-graphql";
import { IStatus } from "../interface";

@ObjectType()
export class Status implements IStatus {
  @Field(() => Int)
  code!: number;

  @Field()
  token?: string;

  @Field()
  message?: string;
}
