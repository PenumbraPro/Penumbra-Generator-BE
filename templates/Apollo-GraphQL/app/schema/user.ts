import { Field, ObjectType, Int, InputType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@ObjectType()
@Entity("User")
export class User {
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
