import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';
import { artists } from 'src/db/db';
import { validate } from 'uuid';

@Injectable()
export class ArtistService {
  create(createArtistDto: CreateArtistDto) {
    const artist = new Artist(createArtistDto.name, createArtistDto.grammy);
    artists.push(artist);
    return artist;
  }

  findAll() {
    return artists;
  }

  findOne(id: string) {
    const artist = artists.find(artist => artist.id === id);
    if (!artist) {
      throw new NotFoundException();
    }
    return artist;
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    const artist = artists.find(artist => artist.id === id);
    if (!artist) {
      throw new NotFoundException();
    }

    if (updateArtistDto.name) {
      artist.name = updateArtistDto.name;
    }
    if (updateArtistDto.grammy !== artist.grammy) {
      artist.grammy = updateArtistDto.grammy;
    }

    return artist;
  }

  remove(id: string) {
    const index = artists.findIndex((artist) => artist.id === id);
    if (index == -1) {
      throw new NotFoundException();
    }
    artists.splice(index, 1);

    return artists;
  }
}
