const express=require("express");


const router=express.Router();

router.post("/", (req,res)=>{
    res.send("Login")
})

router.post("/", (req,res)=>{
    res.send("Cadastro")
})

module.exports=router;