import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";

// Carrega as variáveis de ambiente do arquivo .env.
dotenv.config();

// Cria uma instância do aplicativo Express.
const app = express();

// Aplica o middleware CORS para permitir solicitações de diferentes origens.
app.use(cors());

// Habilita o middleware para análise de corpos de solicitação no formato JSON.
app.use(express.json());

// Aplica as rotas definidas em outro arquivo ao aplicativo Express.
app.use(routes);

// Exporta a instância do aplicativo Express configurada.
export default app;
