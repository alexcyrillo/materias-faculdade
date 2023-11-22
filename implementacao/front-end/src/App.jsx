import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Menu from "../pages/Menu/Menu.jsx";
import Produtos from "../pages/Produtos/Produtos.jsx";
import Editar from "../pages/EditarProduto/Editar.jsx";
import Adicionar from '../pages/AdicionarProduto/Adicionar.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path={"/produtos"} element={<Produtos />} />
                <Route path={"/produtos/editar/:id"} element={<Editar />} />
                <Route path={"/produtos/adicionar"} element={<Adicionar />} />
            </Routes>
        </Router>
    );
};

export default App;
