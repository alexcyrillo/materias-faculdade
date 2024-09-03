import Nav from "../../components/Nav/Nav.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 
import "./EditarProduto.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Cabeçalhos da tabela a serem exibidos
const dadosCabecalho = ["Nome", "Quantidade", "Valor"];

// Componente funcional Editar
const Editar = () => {
  // Estados para armazenar os dados do produto, os novos valores e a função de navegação
  const [dadosTabela, setProdutos] = useState([]);
  const [novoNome, setNovoNome] = useState("");
  const [novaQuantidade, setNovaQuantidade] = useState("");
  const [novoValor, setNovoValor] = useState("");
  // Estado local para armazenar mensagens de erro
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook para navegação programática

  // Obtém o parâmetro da URL usando o hook useParams do React Router
  const { id } = useParams();

  // Efeito colateral para buscar os dados do produto ao montar o componente
  useEffect(() => {
    fetchData();
  }, []); 

  // Função para lidar com a edição do produto
  const handleEditar = async () => {
    try {
      // Faz uma requisição PUT para atualizar o produto no servidor
      const response = await axios.put(`http://localhost:3000/produtos/${id}`, {
        nome: novoNome,
        valor: novoValor,
        quantidade: novaQuantidade,
      });

      // Verifica a resposta do servidor e atualiza o estado e a navegação
      if (response.data.message !== "Produto Editado com Sucesso") {
        // Exibe mensagem de erro específica
        setErrorMessage("Erro ao editar produto. Tente novamente.");
      } else {
        console.log("Produto editado com sucesso!");
        navigate('/produtos');
      }
    } catch (error) {
        // Exibe mensagem de erro específica
        setErrorMessage("Erro ao editar produto. Tente novamente.");
    }
  };

  // Função para buscar os dados do produto no servidor
  const fetchData = async () => {
    try {
      // Faz uma solicitação GET para obter os dados do produto
      const response = await axios.get(`http://localhost:3000/produtos/${id}`);

      // Atualiza o estado com os dados recebidos
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  // Componente renderiza a interface do usuário
  return (
    <>
      {/* Componente de navegação */}
      <Nav>
        <div style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
          className="container-fluid navbar-brand mb-0 h1">
          {/* Título da página de Edição de Produto */}
          <h2 style={{ fontWeight: "bold" }}>Editar Produto</h2>
        </div>
      </Nav>
      {/* Exibe mensagem de erro, se houver */}
      {errorMessage && (
        <div class="alert alert-danger" role="alert" style={{textAlign: 'center'}}>
          {errorMessage}
        </div>
      )}

      {/* Tabela de exibição dos dados do produto */}
      <table className="table">
        <thead>
          {/* Cabeçalhos da tabela */}
          <tr>
            {dadosCabecalho.map(dado => (
              <th scope="col" key={dado}> {dado} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Linhas da tabela com os dados do produto */}
          {dadosTabela.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulário para inserir os novos valores do produto */}
      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontWeight: "bold" }}>Formulário</h4>
      </div>
      <div className={"d-flex flex-column p-5 gap-4"}>
        {/* Campos de entrada para os novos valores do produto */}
        <input className="form-control" type="text" placeholder="Novo nome"
          aria-label="default input example" onChange={(event) => setNovoNome(event.target.value)} />
        <input className="form-control" type="text" placeholder="Nova quantidade"
          aria-label="default input example" onChange={(event) => setNovaQuantidade(event.target.value)} />
        <input className="form-control" type="text" placeholder="Novo valor"
          aria-label="default input example" onChange={(event) => setNovoValor(event.target.value)} />
      </div>

      {/* Botão para executar a edição do produto */}
      <div className={"d-flex justify-content-center"}>
        <button onClick={handleEditar}>
          Editar
        </button>
      </div>
    </>
  );
};

// Exporta o componente Editar para ser utilizado em outros lugares
export default Editar;