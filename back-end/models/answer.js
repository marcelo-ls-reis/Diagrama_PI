const mongoose = require('mongoose')

const schema = mongoose.Schema({
    assessment: {
        type: mongoose.ObjectId, // Tipo especial
        ref: "Assesment",// Coleção referenciada
        required: true
    },
    question: {
        type: mongoose.ObjectId, // Tipo especial
        ref: "Question",// Coleção referenciada
        required: true
    }, 
    answer: {
        type: String,
        require: true,
        select:false
    },
    comment: {
        type: Boolean,
        require: true,
        default: false
    },
    answered: {
        type: Date,
        require: true,
        default: Date.now() // Data/hora atual
    }
})

/*
    Parametros de mongoose.model:
    1º o nome do model, para uso interno. Por convenção, usa-se inicial maiuscula.
    2º a relação de campos do esquema(variavel schema)
    3º o nome da collection no banco de dados (normalmente é o mesmo nome da model)  
*/

module.exports = mongoose.model('Answer', schema, 'answers')