const { validationResult } = require('express-validator');

module.exports = {
    validar(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const msg = errors.errors[0].msg;
            return res.status(400).json({ message: msg });
        }
        next();
    }
};