exports.up = function (knex, Promise) {
  let query = `

    CREATE TABLE public.empresa (
        id serial NOT NULL,
        razao_social varchar(200) NOT NULL,
        nome_fantasia varchar(200) NOT NULL,
        usuario_id int4 NOT NULL,
        cnpj varchar(14) NULL,
        ie varchar(20) NULL,
        cep varchar(20) NULL,
        cidade_id int4 NOT NULL,
        created_by int4 NULL,
        created_at timestamp NULL DEFAULT now(),
        updated_by int4 NULL,
        updated_at timestamp NULL,
        telefone varchar(30) NULL,
        celular varchar(30) NULL,
        ativo bool NOT NULL,
        sobre varchar(255) NULL,
        email varchar(500) NULL,
        youtube varchar(1000) NULL,
        linkedin varchar(1000) NULL,
        facebook varchar(1000) NULL,
        instagram varchar(1000) NULL,
        area_especializacao_id int4 NULL,
        CONSTRAINT pk_empresa PRIMARY KEY (id),
        CONSTRAINT fk_empresa_arae_especializacao FOREIGN KEY (area_especializacao_id) REFERENCES area_especializacao(id),
        CONSTRAINT fk_empresa_cidade FOREIGN KEY (cidade_id) REFERENCES cidade(id),
        CONSTRAINT fk_empresa_usuario_created FOREIGN KEY (created_by) REFERENCES usuario(id),
        CONSTRAINT fk_empresa_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuario(id),
        CONSTRAINT fk_empresa_usuario_updated FOREIGN KEY (updated_by) REFERENCES usuario(id)
    );
    
    `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
              DROP TABLE public.empresa;
              `;
  return knex.raw(query);
};
