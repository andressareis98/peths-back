// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    /* database: "peths",
    user: "postgres",
    password: "teste123", */
    connectionString:
      "postgres://euoxoofzqzudfc:f02c5cfd30fc6fcdce75602d604b3fd466f5fdcbcd03f44ad415f1cf1331c818@ec2-54-87-112-29.compute-1.amazonaws.com:5432/d9ual6dniagu9d",
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
