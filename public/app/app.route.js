route.$inject = ['$stateProvider', '$urlServiceProvider'];
function route($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'collections' });

  $stateProvider.state('collections', {
    url: '/',
    component: 'collections'
  });

  $stateProvider.state('search', {
    url: '/search',
    component: 'search'
  });

  $stateProvider.state('albums', {
    url: '/{collectionId}/albums',
    component: 'albums'
  });
}

export { route };
