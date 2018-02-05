import template from './albums.html';

class AlbumsController {
  constructor(AlbumService, $uibModal) {
    this.AlbumService = AlbumService;
    this.$uibModal = $uibModal;
  }

  $onInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.AlbumService.getAlbumsFromCollection(this.collectionId).then(
      response => {
        this.albums = response.data;
      },
      error => {
        console.error(error);
      }
    );
  }

  addAlbum() {
    const modalInstance = this.$uibModal.open({
      component: 'albumFormComponent',
      size: 'lg',
      resolve: {
        album: () => {
          return {
            Title: '',
            Artist: '',
            Record_label: '',
            Year: ''
          };
        }
      }
    });

    modalInstance.result.then(
      data => {
        this.AlbumService.addAlbumIntoCollection(this.collectionId, data).then(
          response => {
            this.loadAlbums();
          },
          error => {
            console.error(error);
          }
        );
      },
      () => {
        console.log('Closed');
      }
    );
  }

  editAlbum({ album }) {
    const modalInstance = this.$uibModal.open({
      component: 'albumFormComponent',
      size: 'lg',
      resolve: {
        album: () => {
          return album;
        }
      }
    });

    modalInstance.result.then(
      data => {
        this.AlbumService.updateAlbum(this.collectionId, data).then(
          response => {
            this.loadAlbums();
          },
          error => {
            console.error(error);
          }
        );
      },
      () => {
        console.log('Closed');
      }
    );
  }

  deleteAlbum({ album }) {
    this.AlbumService.removeAlbumFromCollection(this.collectionId, album.Id).then(
      response => {
        this.loadAlbums();
      },
      error => {
        console.error(error);
      }
    );
  }
}

AlbumsController.$inject = ['AlbumService', '$uibModal'];

export const AlbumsComponent = {
  bindings: { collectionId: '<' },
  template,
  controller: AlbumsController
};
