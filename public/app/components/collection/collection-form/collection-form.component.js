import template from './collection-form.html';

class CollectionFormController {
    constructor() {
    }

    $onInit() {
      this.collection = this.resolve.collection;
    }

    onSave() {
      this.close({$value: this.collection});
    }
}

CollectionFormController.$inject = [];

export const CollectionFormComponent = {
  template,
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: CollectionFormController
};
