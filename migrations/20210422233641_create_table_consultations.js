exports.up = function (knex, Promise) {
  return knex.schema.createTable("consultations", (table) => {
    table.increments("id").primary();
    table.datetime("data").notNull();
    table.string("peso").notNull();
    table.string("diagnostico").notNull();
    table.string("prescricao");
    table.integer("petId").references("id").inTable("pets").notNull();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("consultations");
};
