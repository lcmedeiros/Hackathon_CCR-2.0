exports.up = function (knex, Promise) {
  let query = `
  
      
    CREATE TABLE public.pessoa (
    	id serial NOT NULL,
    	cidade_id int4 NULL,
    	usuario_id int4 NULL,
    	nome varchar(255) NULL,
    	is_mentor bool NULL,
    	telefone varchar(3000) NULL,
    	celular varchar(30) NULL,
    	email varchar(100) NULL,
    	sexo varchar(1) NULL,
    	created_by int4 NULL,
    	created_at timestamp NULL DEFAULT now(),
    	updated_by int4 NULL,
    	updated_at timestamp NULL,
    	area_especializacao_id int4 NULL,
    	linkedin varchar(1000) NULL,
    	instagram varchar(1000) NULL,
    	CONSTRAINT pk_pessoa PRIMARY KEY (id),
    	CONSTRAINT fk_pessoa_arae_especializacao FOREIGN KEY (area_especializacao_id) REFERENCES area_especializacao(id),
    	CONSTRAINT fk_pessoa_cidade FOREIGN KEY (cidade_id) REFERENCES cidade(id),
    	CONSTRAINT fk_pessoa_usuario_created FOREIGN KEY (created_by) REFERENCES usuario(id),
    	CONSTRAINT fk_pessoa_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    	CONSTRAINT fk_pessoa_usuario_updated FOREIGN KEY (updated_by) REFERENCES usuario(id)
    );
      
    `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
                DROP TABLE public.pessoa;
                `;
  return knex.raw(query);
};
