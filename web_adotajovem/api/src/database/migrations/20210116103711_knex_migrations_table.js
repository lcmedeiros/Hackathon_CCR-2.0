exports.up = function (knex, Promise) {
  let query = `
    CREATE TABLE public.knex_migrations (
      id serial NOT NULL,
      "name" varchar(255) NULL,
      batch int4 NULL,
      migration_time timestamptz NULL,
      CONSTRAINT bitz_migrations_pkey PRIMARY KEY (id)
    );

  
      
    `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
            DROP TABLE public.knex_migrations;
            `;
  return knex.raw(query);
};
