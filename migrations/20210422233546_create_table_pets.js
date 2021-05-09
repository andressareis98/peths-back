exports.up = function (knex, Promise) {
  return knex.schema.createTable("pets", (table) => {
    table.increments("id").primary();
    table.string("avatarUrl", 100000);
    table.string("nome").notNull();

    table.datetime("anoNascimento").notNull();

    table.string("peso").notNull();

    table.string("sexo").notNull();
    table.string("observacoes");

    table.integer("userId").references("id").inTable("users").notNull();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("pets");
};
