angular.module('blogjs.usuario', []);

angular.module('blogjs.usuario').config(function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider.when('/usuario/register',{
    controller: 'RegisterUserController',
    templateUrl : 'modules/usuario/register/view.html'
  }).when('/login',{
    controller: 'LoginUserController',
    templateUrl : 'modules/usuario/login/view.html'
  }).
    otherwise({
        redirect: '/'
    });
});
