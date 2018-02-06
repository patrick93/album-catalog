import angular from 'angular'
import './albums.css';
import './album/album.css'

import { AlbumsComponent } from "./albums.component";
import { AlbumComponent } from "./album/album.component";
import { AlbumService } from "./album.service";
import { AlbumFormComponent } from "./album-form/album-form.component";

export const AlbumsModule = angular
    .module('app.albums', [])
    .component('albums', AlbumsComponent)
    .component('album', AlbumComponent)
    .component('albumFormComponent', AlbumFormComponent)
    .service('AlbumService', AlbumService)
    .name;