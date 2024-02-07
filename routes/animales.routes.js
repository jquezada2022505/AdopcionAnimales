const { Router } = require('express');
const { check } = require('express-validator');
const { esAnimalesValido, existeAnimalesById } = require('../helpers/db-validatorsAnimales');

const { validarCampos } = require('../middlewares/validar-campos');

const {
    animalesPost,
    animalesGet,
    getAnimalesById,
    putAnimales,
    animalesDelete } = require('../controllers/animales.controller');
const router = Router();

router.post(
    "/",
    [
        check("nombre", "Nombre no puede estar vacio").not().isEmpty(),
        check("especies", "La Especie no puede estar vacio").custom(esAnimalesValido),
        check("peso", "El peso no puede estar vacio").not().isEmpty(),
        check("altura", "La Especie no puede estar vacio").not().isEmpty(),
        check("especies").custom(esAnimalesValido),
        validarCampos
    ], animalesPost
);

router.get(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeAnimalesById),
        validarCampos
    ], getAnimalesById
);

router.get("/", animalesGet);

router.get(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeAnimalesById),
        validarCampos
    ], getAnimalesById
);

router.put(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeAnimalesById),
        check("especies").custom(esAnimalesValido),
        validarCampos
    ], putAnimales
);

router.delete(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeAnimalesById),
        validarCampos
    ], animalesDelete
);

module.exports = router;