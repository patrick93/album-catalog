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
import { CollectionModule } from './components/collection/collection.module';
import { AlbumsModule } from './components/albums/albums.module';

export const AppModule = angular
  .module('app', [
    uiRouter,
    uiBootstrap,
    CommonModule,
    SearchModule,
    CollectionModule,
    AlbumsModule
  ])
  .config(route)
  .component('app', AppComponent);
