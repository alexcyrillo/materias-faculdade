import Nav from "../../components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import iconExcluir from "../../assets/icon-lixeira.png";
import "./ListarVendas.css";
import axios from "axios";

// Array para definir os cabeçalhos da tabela
const dadosCabecalho = ["Cpf cliente", "Cpf vendedor", "Cod produto", "Data", "Valor"];

const ListarVendas = () => {
    // Estado para armazenar os dados da tabela de vendas
    const [dadosTabela, setListarVendas] = useState([]);
    // Estado para armazenar o ID da venda a ser excluída
    const [idExcluir, setIdExcluir] = useState(-1);
    // Estado local para armazenar mensagens de erro
    const [errorMessage, setErrorMessage] = useState('');
    
    // Função para lidar com a exclusão de uma venda
    const handleExcluir = async () => {
        try {
            // Faz uma requisição DELETE para excluir a venda com o ID correspondente
            const response = await axios.delete(`http://localhost:3000/vendas/${idExcluir}`);

            window.location.reload();
        } catch (error) {
            setErrorMessage('Erro ao excluir venda!');
        }
    };

    // Função para buscar os dados das vendas ao montar o componente
    const fetchData = async () => {
        try {
            // Faz uma requisição GET para obter os dados das vendas
            const response = await axios.get('http://localhost:3000/vendas/');

            // Atualiza o estado com os dados recebidos
            setListarVendas(response.data);
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
                    <h2 style={{ fontWeight: "bold" }}>Lista de vendas</h2>
                </div>
            </Nav>

            {/* Tabela de vendas */}
            <div className={"container mt-5"}>
                <table className="table">
                    <thead>
                        {/* Cabeçalhos da tabela */}
                        <tr>
                            {dadosCabecalho.map(dado => (
                                <th key={dado}>{dado}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Linhas da tabela com os dados das vendas */}
                        {dadosTabela.map((item) => (
                            <tr key={item.id}>
                                <td>{item.cpf_cliente}</td>
                                <td>{item.cpf_vendedor}</td>
                                <td>{item.cod_produto}</td>
                                <td>{item.data_venda}</td>
                                <td>{item.valor}</td>
                                <td>
                                    {/* Botão de exclusão que abre o modal de confirmação */}
                                    <button className={"botao"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => (setIdExcluir(item.id))}>
                                        <img src={iconExcluir} alt="Excluir" />
                                    </button>
                                </td>
                                {/* Exibe a mensagem de erro, se houver */}
                                {errorMessage && (
                                  <div class="alert alert-danger" role="alert" style={{textAlign: 'center'}}>
                                    {errorMessage}
                                  </div>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
            </div>
        </>
    );
}

export default ListarVendas;
