// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    database: "peths",
    user: "postgres",
    password: "teste123",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};