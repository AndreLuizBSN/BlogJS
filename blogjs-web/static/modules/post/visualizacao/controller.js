angular.module('blogjs.post').controller('PostViewController', function($scope, posts, $routeParams, usuarios){

  var carregarPost = function(){
    var promise = posts.buscar($routeParams.id, $routeParams.postId);
    promise.then(function(resultado){
      $scope.post = resultado.data;
    });
    promise.catch(function(err){
      alert(err);
    });
  };
  var carregarUsuario = function(){
    return usuarios.buscar($routeParams.id);
  };

  $scope.usuarioId = $routeParams.id;
  $scope.post = carregarPost();

});
