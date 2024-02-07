const { Router } = require('express');
const { check } = require('express-validator');
const { existeEmail, esRoleValido, existeUsuarioById } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');

const {
    usuariosPost,
    usuarioGet,
    getUsuarioById,
    putUsuarios,
    usuariosDelete } = require('../controllers/user.controller');

const router = Router();

router.get("/", usuarioGet);

router.get(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeUsuarioById),
        validarCampos
    ], getUsuarioById
);

router.put(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeUsuarioById),
        check("role").custom(esRoleValido),
        validarCampos
    ], putUsuarios
);

router.post(
    "/",
    [
        check("nombre", "Nombre no puede estar vacio").not().isEmpty(),
        check("password", "El password debe de ser mayor a 6 caracteres").isLength({ min: 6 }),
        check("correo", "Este no es un correo valido").isEmail(),
        check("correo").custom(existeEmail),
        check("role").custom(esRoleValido),
        validarCampos,
    ], usuariosPost
);

router.delete(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeUsuarioById),
        validarCampos
    ], usuariosDelete
);

module.exports = router;