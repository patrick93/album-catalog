import angular from 'angular'

import { NavbarComponent } from "./navbar/navbar.component";

export const CommonModule = angular
    .module('app.common', [])
    .component('navbar', NavbarComponent)
    .name;