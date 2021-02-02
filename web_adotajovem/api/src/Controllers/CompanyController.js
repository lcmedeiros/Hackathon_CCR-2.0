const connection = require("../database/connection");

module.exports = {
  async companyIndex(request, response) {
    try {
      const user_id = request.headers.user_id;
      const companies = await connection("empresa")
        .select([
          "id", 
          "nome_fantasia", 
          "cep", 
          "telefone",
          "celular",
          "email",
          "sobre",
          "linkedin",
          "instagram"
        ]).whereNotIn('usuario', user_id);

        
      return response.json(companies);
    } catch (error) {
      return response.json({
        error: "Falha ao buscar empresas: " + error.message,
      });
    }
  },
  async personIndex(request, response){
    try {
      const { page = 1 } = request.query;
      const user_id = request.headers.user_id;

      const [count] = await connection("agenda")
        .count("agenda.id")
        .leftJoin('pessoa', 'pessoa.id', 'agenda.empresa_id')
        .where("pessoa.usuario_id", user_id);

      const persons = await connection("agenda")
        .limit(5)
        .leftJoin({ pe: 'pessoa' }, 'pe.id', '=', 'agenda.empresa_id')
        .leftJoin({p: 'pessoa'}, 'p.id', '=', 'agenda.pessoa_id')
        .where("pe.usuario_id", user_id)
        .offset((page - 1) * 5)
        .select([
          "p.id", 
          "p.nome", 
          "p.celular", 
          "p.email"]);

      response.header("X-Total-Count", count["count(*)"]);
      return response.json(persons);
    } catch (error) {
      return response.json({
        error: "Falha ao buscar pessoas que solicitaram mentoria :c " + error.message,
      });
    }
  },
  async updatEspecializationArea(request, response) {
    try {
      const { area_id, user_id } = request.body;
      await connection('empresa')
        .where("usuario_id", user_id)
        .update({ area_especializacao_id: area_id })
      return response.json({ success: "Área do usuário atualizada com sucesso" });
    } catch (error) {
      return response.json({
        error: "Falha ao atualizar a área de especialização :c " + error.message,
      });
    }
  }
};
