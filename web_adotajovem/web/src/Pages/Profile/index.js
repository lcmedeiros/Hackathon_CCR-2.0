import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";

export default function Profile() {
  const [persons, setPersons] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [companies, setCompanies] = useState([]);
  const history = useHistory();

  const {
    user_id,
    nome,
    nome_fantasia,
    is_mentor,
    is_empresa,
    sexo,
  } = JSON.parse(localStorage.getItem("user"));
  var helloMessage = "";
  
  if (!is_empresa) {
    helloMessage = sexo == "M" ? `Bem vindo ${nome}` : `Bem vinda ${nome}`;
  } else {
    helloMessage = `Bem vinda ${nome_fantasia}`;
  }

  useEffect(() => {
    if (is_empresa) {
      api
        .get("/company/persons", {
          headers: {
            user_id: user_id,
          },
        })
        .then((response) => {
          setPersons(response.data);
        });
    } else if (is_mentor) {
      api
        .get("/person/persons", {
          headers: {
            user_id: user_id,
          },
        })
        .then((response) => {
          setPersons(response.data);
        });
    }
  }, [persons]);
  useEffect(() => {
    api
      .get("/company/mentors", {
        headers: {
          user_id: user_id,
        },
      })
      .then((response) => {
        setCompanies(response.data);
      });
  }, [companies]);

  useEffect(() => {
    api
      .get("/person/mentors", {
        headers: {
          user_id: user_id,
        },
      })
      .then((response) => {
        setMentors(response.data);
      });
  }, [mentors]);

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <span>{helloMessage}</span>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      {is_mentor || is_empresa ? (
        <h1>Jovens buscando mentoria com você</h1>
      ) : (
        <h1>Mentores</h1>
      )}

      <ul>
        {is_mentor || is_empresa
          ? persons.map((person) => (
              <li key={person.id}>
                <strong>Nome:</strong>
                <p>{person.nome}</p>

                <strong>Celular:</strong>
                <p>{person.celular}</p>

                <strong>Email:</strong>
                <p>{person.email}</p>

                <strong>Sobre:</strong>
                <p>{person.sobre}</p>
              </li>
            ))
          : mentors.map((mentor) => (
              <li key={mentor.id}>
                <strong>Nome:</strong>
                <p>{mentor.nome}</p>

                <strong>Celular:</strong>
                <p>{mentor.celular}</p>

                <strong>Email:</strong>
                <p>{mentor.email}</p>

                <strong>Sobre:</strong>
                <p>{mentor.sobre}</p>
              </li>
            ))}
      </ul>
    </div>
  );
}
