angular.module('blogjs.usuario').factory('usuarios', function($http){

/*
  //Busca todos os usuários do localStorage
  var getUsuarios = function(){
    var dados = localStorage.getItem('usuarios');
    if(!dados){
      return [];
    }else{
      return JSON.parse(dados);
    }
  };

  //seta os novos usuarios do localStorage
  var setUsuarios = function(usuario){
    var usuarios = getUsuarios();
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  };

  //busca o id corente do localStorage de usuario
  var getId = function(){
    var id = parseInt(localStorage.getItem('currentId'));
    id = id || 0 ;
    return id;
  };
  //seta o id corrente de usuario do localStorage
  var setId = function(id){
    localStorage.setItem('currentId', id);
  };
*/

  var cadastrar = function(usuario){
    return $http.post("http://localhost:9000/v1/usuarios", usuario);
  };


  var autenticar = function(login, senha){
    var auth = {login: login, senha: senha};
    return $http.post("http://localhost:9000/v1/usuarios/auth", auth);
  };

  var buscar = function(id){
    return getUsuarios().find(function(obj){
      return obj._id == id;
    });
  };

  var getUsuarioLogado = function(){
    return JSON.parse(localStorage.getItem('usuarioLogado'));
  }

  var logout = function(){
    localStorage.removeItem('usuarioLogado');
  }

  return{
    cadastrar : cadastrar,
    autenticar : autenticar,
    buscar : buscar,
    getUsuarioLogado : getUsuarioLogado,
    logout : logout
  };


});
