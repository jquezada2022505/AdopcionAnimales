const { validationResult } = require('express-validator');


const validarAnimales = (req, res, next) => {
    console.log("funcion");
    const error = validationResult(req);
    
    if(!error.isEmpty()){
        return res.status(400).json(error);
    }

    next();
}

module.exports = {
    validarAnimales
}