angular.module('blogjs.post').controller('PostSearchAllController', function($scope, posts){

  $scope.selPag = 5;

  var carregarTodosPosts = function(pagina){

    var promise = posts.listarTodos($scope.filtroPosts, pagina, $scope.selPag);
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

  $scope.montarPaginas = function(paginas){
    return new Array(paginas);
  }

  $scope.carregarPagina = function(pagina){
    carregarTodosPosts(pagina);
  }
  carregarTodosPosts();
});
