angular.module('blogjs.post').controller('PostViewGlobalController', function($scope, posts, $routeParams, usuarios){

  var carregarPost = function(){
    var promise = posts.buscarGlobal($routeParams.postId);
    promise.then(function(resultado){
      $scope.post = resultado.data;
    });
    promise.catch(function(err){
      alert(err);
    });
  };
  $scope.post = carregarPost();

});
