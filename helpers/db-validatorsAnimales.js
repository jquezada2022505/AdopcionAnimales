const Usuario = require('../models/animales');

const esAnimalesValido = async (animales = '') => {
    const existeAnimales = await Animales.findOne({animales});
    if(!existeAnimales){
        throw new Error(`El animal ${animales} no existe la base de datos`);

    }
}

module.exports = {
    esAnimalesValido
}