const express = require("express");
const router = express.Router();
const User = require("../models/users");
const multer = require("multer");

// Configuração do multer para upload de imagem
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

// Rota para adicionar um usuário ao banco de dados
router.post("/add", upload, async (req, res) => {
    const user = new User({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        imagem: req.file.filename,
    });
    
    try{
        await user.save();
            req.session.message = {
                    type: "sucess", 
                    message: "Usuário adicionado com sucesso!",
                };
                res.redirect("/");
    }catch (err) {
        res.json({message: err.message, type: "danger"});
    }  
});

// Rota para obter todos os usuários
router.get("/", async (req, res) => {
    try {
        const users = await User.find().exec();
        res.render("index", {
            title: "Home Page",
            users: users,
        });
    } catch (err) {
        res.json({ message: err.message });
    }
});

router.get("/add", (req, res) => {
    res.render("add_users", { title: "Adicionar Usuários" });
});

module.exports = router;