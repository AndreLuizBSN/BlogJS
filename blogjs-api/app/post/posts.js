var Post = require('./schema');

var cadastrar = function(post, quandoSalvar, quandoDerErro){
  new Post(post).save(function(err, resultados){
    if(err){
      quandoDerErro(err);
    }else{
      quandoSalvar(resultados);
    }
  });
}

var listarPorUsuario = function(pagina, itensPorPag, usuarioId, quandoListar, quandoDerErro){
  Post.find({usuarioId : usuarioId})
  .exec(function(err, posts){
    if(err){
      quandoDerErro(err);
    }else{
      quandoListar(posts);
    }
  });
}

var listarTodos = function(pagina, itensPorPag, quandoListar, quandoDerErro){
  //Post.find()
  Post.paginate({}, {page: parseInt(pagina), limit: parseInt(itensPorPag)}
  ,function(err, posts){
    if(err){
      quandoDerErro(err);
    }else{
      quandoListar(posts);
    }
  });
}

var buscarPorNome = function(pagina, itensPorPag, nome, quandoListar, quandoDerErro){
  Post.paginate({$or:[{titulo : new RegExp(nome, "i")}, {conteudo : new RegExp(nome, "i")}]}
    , {page: parseInt(pagina), limit: parseInt(itensPorPag)}
    , function(err, posts){
      if(err){
        quandoDerErro(err);
      }else{
        quandoListar(posts);
      }
    });
}

var buscar = function(usuarioId, postId, quandoListar, quandoDerErro){
  Post.findOne({usuarioId : usuarioId, _id : postId})
  .exec(function(err, posts){
    if(err){
      quandoDerErro(err);
    }else{
      quandoListar(posts);
    }
  });
}

var buscarGlobal = function(postId, quandoListar, quandoDerErro){
  Post.findOne({_id : postId})
  .exec(function(err, posts){
    if(err){
      quandoDerErro(err);
    }else{
      quandoListar(posts);
    }
  });
}


exports.cadastrar = cadastrar;
exports.listarPorUsuario = listarPorUsuario;
exports.listarTodos = listarTodos;
exports.buscar = buscar;
exports.buscarPorNome = buscarPorNome;
exports.buscarGlobal = buscarGlobal;
