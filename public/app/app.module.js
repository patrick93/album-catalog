import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';

import { route } from './app.route';
import { AppComponent } from './app.component';
import { CommonModule } from './components/common/common.module';
import { SearchModule } from './components/search/search.module';
import { CatalogModule } from './components/catalog/catalog.module';
import { AlbumsModule } from './components/albums/albums.module';

export const AppModule = angular
  .module('app', [
    uiRouter,
    uiBootstrap,
    CommonModule,
    SearchModule,
    CatalogModule,
    AlbumsModule
  ])
  .config(route)
  .component('app', AppComponent);
