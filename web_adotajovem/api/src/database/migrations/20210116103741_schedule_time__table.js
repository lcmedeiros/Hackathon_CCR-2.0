exports.up = function (knex, Promise) {
  let query = `
    CREATE TABLE public.horario (
        id serial NOT NULL,
        hora_inicial time null,
        hora_final time null,
        created_by int4 NULL,
        created_at timestamp NULL DEFAULT now(),
        updated_by int4 NULL,
        updated_at timestamp NULL,
        CONSTRAINT pk_horario PRIMARY KEY (id)
    );
       
    `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
      DROP TABLE public.horario;          
    `;
  return knex.raw(query);
};
