import React from 'react';
import Nav from "../../components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import axios from 'axios';
import "./HistoricoVendasPorCliente.css";
import { useParams } from 'react-router-dom';

// Array para definir os cabeçalhos da tabela
const dadosCabecalho = ["Cpf vendedor", "Cod produto", "Data", "Valor"];

// Componente funcional HistoricoVendasPorCliente
const HistoricoVendasPorCliente = () => {
    // Estado para armazenar os dados da tabela de histórico de compras
    const [dadosTabela, setListarHistorico] = useState([]);
    // Obtém o parâmetro da URL usando o hook useParams do React Router
    const { id } = useParams();

    // Função para buscar os dados do histórico de compras ao montar o componente
    const fetchData = async () => {
        try {
            // Faz uma requisição GET para obter os dados do histórico de compras do cliente
            const response = await axios.get(`http://localhost:3000/vendas/cliente/${id}`);
            // Atualiza o estado com os dados recebidos
            setListarHistorico(response.data);
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
            {/* Componente de navegação */}
            <Nav>
                <div
                    style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
                    className="container-fluid navbar-brand mb-0 h1"
                >
                    {/* Título da página de Histórico de compras por cliente */}
                    <h2 style={{ fontWeight: "bold" }}>Histórico de compras</h2>
                </div>
            </Nav>

            {/* Conteúdo principal da página de Histórico de compras por cliente */}
            <div className={"container mt-5"}>
                {/* Tabela de histórico de compras */}
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
                        {/* Linhas da tabela com os dados do histórico de compras */}
                        {dadosTabela.map((item) => (
                            <tr key={item.id}>
                                <td>{item.cpf_vendedor}</td>
                                <td className="alinhar">{item.cod_produto} </td>
                                <td>{item.data_venda}</td>
                                <td>{item.valor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
            </div>
        </>
    );
};

// Exporta o componente HistoricoVendasPorCliente para ser utilizado em outros lugares
export default HistoricoVendasPorCliente;