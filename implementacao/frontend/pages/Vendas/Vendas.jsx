import "./Vendas.css"
import Nav from "../../components/Nav/Nav.jsx";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Vendas = () => {
    const [cpfCliente, setCpfCliente] = useState([]);
    const navigate = useNavigate();
    const handleBuscar = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/vendas/cliente/${cpfCliente}`);
        console.log(response.data);
      if (response.data.message === "Nenhuma Venda Cadastrada") {
        console.error("Nenhuma Venda Cadastrada");
        window.location.reload();
    }else {
      console.log("Busca concluída com sucesso!");
      navigate(`/vendas/historico/${cpfCliente}`);
    }
    } catch (error) {
      
      console.error("Erro ao buscar cliente:", error);
    }
};


    return (
        <>
        <div>
        {/* Modal */}
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Informe o CPF do Cliente</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                <input
                    type="text"
                    className="form-control"
                    id="cpfCliente"
                    value={cpfCliente}
                    onChange={(e) => setCpfCliente(e.target.value)}
                />
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleBuscar}>Buscar</button>
                </div>
            </div>
            </div>
          </div>
        </div>
        <Nav>
            <div style={{textAlign: "center", color: "white"}} className="container-fluid navbar-brand mb-0 h1">
            <h2 style={{fontWeight: "bold"}}>
                Vendas
            </h2>
            </div>
        </Nav>
        <div className="principal container d-flex justify-content-around align-items-center gap-5">
          <Link to={"/vendas/adicionar"}>
            <button className="style-Botao">Adicionar venda</button>
          </Link>
            <button className={"style-Botao"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>(setCpfCliente(cpfCliente))}>Histórico de compras</button>
          <Link to={"/vendas/lista"}>
            <button className="style-Botao">Lista vendas</button>
          </Link>
        </div>
        </>
    );
}

export default Vendas;