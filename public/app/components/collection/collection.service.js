class CollectionService {
    constructor($http) {
        this.$http = $http;
    }

    getCollections() {
        return this.$http.get('api/collections');
    }

    addCollection(Name) {
        return this.$http.post('api/collections', { Name });
    }
}

CollectionService.$inject = ['$http'];

export { CollectionService }