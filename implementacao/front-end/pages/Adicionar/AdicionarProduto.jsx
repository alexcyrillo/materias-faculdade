import React from 'react';
import Nav from "../../components/Nav/Nav.jsx";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./AdicionarProduto.css"

const Adicionar = () => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
  const navigate = useNavigate();


  const handleAdicionar = async () => {
    try {
      const response = await axios.post("http://localhost:3000/produtos", {
        nome: nome,
        quantidade: quantidade,
        valor: valor,
      });

      if (response.status === 200) {
        console.log("Produto adicionado com sucesso!");
        navigate('/produtos');
      } else {
        console.error("Erro ao adicionar produto");
        navigate('/produtos');
      }
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  return (
    <><Nav>
          <div
              style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
              className="container-fluid navbar-brand mb-0 h1"
          >
              <h2 style={{fontWeight: "bold"}}>Adicionar Produto</h2>
          </div>
      </Nav>
        <div style={{ textAlign: "center" }}>
              <h4 style={{ fontWeight: "bold" }}> Formulário </h4>
          </div><div className={"d-flex flex-column p-5 gap-4"}>
              <input className="form-control" type="text" placeholder="Nome"
                  aria-label="default input example" onChange={(event) => setNome(event.target.value)} />
              <input className="form-control" type="text" placeholder="Quantidade"
                  aria-label="default input example" onChange={(event) => setQuantidade(event.target.value)} />
              <input className="form-control" type="text" placeholder="Valor"
                  aria-label="default input example" onChange={(event) => setValor(event.target.value)} />
          </div><div className={"d-flex justify-content-center"}>
              <button on onClick={handleAdicionar}>Adicionar</button>
          </div></>
  );
};

export default Adicionar;