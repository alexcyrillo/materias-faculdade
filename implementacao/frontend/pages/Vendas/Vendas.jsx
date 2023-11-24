import "./Vendas.css";
import Nav from "../../components/Nav/Nav.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Componente funcional Vendas
const Vendas = () => {
    // Estado para armazenar o CPF do cliente ao buscar histórico de compras
    const [cpfCliente, setCpfCliente] = useState([]);
    // Hook do React Router para navegação
    const navigate = useNavigate();

    // Função para lidar com a busca do histórico de compras do cliente
    const handleBuscar = async () => {
        try {
            // Faz uma requisição GET para obter o histórico de compras do cliente
            const response = await axios.get(`http://localhost:3000/vendas/cliente/${cpfCliente}`);
            console.log(response.data);

            // Verifica se o histórico de compras foi encontrado
            if (response.data.message === "Nenhuma Venda Cadastrada") {
                console.error("Nenhuma Venda Cadastrada");
                window.location.reload();
            } else {
                console.log("Busca concluída com sucesso!");
                // Navega para a página de histórico de compras do cliente
                navigate(`/vendas/historico/${cpfCliente}`);
            }
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
        }
    };

    // Componente renderiza a interface do usuário
    return (
        <>
            <div>
                {/* Modal para inserir o CPF do cliente ao buscar histórico de compras */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Informe o CPF do Cliente</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/* Campo de input para inserir o CPF do cliente */}
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cpfCliente"
                                    value={cpfCliente}
                                    onChange={(e) => setCpfCliente(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                {/* Botão para iniciar a busca do histórico de compras */}
                                <button type="button" className="btn btn-primary" onClick={handleBuscar}>Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Componente de navegação */}
            <Nav>
                <div style={{ textAlign: "center", color: "white" }} className="container-fluid navbar-brand mb-0 h1">
                    {/* Título da página de Vendas */}
                    <h2 style={{ fontWeight: "bold" }}>
                        Vendas
                    </h2>
                </div>
            </Nav>

            {/* Conteúdo principal da página de Vendas */}
            <div className="principal container d-flex justify-content-around align-items-center gap-5">
                {/* Botão para adicionar uma nova venda */}
                <Link to={"/vendas/adicionar"}>
                    <button className="style-Botao">Adicionar venda</button>
                </Link>

                {/* Botão que abre o modal para buscar histórico de compras por CPF */}
                <button className={"style-Botao"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => (setCpfCliente(cpfCliente))}>
                    Histórico de compras
                </button>

                {/* Botão para listar todas as vendas */}
                <Link to={"/vendas/lista"}>
                    <button className="style-Botao">Lista vendas</button>
                </Link>
            </div>
        </>
    );
}

// Exporta o componente Vendas para ser utilizado em outros lugares
export default Vendas;
