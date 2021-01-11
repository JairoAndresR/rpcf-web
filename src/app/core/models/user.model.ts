import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface User {
    id?: string,
    names?: string,
    email: string,
    password: string,
    role:string,
    token?: string,
    created_at?: number,
    updated_at?: number
}
