exports.up = function (knex, Promise) {
  let query = `
    CREATE TABLE public.agenda (
    	id serial NOT NULL,
        pessoa_id int4 NULL,
        mentor_id int4 NULL,
    	empresa_id int4 NULL,
    	horario_id int4 NULL,
    	data timestamp NULL,
    	mensagem varchar(1000) NULL,
    	created_by int4 NULL,
    	created_at timestamp NULL DEFAULT now(),
    	updated_by int4 NULL,
    	updated_at timestamp NULL,
    	CONSTRAINT pk_agenda PRIMARY KEY (id),
    	CONSTRAINT fk_agenda_horario FOREIGN KEY (horario_id) REFERENCES horario(id),
        CONSTRAINT fk_agenda_pessoa  FOREIGN KEY (pessoa_id) REFERENCES pessoa(id),
        CONSTRAINT fk_agenda_pessoa_mentor  FOREIGN KEY (mentor_id) REFERENCES pessoa(id),
    	CONSTRAINT fk_agenda_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    	CONSTRAINT fk_pessoa_usuario_created FOREIGN KEY (created_by) REFERENCES usuario(id),
    	CONSTRAINT fk_pessoa_usuario_updated FOREIGN KEY (updated_by) REFERENCES usuario(id)
    );     
  `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
    DROP TABLE public.agenda;          
  `;
  return knex.raw(query);
};
