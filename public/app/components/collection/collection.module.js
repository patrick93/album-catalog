import angular from 'angular'

import { CollectionsComponent } from "./collections.component";
import { CollectionFormComponent } from "./collection-form/collection-form.component";

export const CollectionModule = angular
    .module('app.collection', [])
    .component('collections', CollectionsComponent)
    .component('collectionForm', CollectionFormComponent)
    .name;