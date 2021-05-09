// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    /* database: "peths",
    user: "postgres",
    password: "teste123", */
    connectionString:
      "postgres://uunpgfiarwdunc:ab309132c8b1033fbcdf9693abe99f2a58e3cd926ed883d0a9bd12c7d3b28651@ec2-34-198-31-223.compute-1.amazonaws.com:5432/db75uh34oq4gqj",
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
