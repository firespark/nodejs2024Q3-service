import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackDto } from './create-track.dto';
import { IsString, IsNotEmpty, ValidateIf, IsUUID, IsInt } from "class-validator";

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @ValidateIf((object, value) => value !== null)
    @IsString()
    @IsUUID(4,{each:true})
    artistId: string | null;
  
    @ValidateIf((object, value) => value !== null)
    @IsString()
    @IsUUID(4,{each:true})
    albumId: string | null;
  
    @IsInt()
    duration: number;
}
