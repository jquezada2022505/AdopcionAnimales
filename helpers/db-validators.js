const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Animales = require('../models/animales');

const esRoleValido = async (role = '') => {
    const existeRol = await Role.findOne({role});
    if(!existeRol){
        throw new Error(`El role ${role} no existe la base de datos`);

    }
}

const existeEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error (`El correo ${correo} ya esta registrado`);
    }
}

const existeUsuarioById = async (id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw  new Error(`El usuario con el ${ id } no existe`);
    }
}

const existeAnimalesById = async (id = '') => {
    const existeAnimales = await Animales.findOne({id});
    if(existeAnimales){
        throw  new Error(`El animal con el ${ id } no existe`);
    }
}
 
module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioById,
    existeAnimalesById
}