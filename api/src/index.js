const express = require("express");
const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 8080;

app.get('/', (_, res)=>{
  res.status(200);
  res.json({staus: 200})
});

app.listen(
  HTTP_PORT, ()=>console.log(`Servidor ativo na porta ${HTTP_PORT}`
  ));

module.exports = app;