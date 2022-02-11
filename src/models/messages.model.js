const sql = require("../config/db").getConnection();

const Message = function (message) {
    this.id = message.id;
    this.author = message.author;
    this.email = message.email;
    this.message = message.message;
}

Message.create = (newMessage, result) => {
    sql.then(async function (conn) {
        try {
            const rows = await conn.query("INSERT INTO message ( `author`, `email`, `message`) VALUES (?, ?,  ?);", [newMessage.author, newMessage.email, newMessage.message]);

            if (rows.affectedRows > 0) {
                result(null, { message: "Mensagem inserida com Sucesso!", id: rows.insertId, data: newMessage });
            }

        } catch (err) {
            if (err.errno === 1062) {
                var msg = err.text;
                var msg = msg.split(" ");
                result({
                    erro: err.errno,
                    message: msg[5] + ": " + msg[2] + " já existe no sistema.",
                    sqlMessage: err.sqlMessage
                }, null);
                return;
            } else {
                result(err, null);
                return;
            }


        }
    })
};

Message.findAll = (result) => {
    sql.then(async function (conn) {
        try {
            const rows = await conn.query(`SELECT * FROM message`);
            if (rows.length > 0) {
                result(null, rows);
                return;
            }
            result(null, { message: "Não existe Mensagens" });
        } catch (err) {

            result(err, null);
            return;
        }
    })
};

Message.update = (id, message, result) => {
    sql.then(async function (conn) {
        try {

            var itens = [];
            var conteudo = [];
            Object.keys(message).forEach(function (item) {
                itens.push("`" + item + "` = ? ");
                conteudo.push(message[item]);
            });

            var campos = itens.toString();

            const query = "UPDATE message SET " + campos + " WHERE id = ?";

            const rows = await conn.query(query, [...conteudo, id]);

            if (rows.affectedRows == 0) {
                result(null, { message: "Não existe Mensagem com o id: " + id });
                return;
            }
            result(null, { message: "Mensagem alterada com sucesso!! ", id: id, data: message });
        } catch (err) {
            if (err.errno === 1062) {
                var msg = err.text;
                var msg = msg.split(" ");
                result({
                    erro: err.errno,
                    message: msg[5] + ": " + msg[2] + " já existe no sistema.",
                    sqlMessage: err.sqlMessage
                }, null);
                return;
            } else {
                result(err, null);
                return;
            }
        }
    })
};

Message.delete = (id, result) => {
    sql.then(async function (conn) {
        try {
            const rows = await conn.query("DELETE FROM message WHERE id = ?", id);

            if (rows.affectedRows == 0) {
                result(null, { message: "Não existe Mensagem com o id: " + id });
                return;
            }
            result(null, { message: "Mensagem excluida com id: " + id });
        } catch (err) {
            result(err, null);
            return;
        }
    })
};

module.exports = Message;