const {Schema, model} = require('mongoose');

const AnimalesSchema = Schema({
    nombre:{
        type: String,
        require: [true, 'El nombre debe de ser obligatorio']
    },
    especies:{
        type: String,
        require: [true, 'La especie debe de ser obligatorio']
    },
    peso:{
        type: String,
        require: [true, 'El peso debe de ser obligatorio']
    },
    altura:{
        type: String,
        require: [true, 'la altura debe ser obligatoria']
    },
    estado:{
        type: Boolean,
        default: true
    }

});

module.exports = model('Animales', AnimalesSchema);