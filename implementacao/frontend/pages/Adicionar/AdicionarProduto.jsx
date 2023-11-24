import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from "../../components/Nav/Nav.jsx";

// Componente funcional AdicionarProduto
const AdicionarProduto = () => {
  // Estados para armazenar os dados do novo produto
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
// Estado local para armazenar mensagens de erro
  const [errorMessage, setErrorMessage] = useState("");
  // Hook useNavigate para navegação programática
  const navigate = useNavigate();

  // Função para lidar com a adição de um novo produto
  const handleAdicionar = async () => {
    try {
      // Envia uma solicitação POST para adicionar o produto
      const response = await axios.post("http://localhost:3000/produtos", {
        nome: nome,
        quantidade: quantidade,
        valor: valor,
      });

      // Verifica a resposta do servidor
      if (response.data.message === "Cadastro Realizado com Sucesso") {
        console.log("Produto adicionado com sucesso!");
        // Navega para a página de produtos após a adição bem-sucedida
        navigate('/produtos');
      }else {
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
          <h2 style={{fontWeight: "bold"}}>Adicionar Produto</h2>
        </div>
      </Nav>
      {/* Exibe mensagem de erro, se houver */}
      {errorMessage && (
        <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
          {errorMessage}
        </div>
      )}
      {/* Formulário de adição de produto */}
      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontWeight: "bold" }}> Formulário </h4>
      </div>
      <div className={"d-flex flex-column p-5 gap-4"}>
        {/* Entradas de texto para nome, quantidade e valor do produto */}
        <input className="form-control" type="text" placeholder="Nome" aria-label="default input example" onChange={(event) => setNome(event.target.value)} />
        <input className="form-control" type="text" placeholder="Quantidade" aria-label="default input example" onChange={(event) => setQuantidade(event.target.value)} />
        <input className="form-control" type="text" placeholder="Valor" aria-label="default input example" onChange={(event) => setValor(event.target.value)} />
      </div>
      {/* Botão para adicionar o produto */}
      <div className={"d-flex justify-content-center"}>
        <button onClick={handleAdicionar}>Adicionar</button>
      </div>
    </>
  );
};

// Exporta o componente AdicionarProduto
export default AdicionarProduto;