import { ObjectType, Field, Int } from '@nestjs/graphql';


@ObjectType()
export class ResponseQueries {
    @Field(() => Int)
    total_pages: number

    @Field(() => Int)
    total_items: number

    @Field(() => Int)
    count: number

    @Field(() => Int)
    current_page: number

}
