var posts = require('./posts')

var cadastrar = function(request, response){
  var post = request.body;
  var usuarioId = request.params.usuarioId;
  post.usuarioId = usuarioId;
  posts.cadastrar(post, function(resultado){
    response.status(201).json(resultado);
  }, function(erro){
    response.status(400).json(erro);
  });
}

var listarPorUsuario = function(request, response){
  var usuarioId = request.params.usuarioId;
  posts.listarPorUsuario(usuarioId, function(posts){
    response.status(200).json(posts);
  }, function(err){
    response.status(400).json(err);
  })
}

var listarTodos = function(request, response){

  var filtro = request.query.filtro;
  var pagina = request.query.pagina || 1;
  var itensPorPag = request.query.itensporpag || 5;
  if(filtro){
    posts.buscarPorNome(pagina, itensPorPag, filtro, function(posts){
      response.status(200).json(posts);
    }, function(err){
      response.status(400).json(err);
    })
  }else{
    posts.listarTodos(pagina, itensPorPag, function(posts){
      response.status(200).json(posts);
    }, function(err){
      response.status(400).json(err);
    })
  }
}

var buscar = function(request, response){
  var usuarioId = request.params.usuarioId;
  var postId = request.params.postId;
  posts.buscar(usuarioId, postId, function(posts){
    response.status(200).json(posts);
  }, function(err){
    response.status(400).json(err);
  })
}

var buscarGlobal = function(request, response){
  var postId = request.params.postId;
  posts.buscarGlobal(postId, function(posts){
    response.status(200).json(posts);
  }, function(err){
    response.status(400).json(err);
  })
}

//Torna publico as funções
exports.cadastrar = cadastrar;
exports.listarPorUsuario = listarPorUsuario;
exports.listarTodos = listarTodos;
exports.buscar = buscar;
exports.buscarGlobal = buscarGlobal;
