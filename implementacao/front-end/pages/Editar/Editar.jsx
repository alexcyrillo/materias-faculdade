import Nav from "../../components/Nav/Nav.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; // Importe useEffect
import "./Editar.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const dadosCabecalho = ["Nome", "Quantidade", "Valor"];

const Editar = () => {
  const [dadosTabela, setProdutos] = useState([]);
  const [novoNome, setNovoNome] = useState("");
  const [novaQuantidade, setNovaQuantidade] = useState("");
  const [novoValor, setNovoValor] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []); 

  const handleEditar = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/produtos/${id}`, {
        nome: novoNome,
        valor: novoValor,
        quantidade: novaQuantidade,
      });

      console.log("Resposta do servidor:", response);

      if (response.data === "Produto não encontrado") {
        console.error("Erro ao editar produto");
        navigate('/produtos');
      } else {
        console.log("Produto editado com sucesso!");
        navigate('/produtos');
      }
    } catch (error) {
      console.error("Erro ao editar produto:", error);
    }
  };

  const fetchData = async () => {
    try {
      // Fazendo a solicitação GET para localhost:3000/produtos
      const response = await axios.get(`http://localhost:3000/produtos/${id}`);

      // Atualizando o estado com os dados recebidos
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <>
      <Nav>
        <div style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
          className="container-fluid navbar-brand mb-0 h1">
          <h2 style={{ fontWeight: "bold" }}>Editar Produto</h2>
        </div>
      </Nav>
      <table className="table">
                    <thead>
                    <tr>
                        {dadosCabecalho.map(dado => (
                            <th scope="col" key={dado}> {dado} </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>

                    {dadosTabela.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.valor}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>

      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontWeight: "bold" }}>Formulário</h4>
      </div>
      <div className={"d-flex flex-column p-5 gap-4"}>
        <input className="form-control" type="text" placeholder="Novo nome"
          aria-label="default input example" onChange={(event) => setNovoNome(event.target.value)} />
        <input className="form-control" type="text" placeholder="Nova quantidade"
          aria-label="default input example" onChange={(event) => setNovaQuantidade(event.target.value)} />
        <input className="form-control" type="text" placeholder="Novo valor"
          aria-label="default input example" onChange={(event) => setNovoValor(event.target.value)} />
      </div>

      <div className={"d-flex justify-content-center"}>
        <button onClick={handleEditar}>
          Editar
        </button>
      </div>
    </>
  );
};

export default Editar;
