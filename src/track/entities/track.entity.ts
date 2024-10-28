import { IsDefined, IsString, IsInt, ValidateIf, IsUUID } from 'class-validator';

export class Track {
  @IsDefined()
  @IsUUID(4,{each:true})
  id: string;

  @IsDefined()
  @IsString()
  name: string;

  @ValidateIf((object, value) => value !== null)
  @IsString()
  artistId: string | null;

  @ValidateIf((object, value) => value !== null)
  @IsString()
  albumId: string | null;

  @IsDefined()
  @IsInt()
  duration: number;

  constructor(track: Track) {
    Object.assign(this, track);
  }
}