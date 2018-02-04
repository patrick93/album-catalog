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

    function deleteCollection(id) {
        return repository.deleteCollection(id);
    }

    return { getCollections, addCollection, updateCollection, deleteCollection }
}

module.exports = { collectionService }