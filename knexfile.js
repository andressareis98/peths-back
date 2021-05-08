// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    /* database: "peths",
    user: "postgres",
    password: "teste123", */
    connectionString:
      "postgres://mylgaqbxerbtjh:592e396b57169cd976b3c6d793b459ad4c107416b2b23dccb56587569ad0cc49@ec2-52-0-114-209.compute-1.amazonaws.com:5432/d7l67oqg4rt57q",
    ssl: { rejectUnauthorized: false },
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
