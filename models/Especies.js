const{Schema, model} = require ('mongoose');

const EspeciesSchema = Schema({
    especies:{
        type: String,
        required: [true, 'La especie es obligatoria']
    }
});

module.exports = model('Especies', EspeciesSchema); 