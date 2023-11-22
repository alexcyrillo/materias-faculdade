import Nav from "../../components/Nav/Nav.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import iconExcluir from "../../assets/icon-lixeira.png"
import iconEditar from "../../assets/icon-edit.png"
import "./Produtos.css"
import axios from "axios";

const dadosCabecalho = ["Nome", "Quantidade", "Valor"];

const Produtos = () => {

    const [dadosTabela, setProdutos] = useState([]);
    const [idExcluir, setIdExcluir] = useState(-1);

    const handleExcluir = async () => {
      try {
        const response = await axios.delete(`http://localhost:3000/produtos/${idExcluir}`);
     if (response.data === "Produto não encontrado") {
      console.error("Erro ao excluir produto");
      window.location.reload();
    }else {
      console.log("Produto excluído com sucesso!");
      window.location.reload();
    }
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };
    const fetchData = async () => {
        try {
            // Fazendo a solicitação GET para localhost:3000/produtos
            const response = await axios.get('http://localhost:3000/produtos');

            // Atualizando o estado com os dados recebidos
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        fetchData().then(r => console.log(r));
    }, [])

    return (
        <>
            <div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Você deseja prosseguir com a exclusão?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                        <button type="button" className="btn btn-primary" onClick={handleExcluir}>Sim</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Nav>
                <div style={{ textAlign: "center", color: "white"}}
                     className="container-fluid navbar-brand mb-0 h1">
                    <h2 style={{fontWeight: "bold"}}>Produtos</h2> 
                </div>
            </Nav>

            <div className={"container mt-5"}>
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
                            <td>
                                <button className={"botao-excluir"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>(setIdExcluir(item.id))}>
                                    <img src={iconExcluir} alt="Excluir" />
                                </button>
                                <Link to={`/produtos/editar/${item.id}`}>
                                    <button className={"botao-excluir"} >
                                        <img src={iconEditar} alt="Editar" />
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
                <hr/>
                <Link to={`/produtos/adicionar`}>
                    <button>
                     Adicionar produto
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Produtos;