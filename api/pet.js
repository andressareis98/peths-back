const moment = require("moment");

module.exports = (app) => {
  const getPets = (req, res) => {
    app
      .db("pets")
      .where({ userId: req.user.id })
      .orderBy("id")
      .then((pets) => res.json(pets))
      .catch((err) => req.status(500).json(err));
  };

  const save = (req, res) => {
    if (!req.body.nome.trim() || !req.body.peso || !req.body.sexo) {
      return res
        .status(400)
        .send("Os campos a seguir são obrigatorios: nome, peso, sexo");
    }

    req.body.userId = req.user.id;

    app
      .db("pets")
      .insert(req.body)
      .then((_) => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  const remove = (req, res) => {
    app
      .db("pets")
      .where({ id: req.params.id, userId: req.user.id })
      .del()
      .then((rowsDeleted) => {
        if (rowsDeleted > 0) {
          res.status(204).send();
        } else {
          const msg = "Não foi encontrado task com o id ";
          res.status(400).send(msg);
        }
      })
      .catch((err) => res.status(400).json(err));
  };

  const updatePet = (req, res) => {
    app
      .db("pets")
      .where({ id: req.params.id, userId: req.user.id })
      .update({
        nome: req.body.nome,
        avatarUrl: req.body.avatarUrl,
        anoNascimento: req.body.anoNascimento,
        peso: req.body.peso,
        sexo: req.body.sexo,
        observacoes: req.body.observacoes,
      })
      .then((_) => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  return { getPets, save, remove, updatePet };
};
