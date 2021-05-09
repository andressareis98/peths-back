const app = require("express")();
const consign = require("consign");

const db = require("./config/db");

consign()
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

app.db = db;

console.log("Teste");

// Porta em que o projeto será executado

const uri =
  "postgres://euoxoofzqzudfc:f02c5cfd30fc6fcdce75602d604b3fd466f5fdcbcd03f44ad415f1cf1331c818@ec2-54-87-112-29.compute-1.amazonaws.com:5432/d9ual6dniagu9d";
app.listen(process.env.PORT || 3000, () => {
  console.log("Backend executando...");
});
