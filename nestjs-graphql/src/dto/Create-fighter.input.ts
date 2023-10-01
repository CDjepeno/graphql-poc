import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFighterInput {
  @Field()
  id: string;

  @Field()
  hp: number;

  @Field()
  cp: number;

  @Field()
  name: string;

  @Field()
  picture: string;

  @Field()
  type: string;
}
