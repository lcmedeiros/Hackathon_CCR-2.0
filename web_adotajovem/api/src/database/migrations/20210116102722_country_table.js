exports.up = function (knex, Promise) {
  let query = `
    CREATE TABLE public.pais (
        id serial NOT NULL,
        descricao varchar(200) NOT NULL,
        codigo_ibge int4 NULL,
        created_by int4 NULL,
        created_at timestamp NULL DEFAULT now(),
        updated_by int4 NULL,
        updated_at timestamp NULL,
        abreviacao varchar(10) NULL,
        CONSTRAINT pk_pais PRIMARY KEY (id),
        CONSTRAINT fk_pais_usuario_created FOREIGN KEY (created_by) REFERENCES usuario(id),
        CONSTRAINT fk_pais_usuario_updated FOREIGN KEY (updated_by) REFERENCES usuario(id)
    );
    `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
    DROP TABLE public.pais;
    `;
  return knex.raw(query);
};
