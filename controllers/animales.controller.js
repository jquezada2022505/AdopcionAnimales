const bcryptjs = require('bcryptjs');
const Usuario = require('../models/animales');
const { model } = require('mongoose');

const animalesPost = async (req, res) => {
    const { nombre, especie, peso, altura } = req.body;
    const animales = new Animales({ nombre, especie, peso, altura });

    const salt = bcryptjs.genSaltSync();
    animales.nombre = bcryptjs.hashSync(nombre, salt);

    await animales.save();
    console.log({ nombre, especie, peso, altura })
    res.status(202).json({
        animales
    });
}

const getAnimalesById = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findOne({ _id: id });

    res.status(200).json({
        animales
    });
}

const animalesGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    const [total, animales] = await Promise.all([
        Animales.countDocuments(query),
        Animales.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        animales
    });
}

const putAnimales = async (req, res = response) =>{
    const {id } = req.params;
    const {_id, especie, google, altura, ...resto} = req.body

    if(nombre){
        const salt = bcryptjs.genSaltSync();
        resto.nombre = bcryptjs.hashSync(nombre, salt);
    }

    const animales = await Animales.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'Animal Actualizado Exitosamente',
        animales
    });
}

module.exports = {
    animalesPost,
    animalesGet,
    getAnimalesById,
    putAnimales
}