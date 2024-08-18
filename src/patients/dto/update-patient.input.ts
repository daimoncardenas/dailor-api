import { STATUS } from 'src/common/STATUS';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePatientInput {
  @Field(() => String)
  id: string

  @Field(() => String, { description: 'email', nullable: true })
  email: string

  @Field(() => String, { description: 'firstname', nullable: true })
  firstname: string

  @Field(() => String, { description: 'lastname', nullable: true })
  lastname: string

  @Field(() => Int, { description: 'age', nullable: true })
  age: number

  @Field(() => STATUS, { description: 'status', nullable: true })
  status: STATUS

  @Field(() => Date, { description: 'dateOfBirth', nullable: true })
  dateOfBirth: Date

  @Field(() => String, { description: 'address', nullable: true })
  address: string

  @Field(() => String, { description: 'phone', nullable: true })
  phone: string
}
