//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});

app.listen(PORT, () => {
    console.log(`servidor iniciado em http://localhost:${PORT}`);
});