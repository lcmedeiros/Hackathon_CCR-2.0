import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";

export default function Logon() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("session", { username, password });

      const user = {
        user_id: response.data.user.id,
        nome: response.data.user.nome,
        nome_fantasia: response.data.user.nome_fantasia,
        is_mentor: response.data.user.is_mentor,
        sexo: response.data.user.sexo,
        is_empresa: response.data.user.is_empresa,
      }

      localStorage.setItem("user", JSON.stringify(user));

      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            placeholder="Sua senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register/mentor/">
            <FiLogIn size={16} color="#E02041" />
            Desejar ser um mentor ? Cadastre-se aqui
          </Link>
          <Link className="back-link" to="/register/person">
            <FiLogIn size={16} color="#E02041" />
            Deseja buscar mentoria ? Cadastre-se aqui
          </Link>
        </form>
      </section>

    </div>
  );
}
