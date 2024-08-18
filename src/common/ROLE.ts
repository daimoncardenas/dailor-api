import { registerEnumType } from "@nestjs/graphql";



export enum ROLE {
    ADMIN,
    DOCTOR
}

registerEnumType(ROLE, {
    name: 'ROLE',
});