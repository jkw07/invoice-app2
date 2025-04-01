import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class AppUser {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;
}
