import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Fighter {
  @Field(() => ID)
  id: number;

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
