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

app.listen(process.env.PORT, () => {
  console.log("Backend executando...");
});
