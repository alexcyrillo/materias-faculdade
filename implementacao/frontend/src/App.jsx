import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Menu from "../pages/Menu/Menu.jsx";
import Produtos from "../pages/Produtos/Produtos.jsx";
import Editar from "../pages/Editar/EditarProduto.jsx";
import Adicionar from '../pages/Adicionar/AdicionarProduto.jsx';
import Vendas from '../pages/Vendas/Vendas.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path={"/produtos"} element={<Produtos />} />
                <Route path={"/produtos/editar/:id"} element={<Editar />} />
                <Route path={"/produtos/adicionar"} element={<Adicionar />} />
                <Route path={"/vendas"} element={<Vendas/>} />
            </Routes>
        </Router>
    );
};

export default App;
