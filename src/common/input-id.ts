import { InputType, Field, Int } from '@nestjs/graphql';


@InputType()
export class InputIdQueries {

    @Field(() => String, { description: 'id', nullable: true })
    id: string

}