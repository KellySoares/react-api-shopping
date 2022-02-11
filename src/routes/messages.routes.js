const message = require('../controllers/message.controller');

var router = require('express').Router();

const { body } = require('express-validator');
const { validar } = require("../utils/validation");

router.post("/message", [
    body('author')
        .notEmpty().withMessage("O campo Author não pode ser vazio!"),
    body('email')
        .notEmpty().withMessage("O campo email não pode ser vazio!")
        .isEmail().withMessage('Email Inválido!'),
    body('message')
        .notEmpty().withMessage("A mensagem não pode ser vazia!")], validar, message.create);

router.get("/message", message.findAll);

router.put("/message/:id", [
    body('email')
        .notEmpty().withMessage("O campo email não pode ser vazio!")
        .isEmail().withMessage('Email Inválido!'),
    body('message')
        .notEmpty().withMessage("A mensagem não pode ser vazia!")], validar, message.update);

router.delete("/message/:id", message.delete);

module.exports = router;