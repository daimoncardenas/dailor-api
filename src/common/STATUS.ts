import { registerEnumType } from "@nestjs/graphql";



export enum STATUS {
    ACTIVE,
    INACTIVE,
    PENDING,
    DELETED
}

registerEnumType(STATUS, {
    name: 'STATUS',
});