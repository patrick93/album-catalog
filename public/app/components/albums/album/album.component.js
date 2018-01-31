import template from './album.html';

class AlbumController {
  constructor() {}

  edit() {
    this.onEdit({
      $event: {
        album: this.album
      }
    });
  }

  delete() {
      this.onDelete({
          $event: {
              album: this.album
          }
      });
  }
}

AlbumController.$inject = [];

export const AlbumComponent = {
  bindings: {
    album: '<',
    onEdit: '&',
    onDelete: '&'
  },
  template,
  controller: AlbumController
};
