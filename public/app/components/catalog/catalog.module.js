import angular from 'angular'

import { CatalogComponent } from "./catalog.component";

export const CatalogModule = angular
    .module('app.catalog', [])
    .component('catalog', CatalogComponent)
    .name;