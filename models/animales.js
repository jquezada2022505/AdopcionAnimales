const {Schema, model} = require('mongoose');

const AnimalesSchema = Schema({
    nombre:{
        type: String,
        require: [true, 'El nombre debe de ser obligatorio']
    },
    especie:{
        type: String,
        require: [true, 'la especie debe ser obligatoria'],
        unique: true
    },
    peso:{
        type: String,
        require: [true, 'El peso debe de ser obligatorio']
    },
    altura:{
        type: String,
        require: [true, 'la altura debe ser obligatoria'],
        unique: true
    },
    img:{
        type: String
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }

});

module.exports = model('Animales', AnimalesSchema);