import template from './album-form.html';

class AlbumFormController {
    constructor() {
    }

    $onInit() {
      this.album = this.resolve.album;
    }

    onSave() {
      this.close({$value: this.album});
    }
}

AlbumFormController.$inject = [];

export const AlbumFormComponent = {
  template,
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: AlbumFormController
};
