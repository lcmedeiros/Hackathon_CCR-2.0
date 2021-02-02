exports.up = function (knex, Promise) {
  let query = `
    CREATE TABLE public.uf (
        id serial NOT NULL,
        uf varchar(2) NOT NULL,
        descricao varchar(200) NOT NULL,
        pais_id int4 NULL,
        ibge int4 NULL,
        created_by int4 NULL,
        created_at timestamp NULL DEFAULT now(),
        updated_by int4 NULL,
        updated_at timestamp NULL,
        CONSTRAINT pk_uf PRIMARY KEY (id),
        CONSTRAINT fk_uf_created FOREIGN KEY (created_by) REFERENCES usuario(id),
        CONSTRAINT fk_uf_pais FOREIGN KEY (pais_id) REFERENCES pais(id),
        CONSTRAINT fk_uf_updated FOREIGN KEY (updated_by) REFERENCES usuario(id)
      );

  `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
      DROP TABLE public.uf;
      `;
  return knex.raw(query);
};
