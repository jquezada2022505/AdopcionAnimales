const { Router } = require('express');
const { check } = require('express-validator');
const { esAnimalesValido } = require('../helpers/db-validatorsAnimales');

const { validarAnimales } = require('../middlewares/validar-animales');

const { getAnimalesById, animalesPost } = require('../controllers/animales.controller');

const router = Router();
router.post(
    "/",
    [
        check("nombre", "Nombre no puede estar vacio").not().isEmpty(),
        check("especie", "La Especie no puede estar vacio").not().isEmpty(),
        check("peso", "El peso no puede estar vacio").not().isEmpty(),
        check("altura", "La Especie no puede estar vacio").not().isEmpty(),
        check("validarAnimales").custom(esAnimalesValido),
        validarAnimales,
    ], animalesPost
);

router.get(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(esAnimalesValido),
        validarAnimales
    ], getAnimalesById
);