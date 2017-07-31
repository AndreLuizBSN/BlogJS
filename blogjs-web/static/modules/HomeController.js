angular.module('blogjs').controller('HomeController', function($scope, usuarios, $location){

  $scope.usuarioLogado = function(){
    return usuarios.getUsuarioLogado() !== null;
  }

  $scope.usuario = usuarios.getUsuarioLogado();

  $scope.logout = function(){
    usuarios.logout();
    $location.path('login');
  }

});
