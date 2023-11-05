import { Address } from "./address.model";
import { Role } from "./role.model";

export class User {

    constructor(
        public userId: string,
        public firstName: string, 
        public lastName: string, 
        public email: string, 
        public password: string, 
        public addresses: Address[],
        public roles: Role[]

    ) {}

}