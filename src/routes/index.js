var msg = require('./messages.routes');

module.exports = app => {
    [].concat(
        app.use('/', msg)
    )
};