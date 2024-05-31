//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

//database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Conectado ao banco de dados!"));


app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});

app.listen(PORT, () => {
    console.log(`servidor iniciado em http://localhost:${PORT}`);
});