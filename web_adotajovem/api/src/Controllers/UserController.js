const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    try {
      const { username, password, is_company } = request.body.user;

      const [user_id] = await connection("usuario")
        .insert({
          username: username,
          password: password,
          ativo: true,
        })
        .returning("id");

      if (is_company) {
        const {
          razao_social,
          nome_fantasia,
          email,
          cnpj,
          ie,
          cep,
          cidade_id,
          telefone,
          celular,
          sobre,
          yt,
          linkedin,
          facebook,
          instagram,
        } = request.body.company;

        await connection("empresa").insert({
          razao_social,
          nome_fantasia,
          usuario_id: user_id,
          cnpj,
          ie,
          cep,
          cidade_id,
          telefone,
          celular,
          ativo: true,
          sobre,
          email,
          youtube: yt,
          linkedin,
          facebook,
          instagram,
        });
      } else {
        const {
          cidade_id,
          nome,
          is_mentor,
          telefone,
          celular,
          email,
          sobre
        } = request.body.person;

        await connection("pessoa").insert({
          cidade_id,
          usuario_id: user_id,
          nome,
          is_mentor,
          telefone,
          celular,
          email,
          sobre
        });
      }
      return response.json({ success: "Usuário criado com sucesso :D " });
    } catch (error) {
      return response.status(500).send({
        error: "Falha ao criar seu usuário :c " + error.message,
      });
    }
  },
};
