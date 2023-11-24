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
      if (response.status === 200) {
        console.log("Produto adicionado com sucesso!");
        // Navega para a página de produtos após a adição bem-sucedida
        navigate('/produtos');
      } else {
        console.error("Erro ao adicionar produto");
        // Navega para a página de produtos em caso de erro
        navigate('/produtos');
      }
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
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