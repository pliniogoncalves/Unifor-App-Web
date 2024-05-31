const express = require("express");
const router = express.Router();
const User = require("../models/users");
const multer = require("multer");
const fs = require("fs");

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

// Rota para editar um usuario no banco de dados
router.get("/edit/:id", async (req, res) => {
    let id = req.params.id;
    try {
        const user = await User.findById(id);
        if (user == null) {
            res.redirect("/");
        } else {
            res.render("edit_users", {
                title: "Editar Usuário",
                user: user,
            });
        }
    } catch (err) {
        res.redirect("/");
    }
});

// Rota para atualizar um usuario no banco de dados
// Rota para atualizar um usuário no banco de dados
router.post("/update/:id", upload, async (req, res) => {
    let id = req.params.id;
    let new_image = "";

    if (req.file) {
        new_image = req.file.filename;
        try {
            fs.unlinkSync("./uploads/" + req.body.old_image);
        } catch (err) {
            console.log(err);
        }
    } else {
        new_image = req.body.old_image;
    }

    try {
        await User.findByIdAndUpdate(id, {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            imagem: new_image,
        });
        req.session.message = {
            type: "success",
            message: "Usuário atualizado com sucesso!",
        };
        res.redirect("/");
    } catch (err) {
        res.json({ message: err.message, type: "danger" });
    }
});

// Rota para deletar usuário do banco de dados
router.get("/delete/:id", async (req, res) => {
    let id = req.params.id;
    
    try {
        const result = await User.findByIdAndDelete(id);
        
        if (result && result.image != "") {
            try {
                fs.unlinkSync("./uploads/" + result.imagem);
            } catch (err) {
                console.log(err);
            }
        }

        req.session.message = {
            type: "info",
            message: "Usuário deletado com sucesso!"
        };
        res.redirect("/");
        
    } catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;