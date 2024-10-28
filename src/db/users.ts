import { timestamp } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

interface IUser {
    id: string; // uuid v4
    login: string;
    password: string;
    version: number; // integer number, increments on update
    createdAt: number; // timestamp of creation
    updatedAt: number; // timestamp of last update
}

export class User implements IUser {
    id: string; // uuid v4
    login: string;
    password: string;
    version: number; // integer number, increments on update
    createdAt: number; // timestamp of creation
    updatedAt: number; // timestamp of last update

    constructor(login: string, password: string){
        this.id = uuidv4();
        this.login = login;
        this.password = password;
        this.version = 1;
        this.createdAt = Date.now();
        this.updatedAt = this.createdAt;
    }
}

export const users: User[] = [];