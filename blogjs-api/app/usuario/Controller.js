var usuarios = require('./usuarios')

var cadastrar = function(request, response){
  var usuario = request.body;
  usuarios.cadastrar(usuario, function(resultado){
      response.status(201).json(resultado);
  }, function(erro){
    response.status(400).json(erro);
  });
  //response.status(201).json(usuarios.cadastrar(usuario));
}
var listar = function(request, response){
  usuarios.listar(function(usuarios){
    response.status(200).json(usuarios);
  }, function(err){
    response.status(400).json(err);
  })
}
var autenticar = function(request, response){
  var autenticado = usuarios.autenticar(request.body.login,request.body.senha, function(usuario){
    response.status(200).json(usuario);
  }, function(err){
    response.status(401).json(err);
  });

}

//Torna publico as funções
exports.cadastrar = cadastrar;
exports.listar = listar;
exports.autenticar = autenticar;
