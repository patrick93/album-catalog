import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { route } from './app.route';
import { AppComponent } from './app.component';
import { CommonModule } from './components/common/common.module';
import { SearchModule } from './components/search/search.module';
import { CatalogModule } from "./components/catalog/catalog.module";

export const AppModule = angular
  .module('app', [uiRouter, CommonModule, SearchModule, CatalogModule])
  .config(route)
  .component('app', AppComponent)
