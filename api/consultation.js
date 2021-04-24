const moment = require("moment");

module.exports = (app) => {
  const getListConsultations = (req, res) => {
    app
      .db("consultations")
      .where({ petId: req.params.petId })
      .orderBy("id")
      .then((consultations) => res.json(consultations))
      .catch((err) => req.status(500).json(err));
  };

  const getConsultation = (req, res) => {
    app
      .db("consultations")
      .where({ id: req.params.id, petId: req.params.petId })
      .then((consultation) => res.json(consultation))
      .catch((err) => req.status(500).json(err));
  };

  const save = (req, res) => {
    if (
      !req.body.peso.trim() ||
      !req.body.diagnostico.trim() ||
      !req.body.data
    ) {
      return res
        .status(400)
        .send("Os campos a seguir são obrigatorios: data, peso e diagnostico");
    }

    req.body.petId = req.params.petId;

    app
      .db("consultations")
      .insert(req.body)
      .then((_) => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  const updateConsultation = (req, res) => {
    app
      .db("consultations")
      .where({ id: req.params.id, petId: req.params.petId })
      .update({
        data: req.body.data,
        peso: req.body.peso,
        diagnostico: req.body.diagnostico,
        prescricao: req.body.prescricao,
      })
      .then((_) => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  const remove = (req, res) => {
    app
      .db("consultations")
      .where({ id: req.params.id, petId: req.params.petId })
      .del()
      .then((rowsDeleted) => {
        if (rowsDeleted > 0) {
          res.status(204).send();
        } else {
          const msg = "Não foi encontrado consulta com o id informado";
          res.status(400).send(msg);
        }
      })
      .catch((err) => res.status(400).json(err));
  };

  return {
    getListConsultations,
    getConsultation,
    save,
    updateConsultation,
    remove,
  };
};
