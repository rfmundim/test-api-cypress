const restful = require('node-restful')
const mongoose = restful.mongoose

const customerSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true, size: 40 },
    status: { type: String, require: true, uppercase: true, enum: ['ATIVO', 'CANCELADO'] },
    email: { type: String, required: true, size: 80 },
    note: { type: String, required: false, size: 100 }

})

module.exports = restful.model('Customer', customerSchema)