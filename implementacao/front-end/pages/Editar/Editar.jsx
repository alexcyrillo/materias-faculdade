import Nav from "../../components/Nav/Nav.jsx";
import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import "./Editar.css"

const Editar = () => {
    const [novoNome, setNovoNome] = useState("");
    const [novaQuantidade, setNovaQuantidade] = useState("");
    const [novoValor, setNovoValor] = useState("");


    const {id} = useParams();
    return (
        <>
            <Nav>
                <div style={{fontWeight: "bold", textAlign: "center", color: "white"}}
                     className="container-fluid navbar-brand mb-0 h1">
                    Produtos
                </div>
            </Nav>
            {id}
            {/*<table className="table">
                <thead>
                <tr>
                    {dadosCabecalho.map(dado => (
                        <th scope="col" key={dado}> {dado} </th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {dadosTabela.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.valor}</td>
                        <Link to={`/produtos/excluir/${item.id}`}>
                            <button className={"botao-excluir"}>
                                <img src={iconExcluir}/>
                            </button>
                        </Link>
                        <Link to={`/produtos/editar/${item.id}`}>
                            <button className={"botao-excluir"}>
                                <img src={iconEditar}/>
                            </button>
                        </Link>
                    </tr>
                ))}
                </tbody>
            </table>*/}
            <div style={{textAlign: "center"}}>
                <h3 style={{fontWeight: "bold"}}> Bem-vindo </h3>
                Acesse sua conta agora mesmo!
            </div>
            <div className={"d-flex flex-column p-5 gap-4"}>

                {novoNome + " " + novaQuantidade + " " + novoValor}
                <input className="form-control" type="text" placeholder="Novo nome"
                       aria-label="default input example" onChange={(event) => setNovoNome(event.target.value)}/>
                <input className="form-control" type="text" placeholder="Nova quantidade"
                       aria-label="default input example" onChange={(event) => setNovaQuantidade(event.target.value)}/>
                <input className="form-control" type="text" placeholder="Novo valor"
                       aria-label="default input example" onChange={(event) => setNovoValor(event.target.value)}/>
            </div>

            <div className={"d-flex justify-content-center"}>
                <button onClick={() => {
                }}>
                    Editar
                </button>
            </div>
        </>

    );
};

export default Editar;