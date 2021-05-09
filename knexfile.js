// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    /* database: "peths",
    user: "postgres",
    password: "teste123", */
    connectionString:
      "postgres://ymbfiqsrnzoiff:066c236323844115dfe3af3cc040e4b637c170138773525db001ef7515a03c02@ec2-3-217-219-146.compute-1.amazonaws.com:5432/djl295htdj1ik",
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
