// Update with your config settings.

module.exports = {
  dev: {
    client: "postgresql",
    connection: {
      database: "hackathon",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
  },

  hom: {
    client: "postgresql",
    connection: {
      host: "ec2-50-19-247-157.compute-1.amazonaws.com",
      port: 5432,
      database: "d19arjvc5dq9nr",
      user: "fnqkqlpahypara",
      password:
        "ac3c21b16b8e97cbfa3b5300bdb2c4ce1b958c1f13a25b116de54dfd171e0594",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations",
    },
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
