import template from './album.html'

class AlbumController {
    constructor() {
    }
}

AlbumController.$inject = [];

export const AlbumComponent = {
    bindings: {
        album: '<'
    },
    template,
    controller: AlbumController
}