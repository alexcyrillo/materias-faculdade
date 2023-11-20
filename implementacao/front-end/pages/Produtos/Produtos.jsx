import Nav from "../../components/Nav/Nav.jsx";
import dadosImportados from "../../dados.json"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import iconExcluir from "../../assets/icon-lixeira.png"
import iconEditar from "../../assets/icon-edit.png"
import "./Produtos.css"

const dadosCabecalho = ["Nome", "Quantidade", "Valor"];

//comentar isso
const dadosTabela = dadosImportados;


const Produtos = () => {
    /*const [dadosTabela, setProdutos] = useState([]);

    const fetchData = async () => {
        try {
            // Fazendo a solicitação GET para localhost:3000/produtos
            const response = await axios.get('http://localhost:3000/produtos');

            // Atualizando o estado com os dados recebidos
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        fetchData().then(r => console.log(r));
    }, [])*/

    return (
        <>
            <Nav>
                <div style={{fontWeight: "bold", textAlign: "center", color: "white"}}
                     className="container-fluid navbar-brand mb-0 h1">
                    Produtos
                </div>
            </Nav>

            <div className={"container mt-5"}>
                <table className="table">
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
                </table>
                <hr/>
                <button>
                    Adicionar produto
                </button>
            </div>
        </>
    );
}

export default Produtos;