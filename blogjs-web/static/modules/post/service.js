angular.module('blogjs.post').factory('posts', function($http){


  var cadastrar = function(post, usuarioId){
    return $http.post("http://localhost:9000/v1/usuarios/"+usuarioId+"/posts", post);
  };


  var listar = function(usuarioId){
    return $http.get("http://localhost:9000/v1/usuarios/"+usuarioId+"/posts");
  }

  var listarTodos = function(filtro, pagina, itensPorPagina){
    var pagina = pagina || 1;
    var itensPorPagina = itensPorPagina || 5;
    var url = "http://localhost:9000/v1/posts?pagina="+pagina+"&itensporpag="+itensPorPagina;
    url = filtro ? url+"&filtro="+filtro : url;
    return $http.get(url);
  }

  var buscar = function(usuarioId, postId){
    return $http.get("http://localhost:9000/v1/usuarios/"+usuarioId+"/posts/"+postId);
  };
  var buscarGlobal = function(postId){
    return $http.get("http://localhost:9000/v1/posts/"+postId);
  };


/*
  //buscar posts
  var getPosts = function(){
    var dados = localStorage.getItem('posts');
    if(!dados){
      return [];
    }else{
      return JSON.parse(dados);
    }
  };
  //seta os novos posts do localStorage
  var setPosts = function(post){
    var posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  //busca o id corente do localStorage de usuario
  var getId = function(){
    var id = parseInt(localStorage.getItem('LastPostId'));
    id = id || 0 ;
    return id;
  };
  //seta o id corrente de usuario do localStorage
  var setId = function(id){
    localStorage.setItem('LastPostId', id);
  };

*/




  return{
    cadastrar : cadastrar,
    listar : listar,
    buscar : buscar,
    buscarGlobal : buscarGlobal,
    listarTodos : listarTodos
  }

});
