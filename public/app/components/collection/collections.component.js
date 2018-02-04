import template from './collections.html';

class CollectionsController {
  constructor($uibModal, CollectionService) {
    this.$uibModal = $uibModal;
    this.CollectionService = CollectionService;
  }

  $onInit() {
    this.loadCollections();
  }

  loadCollections() {
    this.CollectionService.getCollections().then(
      response => {
        this.collections = response.data;
      },
      error => {
        console.error(error);
      }
    );
  }

  addCollection() {
    const modalInstance = this.$uibModal.open({
      component: 'collectionForm',
      size: 'sm',
      resolve: {
        collection: () => {
          return {
            name: ''
          };
        }
      }
    });

    modalInstance.result.then(
      data => {
        this.CollectionService.addCollection(data.name).then(
          response => {
            console.log(response);
            this.loadCollections();
          },
          error => {
            console.error(error);
          }
        );
      },
      () => {
        console.log('Closed');
      }
    );
  }
  editCollection(collection) {
    const modalInstance = this.$uibModal.open({
      component: 'collectionForm',
      size: 'sm',
      resolve: {
        collection: () => {
          return {
            name: collection.Name
          };
        }
      }
    });

    modalInstance.result.then(
      data => {
        this.CollectionService.updateCollection(collection.Id, data.name).then(
          response => {
            console.log(response);
            this.loadCollections();
          },
          error => {
            console.error(error);
          }
        );
      },
      () => {
        console.log('Closed');
      }
    );
  }

  deleteCollection() {
    console.log('Delete Collection');
  }
}

CollectionsController.$inject = ['$uibModal', 'CollectionService'];

export const CollectionsComponent = {
  template,
  controller: CollectionsController
};
