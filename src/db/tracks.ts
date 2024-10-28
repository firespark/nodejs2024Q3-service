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

export const users: User[] = [
/*     {
        "id": "b8e4bf86-3818-4cab-9279-917f1fb7ce53",
        "login": "pipipi",
        "password": "popopo",
        "version": 1,
        "createdAt": 1730121072091,
        "updatedAt": 1730121072091
    },
    {
        "id": "25f846bf-36a8-4445-8253-ec1546a0ab11",
        "login": "string",
        "password": "string",
        "version": 1,
        "createdAt": 1730121079558,
        "updatedAt": 1730121079558
    } */
];