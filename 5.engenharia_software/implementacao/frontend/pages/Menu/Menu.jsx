import "./Menu.css";
import Botao from "../../components/Botao/Botao.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import { Link } from "react-router-dom";

// Componente funcional Menu
const Menu = () => (
    <>
        {/* Componente de navegação com o título da aplicação */}
        <Nav>
            <div style={{ textAlign: "center", color: "white" }} className="container-fluid navbar-brand mb-0 h1">
                <h2>
                    {/* Título da aplicação com partes em negrito */}
                    <span style={{ fontWeight: "bold" }}>Class</span>
                    <span style={{ fontWeight: "bolder" }}>Act </span>
                    Celulares
                </h2>
            </div>
        </Nav>

        {/* Conteúdo principal do Menu */}
        <div className={"principal container d-flex justify-content-around align-items-center gap-5"}>
            {/* Botão para acessar a página da equipe */}
            <Botao imgSrc={'/assets/menu-img-equipe.png'} texto={"Equipe"} />

            {/* Botão para acessar a página de clientes */}
            <Botao imgSrc={'/assets/menu-img-clientes.png'} texto={"Clientes"} />

            {/* Botão com um link para acessar a página de produtos */}
            <Link to={"/produtos"}>
                <Botao imgSrc={'/assets/menu-img-produtos.png'} texto={"Produtos"} />
            </Link>

            {/* Botão com um link para acessar a página de vendas */}
            <Link to={"/vendas"}>
                <Botao imgSrc={'/assets/menu-img-vendas.png'} texto={"Vendas"} />
            </Link>
        </div>
    </>
);

// Exporta o componente Menu para ser utilizado em outros lugares
export default Menu;
