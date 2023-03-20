const express = require("express");
const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 6060;
const connection=require("./database/database")
const rooter=require("../rooter")

connection.authenticate().then(()=>{
  console.log("Conexão feita com sucesso")
}).catch((error)=>{
  console.log(error)
});

app.use(express.json())

app.use("/", rooter)

app.get('/', (_, res)=>{
  res.status(200);
  res.json({staus: 200})
});

app.get("/test", (_, res)=>{
  res.json(
    {result: "SLAAAAA"}
  );
});
app.post("/test", (req,res)=>{
  let nome = req.body.nome;
  let idade = req.body.idade;

app.post("signup", (req,res)=>{
  let nome=req.body.nome;
  let email=req.body.email;
  let senha=req.body.email;
})

app.post("/signin", (req,res)=>{
  let email=req.body.email;
  let senha=req.body.senha;
});

  res.json({
    resp: `Ola senhor(a) ${nome} vc tem ${idade} anos de idade`
  })
});

app.listen(
  HTTP_PORT, ()=>console.log(`Servidor ativo na porta ${HTTP_PORT}`
  ));

module.exports = app;