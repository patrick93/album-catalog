function collectionService(repository) {

    function getCollections() {
        return repository.getCollections();
    }

    return { getCollections }
}

module.exports = { collectionService }