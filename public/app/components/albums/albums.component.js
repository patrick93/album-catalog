import template from './albums.html';

class AlbumsController {
    constructor(AlbumService) {
        this.AlbumService = AlbumService;
    }

    $onInit() {
        this.albums = this.AlbumService.getAlbums();
    }
}

AlbumsController.$inject = ['AlbumService'];

export const AlbumsComponent = {
    template,
    controller: AlbumsController
}