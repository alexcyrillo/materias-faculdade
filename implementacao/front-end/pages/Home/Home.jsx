//import React from 'react';
import "./Home.css"
import celular from "../../assets/imagem-homepage.svg"
import {Link} from "react-router-dom";

const mudarDeTela = () => {

}

const Home = () => (
    <>

        <div className={"bg position-absolute top-50 start-50 translate-middle"}>
            <div className="h-100 container row">
                <div className="blue-bg  d-flex flex-column align-items-center justify-content-center col-4">
                    <img alt={"imagem ilustrativa celular"} src={celular}/>
                    <div style={{textAlign: "center", fontSize: 20}}>
                        Class<span style={{fontWeight: "bold"}}>Act</span>
                        <div>Celulares</div>
                    </div>
                    <div style={{textAlign: "center", fontSize: 10, color: "white"}}>Desbloqueando o Futuro, Um
                        Smartphone de Cada Vez!
                    </div>
                </div>
                <div className="col-8 p-5 ">
                    <div className={"mt-5"}>
                        <div style={{textAlign: "center"}}>
                            <h1 style={{fontWeight: "bold"}}> Bem-vindo </h1>
                            Acesse sua conta agora mesmo!
                        </div>
                        <div className={"d-flex flex-column p-5 gap-4"}>

                            <input className="form-control" type="text" placeholder="E-mail"
                                   aria-label="default input example"/>
                            <input className="form-control" type="password" placeholder="Senha"
                                   aria-label="default input example"/>
                        </div>
                        <div className={"d-flex justify-content-center"}>
                            <Link to="/menu">
                                <button onClick={()=>{}} className={"botao-entrar"}>
                                    Entrar
                                </button>
                            </Link>

                        </div>
                        <br/>
                        <div className={"d-flex justify-content-center"}>
                            <a href={"https://www.google.com"} style={{textAlign: "center"}}>
                                Esqueceu sua senha?
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </>
);

export default Home;

