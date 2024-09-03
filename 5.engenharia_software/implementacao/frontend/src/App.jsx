import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Menu from "../pages/Menu/Menu.jsx";
import Produtos from "../pages/Produtos/Produtos.jsx";
import Editar from "../pages/Editar/EditarProduto.jsx";
import AdicionarProduto from '../pages/Adicionar/AdicionarProduto.jsx';
import Vendas from '../pages/Vendas/Vendas.jsx';
import AdicionarVenda from '../pages/Adicionar/AdicionarVenda.jsx';
import ListarVendas from '../pages/ListarVendas/ListarVendas.jsx';
import HistoricoVendasPorClinete from '../pages/Historico/HistoricoVendasPorCliente.jsx'

// Componente principal App
const App = () => {
    return (
        // Configuração do roteador usando BrowserRouter
        <Router>
            {/* Definição das rotas usando o componente Routes */}
            <Routes>
                {/* Rota para a página inicial */}
                <Route path="/" element={<Home />} />
                {/* Rota para a página de menu */}
                <Route path="/menu" element={<Menu />} />
                {/* Rota para a página de produtos */}
                <Route path={"/produtos"} element={<Produtos />} />
                {/* Rota para a página de edição de produtos */}
                <Route path={"/produtos/editar/:id"} element={<Editar />} />
                {/* Rota para a página de adição de produtos */}
                <Route path={"/produtos/adicionar"} element={<AdicionarProduto />} />
                {/* Rota para a página de vendas */}
                <Route path={"/vendas"} element={<Vendas />} />
                {/* Rota para a página de adição de vendas */}
                <Route path={"/vendas/adicionar"} element={<AdicionarVenda />} />
                {/* Rota para a página de listagem de vendas */}
                <Route path={"/vendas/lista"} element={<ListarVendas />} />
                {/* Rota para a página de histórico de vendas por cliente */}
                <Route path={"/vendas/historico/:id"} element={<HistoricoVendasPorClinete />} />
            </Routes>
        </Router>
    );
};

// Exporta o componente App para ser utilizado no ponto de entrada da aplicação
export default App;
