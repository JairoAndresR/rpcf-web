import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface User {
    id?: string,
    name?: string,
    email: string,
    company_name?: string,
    password: string,
    phone?: string,
    token?: string,
    created_at?: number,
    updated_at?: number
}
