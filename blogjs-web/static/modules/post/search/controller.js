angular.module('blogjs.post').controller('PostSearchController', function($scope, posts, $routeParams, usuarios){
  var carregarposts = function(){
    var promise = posts.listar($routeParams.id);
    promise.then(function(resultado){
      $scope.posts = resultado.data;
    });
    promise.catch(function(err){
      alert(err);
    });
  };
  carregarposts();

  var carregarUsuario = function(){
    $scope.usuario = usuarios.getUsuarioLogado();
  };
  carregarUsuario();
});
