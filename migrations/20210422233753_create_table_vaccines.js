exports.up = function (knex, Promise) {
  return knex.schema.createTable("vaccines", (table) => {
    table.increments("id").primary();
    table.datetime("data").notNull();
    table.string("nome").notNull();
    table.string("status").notNull();
    table.integer("petId").references("id").inTable("pets").notNull();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("vaccines");
};
