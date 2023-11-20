import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Menu from "../pages/Menu/Menu.jsx";
import Produtos from "../pages/Produtos/Produtos.jsx";
import Editar from "../pages/Editar/Editar.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path={"/produtos"} element={<Produtos />} />
                <Route path={"/produtos/editar/:id"} element={<Editar />} />
            </Routes>
        </Router>
    );
};

export default App;
