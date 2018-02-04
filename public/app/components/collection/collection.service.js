class CollectionService {
    constructor($http) {
        this.$http = $http;
    }

    getCollections() {
        return this.$http.get('api/collections');
    }
}

CollectionService.$inject = ['$http'];

export { CollectionService }