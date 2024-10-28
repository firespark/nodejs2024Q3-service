import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

interface IArtist {
    id: string; // uuid v4
    name: string;
    grammy: boolean;
}

export class Artist implements IArtist {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    grammy: boolean;


    constructor(name: string, grammy: boolean = false) {
        this.id = uuidv4();
        this.name = name;
        this.grammy = grammy;
    }
}