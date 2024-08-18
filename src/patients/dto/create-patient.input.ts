import { InputType, Int, Field } from '@nestjs/graphql';
import { STATUS } from 'src/common/STATUS';

@InputType()
export class CreatePatientInput {

  @Field(() => String, { description: 'email' })
  email: string

  @Field(() => String, { description: 'firstname' })
  firstname: string

  @Field(() => String, { description: 'lastname' })
  lastname: string

  @Field(() => Int, { description: 'age' })
  age: number

  @Field(() => STATUS, { description: 'status' })
  status: STATUS

  @Field(() => Date, { description: 'dateOfBirth' })
  dateOfBirth: Date

  @Field(() => String, { description: 'address' })
  address: string

  @Field(() => String, { description: 'phone' })
  phone: string


}
