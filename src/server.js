const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.json({ message: 'Bem vindo a API' });
});
require("./routes")(app);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

