import Nav from "../../components/Nav/Nav.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import iconExcluir from "../../assets/icon-lixeira.png"
import iconEditar from "../../assets/icon-edit.png"
import "./ListarVendas.css"
import axios from "axios";

const dadosCabecalho = ["Cpf cliente","Cpf vendedor" , "Cod produto", "Data" , "Valor"];

const ListarVendas = () => {

    const [dadosTabela, setListarVendas] = useState([]);
    const [idExcluir, setIdExcluir] = useState(-1);

    const handleExcluir = async () => {
      try {
        const response = await axios.delete(`http://localhost:3000/vendas/${idExcluir}`);
      if (response.data === "Venda não encontrada") {
        console.error("Erro ao excluir venda");
        window.location.reload();
    }else {
      console.log("Venda excluída com sucesso!");
      window.location.reload();
    }
    } catch (error) {
      console.error("Erro ao excluir venda:", error);
    }
  };
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/vendas/');

            // Atualizando o estado com os dados recebidos
            setListarVendas(response.data);
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
                    <h2 style={{fontWeight: "bold"}}>Lista de vendas</h2> 
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
                            <td>{item.cpf_cliente}</td>
                            <td>{item.cpf_vendedor}</td>
                            <td>{item.cod_produto} </td>
                            <td>{item.data_venda}</td>
                            <td>{item.valor}</td>
                            <td>
                                <button className={"botao"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>(setIdExcluir(item.id))}>
                                    <img src={iconExcluir} alt="Excluir" />
                                </button>
                                <Link to={`/vendas/lista/editar/${item.id}`}>
                                    <button className={"botao"} >
                                        <img src={iconEditar} alt="Editar" />
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
                <hr/>
            </div>
        </>
    );
}

export default ListarVendas;