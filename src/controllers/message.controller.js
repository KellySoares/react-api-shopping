const Message = require("../models/messages.model");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio!"
        });
    }

    const message = new Message({
        author: req.body.author,
        email: req.body.email,
        message: req.body.message
    });

    Message.create(message, (err, data) => {
        if (err)
            res.status(500).send(err);
        else res.status(200).send(data);
    });
};

exports.findAll = (req, res) => {
    Message.findAll((err, data) => {
        if (err)
            res.status(500).send(err);
        else res.status(200).send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio!"
        });
    }

    Message.update(req.params.id, req.body, (err, data) => {
        if (err)
            res.status(500).send(err);
        else res.status(200).send(data);
    }
    );
};

exports.delete = (req, res) => {
    Message.delete(req.params.id, (err, data) => {
        if (err)
            res.status(500).send(err);
        else res.status(200).send(data);
    });
};