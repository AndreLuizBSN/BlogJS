angular.module('blogjs.post').controller('RegisterPostController', function($scope, posts, $location, $routeParams){
  $scope.post = {};

  $scope.cadastrar = function(post){
    if(valido(post)){
      posts.cadastrar(post, $routeParams.id);
      $location.path('usuario/'+$routeParams.id+'/posts');
    }else{
      alert('Dados inválidos');
    }
  };

  $scope.cadastrar = function(post){
    var usuarioId = $routeParams.id;
    if(valido(post)){
      var promise =posts.cadastrar(post, usuarioId);
      promise.then(function(resultado){
        $location.path('usuario/'+usuarioId+'/posts');
      });
      promise.catch(function(err){
        alert(err);
      });
    }else{
      alert('Dados inválidos');
    }
  };

  var valido = function(post){
    return post.titulo;
  }


});
