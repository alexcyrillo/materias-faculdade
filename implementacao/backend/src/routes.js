import { Router } from "express";
import ProdutosController from "./app/controllers/ProdutosController.js";
import FuncionariosController from "./app/controllers/FuncionariosController.js";
import ClientesController from "./app/controllers/ClientesController.js";
import VendasController from "./app/controllers/VendasController.js";
import LoginController from "./app/controllers/LoginController.js";
//import verifyJWT from "./app/middlewares/authentication.js";

const routes = Router();

routes.post("/login", LoginController.login);
// rotas referentes a tabela produtos
routes.get("/produtos", ProdutosController.listarProdutos);
routes.get("/produtos/:id", ProdutosController.listarProdutoPorId);
routes.post("/produtos", ProdutosController.cadastrarProduto);
routes.put("/produtos/:id", ProdutosController.editarProduto);
routes.delete("/produtos/:id", ProdutosController.deletarProduto);

// rotas refetentes a tabela funcionários
routes.get("/funcionarios", FuncionariosController.listarFuncionarios);
routes.get("/funcionarios/:id", FuncionariosController.listarFuncionarioPorId);
routes.post("/funcionarios", FuncionariosController.cadastrarFuncionario);
routes.put("/funcionarios/:id", FuncionariosController.editarFuncionario);
routes.delete("/funcionarios/:id", FuncionariosController.deletarFuncionario);

// rotas refetentes a tabela clientes
routes.get("/clientes", ClientesController.listarClientes);
routes.get("/clientes/:id", ClientesController.listarClientePorId);
routes.post("/clientes", ClientesController.cadastrarCliente);
routes.put("/clientes/:id", ClientesController.editarCliente);
routes.delete("/clientes/:id", ClientesController.deletarCliente);

// rotas refetentes a tabela vendas
routes.get("/vendas", VendasController.listarVendas);
routes.get("/vendas/:id", VendasController.listarVendaPorId);
routes.get("/vendas/cliente/:id", VendasController.listarVendaPorCliente);
routes.post("/vendas", VendasController.cadastrarVenda);
routes.put("/vendas/:id", VendasController.editarVenda);
routes.delete("/vendas/:id", VendasController.deletarVenda);

export default routes;
