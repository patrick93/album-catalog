route.$inject = ['$stateProvider', '$urlServiceProvider'];
function route($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'teste' });

  $stateProvider.state('catalog', {
    url: '/',
    component: 'catalog'
  });

  $stateProvider.state('search', {
    url: '/search',
    component: 'search'
  });
}

export { route };
