module.exports = (app) => {
  app.post("/signup", app.api.user.save);
  app.post("/signin", app.api.auth.signin);

  app
    .route("/pets")
    .all(app.config.passport.authenticate())
    .get(app.api.pet.getPets)
    .post(app.api.pet.save);

  app
    .route("/pets/:id")
    .all(app.config.passport.authenticate())
    .delete(app.api.pet.remove)
    .put(app.api.pet.updatePet);

  app
    .route("/pets/:petId/vaccines")
    .all(app.config.passport.authenticate())
    .get(app.api.vaccine.getListVaccines)
    .post(app.api.vaccine.save);

  app
    .route("/pets/:petId/vaccines/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.vaccine.getVaccine)
    .put(app.api.vaccine.updateVaccine)
    .delete(app.api.vaccine.remove);

  app
    .route("/pets/:petId/consultations")
    .all(app.config.passport.authenticate())
    .get(app.api.consultation.getListConsultations)
    .post(app.api.consultation.save);

  app
    .route("/pets/:petId/consultations/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.consultation.getConsultation)
    .put(app.api.consultation.updateConsultation);
};

/* return { getVaccines, getVaccine, save, remove, updateVaccine }; */
