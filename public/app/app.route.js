route.$inject = ['$stateProvider', '$urlServiceProvider'];
function route($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'catalog' });

  $stateProvider.state('catalog', {
    url: '/',
    component: 'catalog'
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
