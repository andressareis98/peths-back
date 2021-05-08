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
const url =
  "postgres://mylgaqbxerbtjh:592e396b57169cd976b3c6d793b459ad4c107416b2b23dccb56587569ad0cc49@ec2-52-0-114-209.compute-1.amazonaws.com:5432/d7l67oqg4rt57q";
app.listen(3000, () => {
  console.log("Backend executando...");
});
