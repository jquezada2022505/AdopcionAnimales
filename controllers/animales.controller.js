const bcryptjs = require('bcryptjs');
const Animales = require('../models/animales');
const { model } = require('mongoose');

const animalesPost = async (req, res) => {
    const { nombre, especies, peso, altura } = req.body;
    const animales = new Animales({ nombre, especies, peso, altura });

    await animales.save();
    console.log({ nombre, especies, peso, altura })
    res.status(202).json({
        animales
    });
}

const getAnimalesById = async (req, res) => {
    const { id } = req.params;
    const animales = await Animales.findOne({ _id: id });

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
    const {_id, ...resto} = req.body

    const animales = await Animales.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'Animal Actualizado Exitosamente',
        animales
    });
}

const animalesDelete = async (req, res) =>{
    const{id} = req.params;
    const animales = await Animales.findByIdAndUpdate(id, {estado: false});

    res.status(200).json({
        msg: 'Animal eliminado exitosamente',
        animales
    });
}

module.exports = {
    animalesPost,
    animalesGet,
    getAnimalesById,
    putAnimales,
    animalesDelete
}