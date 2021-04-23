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

// Porta em que o projeto será executado
app.listen(3000, () => {
  console.log("Backend executando...");
});
