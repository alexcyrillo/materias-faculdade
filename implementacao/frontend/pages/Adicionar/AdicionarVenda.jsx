import React from 'react';
import Nav from "../../components/Nav/Nav.jsx";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./AdicionarVenda.css"

const Adicionar = () => {
  const [numNota, setNumNota] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [codProduto, setCodProduto] = useState("");
  const [dataVenda, setDataVenda] = useState("");
  const [valor, setValor] = useState("");
  const [cpfVendedor, setCpfVendedor] = useState("");
  const navigate = useNavigate();


  const handleAdicionar = async () => {
    try {
      const response = await axios.post("http://localhost:3000/vendas", {
        numero_nota: numNota,
        cpf_cliente: cpfCliente,
        cod_produto: codProduto,
        data_venda: dataVenda,
        valor: valor,
        cpf_vendedor: cpfVendedor,
      });

      if (response.status === 200) {
        console.log("Venda adicionado com sucesso!");
        navigate('/vendas/lista');
      } else {
        console.error("Erro ao adicionar produto");
        navigate('/vendas/lista');
      }
    } catch (error) {
      console.error("Erro ao adicionar venda:", error);
    }
  };

  return (
    <><Nav>
          <div
              style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
              className="container-fluid navbar-brand mb-0 h1"
          >
              <h2 style={{fontWeight: "bold"}}>Adicionar Venda</h2>
          </div>
      </Nav>
        <div style={{ textAlign: "center" }}>
              <h4 style={{ fontWeight: "bold" }}> Formulário </h4>
          </div><div className={"d-flex flex-column p-5 gap-4"}>
              <input className="form-control" type="text" placeholder="Número Nota"
                  aria-label="default input example" onChange={(event) => setNumNota(event.target.value)} />
              <input className="form-control" type="text" placeholder="CPF Cliente"
                  aria-label="default input example" onChange={(event) => setCpfCliente(event.target.value)} />
              <input className="form-control" type="text" placeholder="Cod Produto"
                  aria-label="default input example" onChange={(event) => setCodProduto(event.target.value)} />
              <input className="form-control" type="text" placeholder="Data Venda"
                  aria-label="default input example" onChange={(event) => setDataVenda(event.target.value)} />
              <input className="form-control" type="text" placeholder="Valor"
                  aria-label="default input example" onChange={(event) => setValor(event.target.value)} />
              <input className="form-control" type="text" placeholder="CPF Vendedor"
                  aria-label="default input example" onChange={(event) => setCpfVendedor(event.target.value)} />
          </div><div className={"d-flex justify-content-center"}>
              <button on onClick={handleAdicionar}>Adicionar</button>
          </div></>
  );
};

export default Adicionar;