import { Field, ObjectType, Int, InputType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IUser } from "../interface";

@ObjectType()
@Entity("User")
export class User implements IUser {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  uid!: number;

  @Field()
  @Column({ unique: true })
  account!: string;

  @Field()
  @Column()
  secret?: string;
}
