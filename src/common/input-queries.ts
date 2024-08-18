import { InputType, Field, Int } from '@nestjs/graphql';


@InputType()
export class InputQueries {

    @Field(() => String, { description: 'status user', nullable: true })
    status: string

    @Field(() => String, { description: 'search user', nullable: true })
    search: string

    @Field(() => Int, { description: 'pagination user' })
    skip: number

    @Field(() => Int, { description: 'pagination user' })
    take: number

}
