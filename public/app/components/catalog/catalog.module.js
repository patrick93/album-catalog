import angular from 'angular'

import { CatalogComponent } from "./catalog.component";
import { AlbumsComponent } from "./albums/albums.component";

export const CatalogModule = angular
    .module('app.catalog', [])
    .component('catalog', CatalogComponent)
    .component('albums', AlbumsComponent)
    .name;