import template from './search.html'

class SearchController {
    constructor(SearchService) {
        this.SearchService = SearchService;
    }

    search() {
        this.SearchService.search(this.searchValue).then(response => {
            console.log(response);
            this.albums = response.data;
        }, error => {
            console.error(error);
        })
    }
}

SearchController.$inject = ['SearchService'];

export const SearchComponent = {
    template,
    controller: SearchController
};