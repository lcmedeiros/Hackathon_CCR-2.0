const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    try {
      const { username, password } = request.body;

      const user = await connection('usuario')
        .where('username', username)
        .andWhere('password', password)
        .leftJoin('pessoa', 'pessoa.usuario_id', '=', 'usuario.id')
        .leftJoin('empresa', 'empresa.usuario_id', '=', 'usuario.id')
        .select("usuario.id", 
                "pessoa.nome", 
                "empresa.nome_fantasia", 
                "pessoa.is_mentor", 
                connection.raw("coalesce(pessoa.sexo, 'M') as sexo"),
                connection.raw("case when pessoa.id is not null then false else true end as is_empresa")
        )
        .first();

      if (!user) {
        return response.status(400).json({ error: 'Usuário não encontrado com esse login ou senha' });
      }

      return response.json({
        success: "Usuário autenticado com sucesso",
        user : user
      });
    } catch (error) {
      return response.json({
        error: "Falha ao realizar o login: " + error.message,
      });
    }
  }
}