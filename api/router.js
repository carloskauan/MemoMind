const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("home")
})

router.post("/signin", (req,res)=>{
    const form = {
        senha: req.body.senha,
        email: req.body.email,
    }

    res.send(form)
})

router.post("/signup", (req,res)=>{
    const form = {
        senha: req.body.senha,
        email: req.body.email,
        nome: req.body.nome
    }

    res.send(form)
})

module.exports=router;