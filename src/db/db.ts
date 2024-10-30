import { Album } from 'src/album/entities/album.entity';
import { Artist } from 'src/artist/entities/artist.entity';
import { Fav } from 'src/favs/entities/fav.entity';
import { Track } from 'src/track/entities/track.entity';
import { User } from 'src/user/entities/user.entity';

export const favorites: Fav = new Fav();
export const tracks: Track[] = [];
export const albums: Album[] = [];
export const artists: Artist[] = [];
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

/*     const createAlbumDto = {
        name: 'TEST_ALBUM',
        year: 2022,
        artistId: null,
      };
      
      const createArtistDto = {
        name: 'TEST_artist',
        grammy: true,
      };
      
      const createTrackDto = {
        name: 'Test track',
        duration: 335,
        artistId: null,
        albumId: null,
      }; */
