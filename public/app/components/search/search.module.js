import angular from 'angular'
import './search.css'

import { SearchComponent } from "./search.component";
import { SearchService } from "./search.service";

export const SearchModule = angular
    .module('app.search', [])
    .service('SearchService', SearchService)
    .component('search', SearchComponent)
    .name;