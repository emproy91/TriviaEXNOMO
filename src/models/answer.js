const { Schema, model } = require('mongoose'); //definimos como guardar los datos

const NoteSchema = new Schema({
    score: {
        type: Number,
        required: true
    },
    Programación: {
        type: Array
    },
    animales: {
        type: Array
    },
    películas: {
        type: Array
    },
    series: {
        type: Array
    },
    rock: {
        type: Array
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Note', NoteSchema); // ...NoteSchema,'collectionNme'); para ponerle nombre especifico a la coleccion
// os objetos y funciones con "//!" son para hacer privadas las notas por usuario