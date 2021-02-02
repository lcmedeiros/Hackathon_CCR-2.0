import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../../services/api";
import "../styles.css";

export default function RegisterMentor() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade_id, setCidadeid] = useState(1);
  const [cidade, setCidade] = useState('');
  const [sobre, setSobre] = useState("");


  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const user = {
      username,
      password,
      is_company: false,
    };
    const person = {
      nome,
      email,
      celular,
      telefone,
      cidade_id,
      is_mentor:false,
      sobre,
    };
    const data = {
      user,
      person,
    };
    try {
      const response = await api.post("users", data);
  
      alert(`Usuário criado`);

      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro como pessoa buscando mentoria</h1>
          <p>Faça seu cadastro, entre na plataforma e encontre sua área de especialização.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            placeholder="nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Senha "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <input
            placeholder="WhatsApp"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>

          <textarea
              placeholder="Escreva um pouco sobre você"
              value={sobre}
              onChange={(e) => setSobre(e.target.value)}
            />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
