import type { ROLE } from "../enums/role-enum";

export interface CreateAccountDTO{
    name: string,
    email: string,
    password: string,
    role: ROLE
}
