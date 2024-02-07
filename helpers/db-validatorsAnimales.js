const Animales = require('../models/animales');
const Especies = require('../models/Especies');

const esAnimalesValido = async (especies = '') => {
    const existeAnimales = await Animales.findOne({especies});
    if(!existeAnimales){
        throw new Error(`El animal ${especies} no existe la base de datos`);

    }
}

const existeAnimalesById = async (id = '') => {
    const existeAnimales = await Animales.findOne({id});
    if(existeAnimales){
        throw  new Error(`El animal con el ${ id } no existe`);
    }
}

module.exports = {
    esAnimalesValido,
    existeAnimalesById
}