import React, { useState } from 'react';
import Nav from "../../components/Nav/Nav.jsx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./AdicionarVenda.css"

// Componente funcional AdicionarVenda
const AdicionarVenda = () => {
  // Estados para armazenar os dados da nova venda e a mensagem de erro
  const [numNota, setNumNota] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [codProduto, setCodProduto] = useState("");
  const [dataVenda, setDataVenda] = useState("");
  const [valor, setValor] = useState("");
  const [cpfVendedor, setCpfVendedor] = useState("");
  // Estado local para armazenar mensagens de erro
  const [errorMessage, setErrorMessage] = useState("");

  // Hook useNavigate para navegação programática
  const navigate = useNavigate();

  // Função para lidar com a adição de uma nova venda
  const handleAdicionar = async () => {
    try {
      // Envia uma solicitação POST para adicionar a venda
      const response = await axios.post("http://localhost:3000/vendas", {
        numero_nota: numNota,
        cpf_cliente: cpfCliente,
        cod_produto: codProduto,
        data_venda: dataVenda,
        valor: valor,
        cpf_vendedor: cpfVendedor,
      });

      // Verifica a resposta do servidor
      if (response.data.message === "Cadastro Realizado com Sucesso") {
        // Navega para a página de lista de vendas após a adição bem-sucedida
        navigate('/vendas/lista');
      } else {
        // Exibe mensagem de erro específica
        setErrorMessage("Erro ao adicionar venda. Tente novamente.");
      }
    } catch (error) {
      // Exibe mensagem de erro específica
      setErrorMessage("Erro ao adicionar venda. Tente novamente.");
    }
  };

  // Renderização do componente
  return (
    <>
      {/* Componente de navegação */}
      <Nav>
        <div
          style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
          className="container-fluid navbar-brand mb-0 h1"
        >
          {/* Título da página */}
          <h2 style={{ fontWeight: "bold" }}>Adicionar Venda</h2>
        </div>
      </Nav>
      {/* Exibe mensagem de erro, se houver */}
      {errorMessage && (
        <div class="alert alert-danger" role="alert" style={{textAlign: 'center'}}>
          {errorMessage}
        </div>
      )}
      {/* Formulário de adição de venda */}
      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontWeight: "bold" }}> Formulário </h4>
      </div>
      <div className={"d-flex flex-column p-5 gap-4"}>
        {/* Entradas de texto para os dados da venda */}
        <input className="form-control" type="text" placeholder="Número Nota" aria-label="default input example" onChange={(event) => setNumNota(event.target.value)} />
        <input className="form-control" type="text" placeholder="CPF Cliente" aria-label="default input example" onChange={(event) => setCpfCliente(event.target.value)} />
        <input className="form-control" type="text" placeholder="Cod Produto" aria-label="default input example" onChange={(event) => setCodProduto(event.target.value)} />
        <input className="form-control" type="text" placeholder="Data Venda" aria-label="default input example" onChange={(event) => setDataVenda(event.target.value)} />
        <input className="form-control" type="text" placeholder="Valor" aria-label="default input example" onChange={(event) => setValor(event.target.value)} />
        <input className="form-control" type="text" placeholder="CPF Vendedor" aria-label="default input example" onChange={(event) => setCpfVendedor(event.target.value)} />
      </div>
      {/* Botão para adicionar a venda */}
      <div className={"d-flex justify-content-center"}>
        <button onClick={handleAdicionar}>Adicionar</button>
      </div>
    </>
  );
};

// Exporta o componente AdicionarVenda
export default AdicionarVenda;
