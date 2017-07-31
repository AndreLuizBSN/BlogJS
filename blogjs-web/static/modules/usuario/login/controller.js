angular.module('blogjs.usuario').controller('LoginUserController', function($rootScope, $scope, usuarios, $location){
  $scope.usuario = {};

  $scope.logar = function(usuario){

    var promise = usuarios.autenticar(usuario.login, usuario.senha);
    promise.then(function(response){
      var usuarioLogado = response.data;
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
      $location.path('usuario/'+usuarioLogado._id+'/posts');
    });
    promise.catch(function(err){
      alert('Usuário não cadastrado! '+err);
    });

  };

  var valido = function(usuario){
    return usuario.login && usuario.senha;
  }


});
