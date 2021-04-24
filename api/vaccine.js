const moment = require("moment");

module.exports = (app) => {
  const getListVaccines = (req, res) => {
    app
      .db("vaccines")
      .where({ petId: req.params.petId })
      .orderBy("id")
      .then((vaccines) => res.json(vaccines))
      .catch((err) => req.status(500).json(err));
  };

  const getVaccine = (req, res) => {
    app
      .db("vaccines")
      .where({ id: req.params.id, petId: req.params.petId })
      .then((vaccine) => res.json(vaccine))
      .catch((err) => req.status(500).json(err));
  };

  const save = (req, res) => {
    if (!req.body.nome.trim() || !req.body.status.trim() || !req.body.data) {
      return res
        .status(400)
        .send("Os campos a seguir são obrigatorios: data, nome e status");
    }

    req.body.petId = req.params.petId;

    app
      .db("vaccines")
      .insert(req.body)
      .then((_) => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  const updateVaccine = (req, res) => {
    app
      .db("vaccines")
      .where({ id: req.params.id, petId: req.params.petId })
      .update({
        nome: req.body.nome,
        data: req.body.data,
        status: req.body.status,
      })
      .then((_) => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  /*

  const remove = (req, res) => {
    app
      .db("vaccines")
      .where({ id: req.params.id, petId: req.params.petId })
      .del()
      .then((rowsDeleted) => {
        if (rowsDeleted > 0) {
          res.status(204).send();
        } else {
          const msg = "Não foi encontrado vacina com o id informado";
          res.status(400).send(msg);
        }
      })
      .catch((err) => res.status(400).json(err));
  };

   */

  return { getListVaccines, getVaccine, save, updateVaccine };
};
