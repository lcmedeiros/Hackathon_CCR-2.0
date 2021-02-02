exports.up = function (knex, Promise) {
  let query = `
    CREATE TABLE public.cidade (
      id serial NOT NULL,
      descricao varchar(200) NOT NULL,
      uf_id serial NOT NULL,
      ibge int4 NULL,
      created_by int4 NULL,
      created_at timestamp NULL DEFAULT now(),
      updated_by int4 NULL,
      updated_at timestamp NULL,
      CONSTRAINT pk_cidade PRIMARY KEY (id),
      CONSTRAINT fk_cidade_uf FOREIGN KEY (uf_id) REFERENCES uf(id),
      CONSTRAINT fk_cidade_usuario_created FOREIGN KEY (created_by) REFERENCES usuario(id),
      CONSTRAINT fk_cidade_usuario_updated FOREIGN KEY (updated_by) REFERENCES usuario(id)
      );
    
  
    `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
        DROP TABLE public.cidade;
        `;
  return knex.raw(query);
};
