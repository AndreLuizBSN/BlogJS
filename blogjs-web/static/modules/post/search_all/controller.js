angular.module('blogjs.post').controller('PostSearchAllController', function($scope, posts){

  var carregarTodosPosts = function(){

    var promise = posts.listarTodos($scope.filtroPosts);
    promise.then(function(resultado){
      $scope.totalPosts = resultado.data.total;
      $scope.paginaAtual = resultado.data.page;
      $scope.paginaTotal = resultado.data.pages;
      $scope.posts = resultado.data.docs;
    });
    promise.catch(function(err){
      alert(err);
    });
  };

  $scope.atualizarPosts = function(){
    carregarTodosPosts();
  }

  carregarTodosPosts();
});
