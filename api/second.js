const express=require("express");
const app=express();

app.post("/anotar", (req,res)=>{
    var titulo=req.body.titulo
    var anotacoes=req.body.anotacoes
        res.send({ resp:`Esse é o título ${titulo} e essas são as anotações ${anotacoes}`});
});

app.listen(5050, ()=>{
    console.log("Server on");
});