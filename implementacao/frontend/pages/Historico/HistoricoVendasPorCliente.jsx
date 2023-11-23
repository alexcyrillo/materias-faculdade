import React from 'react';
import Nav from "../../components/Nav/Nav.jsx";
import {useEffect, useState} from "react";
import axios from 'axios';
import "./HistoricoVendasPorCliente.css"
import { useParams } from 'react-router-dom';


const dadosCabecalho = ["Cpf vendedor" , "Cod produto", "Data" , "Valor"];

const HistoricoVendasPorCliente = () => {
    const [dadosTabela, setListarHistorico] = useState([]);
    const {id} = useParams();
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/vendas/cliente/${id}`);
            setListarHistorico(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };
    useEffect(() => {
        fetchData().then(r => console.log(r));
    }, [])

    return (
      <><Nav>
          <div
              style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
              className="container-fluid navbar-brand mb-0 h1"
          >
              <h2 style={{fontWeight: "bold"}}>Histórico de compras</h2>
          </div>
        </Nav>
        <div className={"container mt-5"}>
                <table className="table">
                    <thead>
                    <tr>
                        {dadosCabecalho.map(dado => (
                             <th key={dado}>{dado}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>

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
                <hr/>
            </div>
      </>
    );
};

export default HistoricoVendasPorCliente;