function collectionService(repository) {

    function getCollections() {
        return repository.getCollections();
    }

    function addCollection(name) {
        return repository.addCollection(name);
    }

    function updateCollection(collection) {
        return repository.updateCollection(collection);
    }

    return { getCollections, addCollection, updateCollection }
}

module.exports = { collectionService }