import React from 'react';
import "./Home.css";
import celular from "../../assets/imagem-homepage.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'; 
import axios from 'axios';  

const Home = () => {
    // Define dois estados locais, cpf e senha, e duas funções para atualizá-los
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    // Estado local para armazenar mensagens de erro
    const [errorMessage, setErrorMessage] = useState('');
    
    // Obtém a função de navegação do React Router
    const navigate = useNavigate();
    
    // Define a função handleLogin para lidar com a tentativa de login
    const handleLogin = async () => {
        try {
            // Faz uma requisição POST para http://localhost:3000/login com os dados de cpf e senha
            const response = await axios.post('http://localhost:3000/login', {
                cpf: cpf,
                senha: senha,
            });

            // Se a autenticação for bem-sucedida, navega para a rota "/menu"
            if (response.data.auth === true) {
                localStorage.setItem('cargo', response.data.cargo);
                navigate("/menu");
            } else {
                // Se a autenticação falhar, exibe uma mensagem de erro
                setErrorMessage('CPF ou senha inválidos');
            }
        } catch (error) {
            // Em caso de erro durante a requisição, exibe uma mensagem de erro
            setErrorMessage('CPF ou senha inválidos');
        }
    };

    // Componente Home renderiza a interface do usuário
    return (
        <>
            {/* Estrutura do HTML para renderizar a interface */}
            <div className={"bg position-absolute top-50 start-50 translate-middle"}>
                <div className="h-100 container row">
                    <div className="blue-bg  d-flex flex-column align-items-center justify-content-center col-4">
                        <img alt={"imagem ilustrativa celular"} src={celular}/>
                        <div style={{textAlign: "center", fontSize: 20}}>
                            Class<span style={{fontWeight: "bold"}}>Act</span>
                            <div>Celulares</div>
                        </div>
                        <div style={{textAlign: "center", fontSize: 12, color: "white"}}>
                            Desbloqueando o Futuro, Um Smartphone de Cada Vez!
                        </div>
                    </div>
                    <div className="col-8 p-5 ">
                        <div className={"mt-5"}>
                            <div style={{textAlign: "center"}}>
                                <h1 style={{fontWeight: "bold"}}> Bem-vindo </h1>
                                Acesse sua conta agora mesmo!
                            </div>
                            <div className={"d-flex flex-column p-5 gap-4"}>
                                {/* Campos de input para cpf e senha */}
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Cpf"
                                    aria-label="default input example"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Senha"
                                    aria-label="default input example"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                            {/* Exibe a mensagem de erro, se houver */}
                                {errorMessage && (
                                  <div class="alert alert-danger" role="alert" style={{textAlign: 'center'}}>
                                    {errorMessage}
                                  </div>
                                )}
                            <div className={"d-flex justify-content-center"}>
                                {/* Botão para acionar a função de login ao ser clicado */}
                                <button onClick={handleLogin} className={"botao-entrar"}>
                                    Entrar
                                </button>
                            </div>
                            <br/>
                            <div className={"d-flex justify-content-center"}>
                                {/* Link para recuperação de senha */}
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
}

// Exporta o componente Home para ser utilizado em outros lugares
export default Home;