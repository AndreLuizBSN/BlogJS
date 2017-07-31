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

var listarPorUsuario = function(usuarioId, quandoListar, quandoDerErro){
  Post.find({usuarioId : usuarioId})
  .exec(function(err, posts){
    if(err){
      quandoDerErro(err);
    }else{
      quandoListar(posts);
    }
  });
}

var listarTodos = function(quandoListar, quandoDerErro){
  //Post.find()
  Post.paginate({}, {page: 1, limit: 3}
  ,function(err, posts){
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

var buscarPorNome = function(nome, quandoListar, quandoDerErro){
  /*var regex = {$regex : nome}
  Post.find({titulo : regex})*/
  //new RegExp(titulo, "i") = like "%titulo%"
  //"i" = to ignore uppercase and lowercase

  Post.find({$or:[{titulo : new RegExp(nome, "i")}, {conteudo : new RegExp(nome, "i")}]})
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
