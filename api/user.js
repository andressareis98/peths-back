const bcrypt = require("bcrypt-nodejs");

module.exports = (app) => {
  const obterHash = (senha, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(senha, salt, null, (err, hash) => callback(hash));
    });
  };

  const save = (req, res) => {
    obterHash(req.body.senha, (hash) => {
      const senha = hash;

      app
        .db("users")
        .insert({
          nome: req.body.nome,
          crmv: req.body.crmv,
          email: req.body.email,
          senha,
        })
        .then((_) => res.status(204).send())
        .catch((err) => res.status(400).json(err));
    });
  };

  return { save };
};
