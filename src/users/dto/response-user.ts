import { ObjectType, Field } from '@nestjs/graphql';
import { ResponseQueries } from 'src/common/response-queries';
import { User } from './user';


@ObjectType()
export class ResponseUser extends ResponseQueries {
    @Field(() => [User])
    users: User[]

}
