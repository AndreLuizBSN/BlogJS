var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
    conteudo: String,
    date: Date,
    usuario_id: String
});

var postSchema = new Schema({
  titulo: {
    type : String,
    required: true
  },
  conteudo: {
    type : String,
    required: true
  },
  tags: [String],
  dataPostagem: {
    type: Date,
    default: Date.now,
    required: true
  },
  usuarioId: {
    type: String,
    required: true
  },
  comentarios: [comentarioSchema],
});

postSchema.plugin(mongoosePaginate);
var Post = mongoose.model('posts', postSchema);
module.exports = Post;
