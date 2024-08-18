import { ObjectType, Field } from '@nestjs/graphql';
import { ResponseQueries } from 'src/common/response-queries';
import { Patient } from './patient';


@ObjectType()
export class ResponsePatient extends ResponseQueries {
    @Field(() => [Patient])
    patients: Patient[]
}