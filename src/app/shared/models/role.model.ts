import { Authority } from "./authority.model";

export interface Role {
    name: string;
    authorities: Authority[];
}
