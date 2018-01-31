import template from './collections.html'

class CollectionsController {
    constructor($uibModal) {
        this.$uibModal = $uibModal;
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

CollectionsController.$inject = ['$uibModal']

export const CollectionsComponent = {
    template,
    controller: CollectionsController
};