import app from "./index.js";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env.
dotenv.config();

// Define a porta na qual o servidor irá ouvir. Pega a porta definida no arquivo .env ou usa a porta 3000 por padrão.
const port = process.env.PORT || 3000;

// Inicia o servidor Express e o faz escutar na porta especificada.
app.listen(port, () => {
    console.log(`Servidor rodando no link http://localhost:${port}`);
});
