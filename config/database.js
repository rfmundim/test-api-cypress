const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost:27017/db_geral', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."