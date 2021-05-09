module.exports = (app) => {
  app.post("/signup", app.api.user.save);
  app.post("/signin", app.api.auth.signin);

  app.get("/users", app.api.user.getListUsers);

  app
    .route("/pets")
    .all(app.config.passport.authenticate())
    .get(app.api.pet.getListPets)
    .post(app.api.pet.save);

  app
    .route("/pets/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.pet.getPet)
    .put(app.api.pet.updatePet)
    .delete(app.api.pet.remove);

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
    .put(app.api.consultation.updateConsultation)
    .delete(app.api.consultation.remove);
};
