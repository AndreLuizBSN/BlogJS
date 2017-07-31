var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
//Conexao com o mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blogjs');

app.use(bodyParser.json());
app.use(cors());

var usuarioController = require('./usuario/Controller');

app.post('/v1/usuarios', usuarioController.cadastrar);
app.get('/v1/usuarios', usuarioController.listar);
app.post('/v1/usuarios/auth', usuarioController.autenticar);


var postController = require('./post/Controller');
app.get('/v1/posts', postController.listarTodos);
app.get('/v1/usuarios/:usuarioId/posts', postController.listarPorUsuario);
app.get('/v1/usuarios/:usuarioId/posts/:postId', postController.buscar);
app.post('/v1/usuarios/:usuarioId/posts', postController.cadastrar);



app.listen(9000, function(){
  console.log('Blog api no ar asd');
});
