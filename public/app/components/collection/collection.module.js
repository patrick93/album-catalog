import angular from 'angular'
import './collections.css';

import { CollectionsComponent } from "./collections.component";
import { CollectionFormComponent } from "./collection-form/collection-form.component";
import { CollectionService } from "./collection.service";

export const CollectionModule = angular
    .module('app.collection', [])
    .service('CollectionService', CollectionService)
    .component('collections', CollectionsComponent)
    .component('collectionForm', CollectionFormComponent)
    .name;