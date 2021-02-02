const { leftJoin } = require("../database/connection");
const connection = require("../database/connection");

module.exports = {
  async mentorsIndex(request, response) {
    try {
      const { page = 1 } = request.query;
      const user_id = request.headers.user_id;
      const [count] = await connection("pessoa")
        .count("id")
        .where("is_mentor", true);

      const mentors = await connection("pessoa")
        .limit(5)
        .where("is_mentor", true)
        .andWhereNot('usuario_id', user_id)
        .offset((page - 1) * 5)
        .select([
          "pessoa.id",
          "pessoa.nome",
          "pessoa.celular",
          "pessoa.email",
          "pessoa.sobre"
        ]);

      response.header("X-Total-Count", count["count(*)"]);
      return response.json(mentors);
    } catch (error) {
      return response.json({
        error: "Falha ao buscar mentores: " + error.message,
      });
    }
  },
  async personIndex(request, response) {
    try {
      const { page = 1 } = request.query;
      const user_id = request.headers.user_id;

      const [count] = await connection("agenda")
        .count("agenda.id")
        .leftJoin("pessoa", "pessoa.id", "agenda.mentor_id")
        .where("pessoa.usuario_id", user_id);

      const persons = await connection("agenda")
        .limit(5)
        .leftJoin({ pm: "pessoa" }, "pm.id", "=", "agenda.mentor_id")
        .leftJoin({ p: "pessoa" }, "p.id", "=", "agenda.pessoa_id")
        .where("pm.usuario_id", user_id)
        .offset((page - 1) * 5)
        .select(["p.id", "p.nome", "p.celular", "p.email", "p.sobre"]);

      response.header("X-Total-Count", count["count(*)"]);
      return response.json(persons);
    } catch (error) {
      return response.json({
        error:
          "Falha ao buscar pessoas que solicitaram mentoria :c " +
          error.message,
      });
    }
  },
  async updatEspecializationArea(request, response) {
    try {
      const { area_id, user_id } = request.body;
      await connection("pessoa")
        .where("usuario_id", user_id)
        .update({ area_especializacao_id: area_id });
      return response.json({
        success: "Área do usuário atualizada com sucesso",
      });
    } catch (error) {
      return response.json({
        error:
          "Falha ao atualizar a área de especialização :c " + error.message,
      });
    }
  },
};
