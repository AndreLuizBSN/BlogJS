angular.module('blogjs.usuario').controller('RegisterUserController', function($scope, usuarios, $location){
  $scope.usuario = {};

  $scope.cadastrar = function(usuario){
    if(valido(usuario)){
      var promise = usuarios.cadastrar(usuario);
      promise.then(function(resultado){
        $location.path('login');
      });
      promise.catch(function(err){
        alert(err);
      });
    }else{
      alert('Dados inválidos');
    }
  };

  var valido = function(usuario){
    return usuario.nome && usuario.login && usuario.senha;
  }


});
