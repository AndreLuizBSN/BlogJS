angular.module('blogjs.post', []);

angular.module('blogjs.post').config(function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider.when('/usuario/:id/posts',{
    controller: 'PostSearchController',
    templateUrl : 'modules/post/search/view.html'
  }).when('/usuario/:id/posts/novo',{
    controller: 'RegisterPostController',
    templateUrl : 'modules/post/register/view.html'
  }).when('/usuario/:id/posts/:postId',{
    controller: 'PostViewController',
    templateUrl : 'modules/post/visualizacao/view.html'
  }).when('/posts',{
    controller: 'PostSearchAllController',
    templateUrl : 'modules/post/search_all/view.html'
  });
});
