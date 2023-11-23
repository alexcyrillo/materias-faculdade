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

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path={"/produtos"} element={<Produtos />} />
                <Route path={"/produtos/editar/:id"} element={<Editar />} />
                <Route path={"/produtos/adicionar"} element={<AdicionarProduto />} />
                <Route path={"/vendas"} element={<Vendas/>} />
                <Route path={"/vendas/adicionar"} element={<AdicionarVenda/>} />
                <Route path={"/vendas/lista"} element={<ListarVendas/>} />
                <Route path={"/vendas/historico/:id"} element={<HistoricoVendasPorClinete/>} />
            </Routes>
        </Router>
    );
};

export default App;
