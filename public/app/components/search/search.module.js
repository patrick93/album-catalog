import angular from 'angular'

import { SearchComponent } from "./search.component";

export const SearchModule = angular
    .module('app.search', [])
    .component('search', SearchComponent)
    .name;