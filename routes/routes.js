const express = require("express");
const router = express.Router();
const User = require("../models/users");
const multer = require("multer");

//image upload
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("imagem");

router.get("/", (req, res) => {
    res.render("index", { title: "Home Page" });
});

router.get("/add", (req, res) => {
    res.render("add_users", { title: "Adicionar Usuários" });
});

module.exports = router;