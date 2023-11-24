import Nav from "../../components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconExcluir from "../../assets/icon-lixeira.png";
import iconEditar from "../../assets/icon-edit.png";
import "./Produtos.css";
import axios from "axios";

// Array para definir os cabeçalhos da tabela
const dadosCabecalho = ["Nome", "Quantidade", "Valor"];

// Componente funcional Produtos
const Produtos = () => {
    // Estado para armazenar os dados da tabela de produtos
    const [dadosTabela, setProdutos] = useState([]);
    // Estado para armazenar o ID do produto a ser excluído
    const [idExcluir, setIdExcluir] = useState(-1);

    // Função para lidar com a exclusão de um produto
    const handleExcluir = async () => {
        try {
            // Faz uma requisição DELETE para excluir o produto com o ID correspondente
            const response = await axios.delete(`http://localhost:3000/produtos/${idExcluir}`);

            // Verifica se o produto foi encontrado e excluído com sucesso
            if (response.data.message === "Produto não encontrado") {
                console.error("Erro ao excluir produto");
                window.location.reload();
            } else {
                console.log("Produto excluído com sucesso!");
                window.location.reload();
            }
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
        }
    };

    // Função para buscar os dados dos produtos ao montar o componente
    const fetchData = async () => {
        try {
            // Faz uma requisição GET para obter os dados dos produtos
            const response = await axios.get('http://localhost:3000/produtos');

            // Atualiza o estado com os dados recebidos
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    // Efeito colateral para buscar os dados ao montar o componente
    useEffect(() => {
        fetchData().then(r => console.log(r));
    }, []);

    // Componente renderiza a interface do usuário
    return (
        <>
            <div>
                {/* Modal para confirmar a exclusão */}
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

            {/* Componente de navegação */}
            <Nav>
                <div style={{ textAlign: "center", color: "white" }} className="container-fluid navbar-brand mb-0 h1">
                    <h2 style={{ fontWeight: "bold" }}>Produtos</h2>
                </div>
            </Nav>

            {/* Conteúdo principal da página de Produtos */}
            <div className={"container mt-5"}>
                {/* Tabela de produtos */}
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
                        {/* Linhas da tabela com os dados dos produtos */}
                        {dadosTabela.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td>
                                    {/* Botão de exclusão que abre o modal de confirmação */}
                                    <button className={"botao"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => (setIdExcluir(item.id))}>
                                        <img src={iconExcluir} alt="Excluir" />
                                    </button>
                                    {/* Botão de edição que redireciona para a página de edição do produto */}
                                    <Link to={`/produtos/editar/${item.id}`}>
                                        <button className={"botao"} >
                                            <img src={iconEditar} alt="Editar" />
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
                {/* Link para adicionar um novo produto */}
                <Link to={`/produtos/adicionar`}>
                    <button>
                        Adicionar produto
                    </button>
                </Link>
            </div>
        </>
    );
}

// Exporta o componente Produtos para ser utilizado em outros lugares
export default Produtos;