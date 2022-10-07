const mongoose = require('mongoose')

const schema = mongoose.Schema({
    criterion: {
        type: mongoose.ObjectId,
        ref: 'Criterion'
    },
    order: {
        type: Number,
        required: true
    },
    enunciation: {
        type: String,
        required: true
    },
    glossary_refs: [{
        type: mongoose.ObjectId,
        ref: 'Glossary'
    }]
})


/*
    Parametros de mongoose.model:
    1º o nome do model, para uso interno. Por convenção, usa-se inicial maiuscula.
    2º a relação de campos do esquema(variavel schema)
    3º o nome da collection no banco de dados (normalmente é o mesmo nome da model)  
*/

module.exports = mongoose.model('Question', schema, 'question')