class AlbumService {
    constructor($http) {
        this.$http = $http;
    }

    getAlbumsFromCollection(collectionId) {
        return this.$http.get(`api/collections/${collectionId}/albums`);
    }
}

AlbumService.$inject = ['$http']

export { AlbumService }