import template from './collections.html'

class CollectionsController {
    constructor($uibModal, CollectionService) {
        this.$uibModal = $uibModal;
        this.CollectionService = CollectionService;
    }

    $onInit() {
        this.CollectionService.getCollections().then((response) => {
            this.collections = response.data;
        }, (error) => {
            console.error(error);
        })
    }

    addCollection() {
        const modalInstance = this.$uibModal.open({
            component: 'collectionForm',
            size: 'sm',
            resolve: {
                collection: () => {
                    return {
                        name: ''
                    }
                }
            }
          });
      
          modalInstance.result.then(
            data => {
              console.log(data);
            },
            () => {
              console.log('Closed');
            }
          );
    }
    editCollection() {
        const modalInstance = this.$uibModal.open({
            component: 'collectionForm',
            size: 'sm',
            resolve: {
                collection: () => {
                    return {
                        name: 'Collection 1'
                    }
                }
            }
          });
      
          modalInstance.result.then(
            data => {
              console.log(data);
            },
            () => {
              console.log('Closed');
            }
          );
    }

    deleteCollection() {
        console.log('Delete Collection')
    }
}

CollectionsController.$inject = ['$uibModal', 'CollectionService']

export const CollectionsComponent = {
    template,
    controller: CollectionsController
};