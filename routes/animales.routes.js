const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeAnimalesById } = require('../helpers/db-validators');


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
        check("especies", "La especie no puede estar vacio").not().isEmpty(),
        check("peso", "El peso no puede estar vacio").not().isEmpty(),
        check("altura", "La altura no puede estar vacio").not().isEmpty(),
        validarCampos,
    ], animalesPost
);

router.get("/", animalesGet);

router.get(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeAnimalesById),
        validarCampos,
    ], getAnimalesById
);

router.put(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeAnimalesById),
        validarCampos,
    ], putAnimales
);

router.delete(
    "/:id",
    [
        check('id').custom(existeAnimalesById),
        check('id', 'No es un id válido').isMongoId(),
        validarCampos,
    ], animalesDelete
);

module.exports = router;