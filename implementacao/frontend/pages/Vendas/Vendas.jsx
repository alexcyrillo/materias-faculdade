import "./Vendas.css"
import Nav from "../../components/Nav/Nav.jsx";
import {Link} from "react-router-dom";

const Vendas = () => (
    <>
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
          <Link to={"vendas/historico"}>
            <button className="style-Botao">Histórico de compras</button>
          </Link>
          <Link to={"vendas/lista"}>
            <button className="style-Botao">Lista vendas</button>
          </Link>
        </div>
    </>
);

export default Vendas;