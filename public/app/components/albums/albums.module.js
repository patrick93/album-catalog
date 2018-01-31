import angular from 'angular'

import { AlbumsComponent } from "./albums.component";
import { AlbumComponent } from "./album/album.component";
import { AlbumService } from "./album.service";

export const AlbumsModule = angular
    .module('app.albums', [])
    .component('albums', AlbumsComponent)
    .component('album', AlbumComponent)
    .service('AlbumService', AlbumService)
    .name;