import "./Menu.css"
import Botao from "../../components/Botao/Botao.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import {Link} from "react-router-dom";

const Menu = () => (
    <>
        <Nav>
            <div style={{textAlign: "center", color: "white"}} className="container-fluid navbar-brand mb-0 h1">
                <span style={{fontWeight: "bold"}}>Class</span>
                <span style={{fontWeight: "bolder"}}>Act </span>
                Celulares
            </div>
        </Nav>
        <div className={"principal container d-flex justify-content-around align-items-center gap-5"}>

            <Botao imgSrc={'/assets/menu-img-equipe.png'} texto={"Equipe"}/>
            <Botao imgSrc={'/assets/menu-img-clientes.png'} texto={"Clientes"}/>
            <Link to={"/produtos"}>
                <Botao imgSrc={'/assets/menu-img-produtos.png'} texto={"Produtos"}/>
            </Link>
            <Botao imgSrc={'/assets/menu-img-vendas.png'} texto={"Vendas"}/>
        </div>
    </>
);

export default Menu;