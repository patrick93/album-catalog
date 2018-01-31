import template from './albums.html';

class AlbumsController {
  constructor(AlbumService, $uibModal) {
    this.AlbumService = AlbumService;
    this.$uibModal = $uibModal;
  }

  $onInit() {
    this.albums = this.AlbumService.getAlbums();
  }

  addAlbum() {
    const modalInstance = this.$uibModal.open({
        component: 'albumFormComponent',
        size: 'lg',
        resolve: {
            album: () => {
                return {
                    title: '',
                    artist: '',
                    record: '',
                    year: ''
                }
            }
        }
      });
  
      modalInstance.result.then(
        data => {
          console.log(data);
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
              return album
          }
      }
    });

    modalInstance.result.then(
      data => {
        console.log(data);
      },
      () => {
        console.log('Closed');
      }
    );
  }

  deleteAlbum({ album }) {
      console.log(`Delete ${album}`);
  }
}

AlbumsController.$inject = ['AlbumService', '$uibModal'];

export const AlbumsComponent = {
  template,
  controller: AlbumsController
};
