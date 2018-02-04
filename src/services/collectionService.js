function collectionService(repository) {

    function getCollections() {
        return repository.getCollections();
    }

    function addCollection(name) {
        return repository.addCollection(name);
    }

    return { getCollections, addCollection }
}

module.exports = { collectionService }