const { Schema, model } = require('mongoose'); 

const QuestionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tq: {
        type: String,
        required: true
    },
    choices: {
        type: [],
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('QuestionBD', QuestionSchema); // ...NoteSchema,'collectionNme'); para ponerle nombre especifico a la coleccion
// os objetos y funciones con "//!" son para hacer privadas las notas por usuario