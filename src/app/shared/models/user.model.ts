import { Address } from "./address.model";
import { Role } from "./role.model";

export interface User {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    addresses: Address[];
    roles: Role[];
}