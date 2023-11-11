import { Router } from "express";
import ProdutosController from "./app/controllers/ProdutoController.js";

const routes = Router();

routes.get("/produtos", ProdutosController.listarProdutos);
routes.get("/produtos/:id", ProdutosController.listarProdutoPorId);
routes.post("/produtos", ProdutosController.cadastrarProduto);
routes.put("/produtos/:id", ProdutosController.editarProduto);
routes.delete("/produtos/:id", ProdutosController.deletarProduto);

export default routes;
