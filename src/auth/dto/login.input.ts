import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class loginInput {
  @Field(() => String, { description: 'Email' })
  email: string

  @Field(() => String, { description: 'Password' })
  password: string
}
