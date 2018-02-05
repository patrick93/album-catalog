class SearchService {
    constructor($http) {
        this.$http = $http;
    }

    search(searchValue) {
        return this.$http.get(`api/albums?q=${searchValue}`);
    } 
}

SearchService.$inject = ['$http'];

export { SearchService }