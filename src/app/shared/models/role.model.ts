import { Authority } from "./authority.model";

export class Role {
    constructor(
        public name: string,
        public authorities: Authority[]
    ) {}
}
