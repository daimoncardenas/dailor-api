import { InputType, Int, Field } from '@nestjs/graphql';
import { ROLE } from 'src/common/ROLE';


@InputType()
export class CreateUserInput {

  @Field(() => String, { description: 'email user' })
  email: string

  @Field(() => String, { description: 'firstname user' })
  firstname: string

  @Field(() => String, { description: 'lastname user' })
  lastname: string

  @Field(() => String, { description: 'password user' })
  password: string


  @Field(() => ROLE, { description: 'role user', nullable: true })
  role?: ROLE

  @Field(() => String, { description: 'address user', nullable: true })
  address?: string
  @Field(() => String, { description: 'phone user', nullable: true })
  phone?: string

}
