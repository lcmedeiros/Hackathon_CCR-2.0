exports.up = function (knex, Promise) {
  let query = `
    CREATE TABLE public.area_especializacao (
	  id serial NOT NULL,
	  descricao varchar(255) NULL,
	  created_by int4 NULL,
	  created_at timestamp NULL DEFAULT now(),
	  updated_by int4 NULL,
	  updated_at timestamp NULL,
  	  CONSTRAINT pk_area_especializacao PRIMARY KEY (id)
    );

    
    `;
  return knex.raw(query);
};

exports.down = function (knex) {
  let query = `
          DROP TABLE public.area_especializacao;
          `;
  return knex.raw(query);
};
