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

    updateCollection(id, name) {
        return this.$http.put(`api/collections/${id}`, { name });
    }
}

CollectionService.$inject = ['$http'];

export { CollectionService }