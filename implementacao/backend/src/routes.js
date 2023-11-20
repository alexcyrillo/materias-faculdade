import { Router } from "express";
import ProdutosController from "./app/controllers/ProdutoController.js";
import FuncionarioController from "./app/controllers/FuncionarioController.js";

const routes = Router();

routes.get("/produtos", ProdutosController.listarProdutos);
routes.get("/produtos/:id", ProdutosController.listarProdutoPorId);
routes.post("/produtos", ProdutosController.cadastrarProduto);
routes.put("/produtos/:id", ProdutosController.editarProduto);
routes.delete("/produtos/:id", ProdutosController.deletarProduto);

routes.get("/funcionario", FuncionarioController.listarFuncionarios);
routes.get("/funcionario/:id", FuncionarioController.listarFuncionarioPorId);
routes.post("/funcionario", FuncionarioController.cadastrarFuncionario);
routes.put("/funcionario/:id", FuncionarioController.editarFuncionario);
routes.delete("/funcionario/:id", FuncionarioController.deletarFuncionario);

export default routes;
