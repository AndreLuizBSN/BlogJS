var Usuario = require('./schema');
var sha256 = require('sha256');

var cadastrar = function(usuario, quandoSalvar, quandoDerErro){
  usuario.senha = sha256(usuario.senha);
  new Usuario(usuario).save(function(err, resultados){
    if(err){
      quandoDerErro(err);
    }else{
      quandoSalvar(resultados);
    }
  });
}

var listar = function(quandoListar, quandoDerErro){
  Usuario.find()
  .select({
    nome:true, login: true
  })
  .exec(function(err, usuarios){
    if(err){
      quandoDerErro(err);
    }else{
      quandoListar(usuarios);
    }
  });
}

var autenticar = function(login, senha, quandoListar, quandoDerErro){
  senha = sha256(senha);
  Usuario.findOne({login: login, senha: senha})
  .select({
    nome:true
  })
  .exec(function(err, usuario){
    if(err){
      quandoDerErro(err);
    }else if(usuario){
      quandoListar(usuario);
    }else{
      quandoDerErro(new Error('Usuário inválido!'));
    }
  });
  /*return usuarios.find(function(usuario){
    return usuario.login == login && usuario.senha == senha;
  });*/
}


exports.cadastrar = cadastrar;
exports.listar = listar;
exports.autenticar = autenticar;
