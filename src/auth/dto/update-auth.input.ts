import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInput {
  @Field(() => Int)
  id: number;
}
