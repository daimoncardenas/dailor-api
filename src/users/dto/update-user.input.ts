import { InputType, Field } from '@nestjs/graphql';
import { ROLE } from 'src/common/ROLE';
import { STATUS } from 'src/common/STATUS';

@InputType()
export class UpdateUserInput {

  @Field(() => String, { description: 'id user' })
  id: string

  @Field(() => String, { description: 'email user', nullable: true })
  email: string

  @Field(() => String, { description: 'firstname user', nullable: true })
  firstname: string

  @Field(() => String, { description: 'lastname user', nullable: true })
  lastname: string

  @Field(() => String, { description: 'password user', nullable: true })
  password: string

  @Field(() => STATUS, { description: 'role user', nullable: true })
  status: STATUS

  @Field(() => ROLE, { description: 'role user', nullable: true })
  role: ROLE

  @Field(() => String, { description: 'address user', nullable: true })
  address: string

  @Field(() => String, { description: 'phone user', nullable: true })
  phone: string


}