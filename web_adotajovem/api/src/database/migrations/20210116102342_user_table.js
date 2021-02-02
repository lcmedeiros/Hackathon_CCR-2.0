exports.up = function (knex, Promise) {
  let query = `
    CREATE TABLE public.usuario (
      id serial NOT NULL,
      username varchar(255) NOT NULL,
      "password" varchar(255) NOT NULL,
      ativo bool NULL,
      created_by int4 NULL,
      created_at timestamp NULL DEFAULT now(),
      updated_by int4 NULL,
      updated_at timestamp NULL,
      administrador bool NULL,
      CONSTRAINT pk_usuario PRIMARY KEY (id),
      CONSTRAINT unique_username UNIQUE (username),
      CONSTRAINT fk_usuario_usuario_created FOREIGN KEY (created_by) REFERENCES usuario(id),
      CONSTRAINT fk_usuario_usuario_updated FOREIGN KEY (updated_by) REFERENCES usuario(id)
    );
  
    
  `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
    DROP TABLE public.usuario;
  `;
  return knex.raw(query);
};
