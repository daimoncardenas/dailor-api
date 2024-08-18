import { ObjectType, Field } from '@nestjs/graphql';
import { STATUS } from 'src/common/STATUS';

@ObjectType()
export class Patient {
    @Field(() => String, { description: 'id user' })
    id: string

    @Field(() => String, { description: 'email user' })
    email: string

    @Field(() => String, { description: 'firstname user', nullable: true })
    firstname?: string

    @Field(() => String, { description: 'lastname user', nullable: true })
    lastname?: string

    @Field(() => String, { description: 'password user' })
    age: string

    @Field(() => STATUS, { description: 'status user', nullable: true })
    status?: STATUS


    @Field(() => String, { description: 'address user', nullable: true })
    address?: string

    @Field(() => String, { description: 'phone user', nullable: true })
    phone?: string

    @Field(() => Date, { description: 'createdAt user' })
    createdAt: Date

    @Field(() => Date, { description: 'updatedAt user' })
    updatedAt: Date
}
