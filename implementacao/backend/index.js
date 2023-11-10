import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import dbConnection from "./src/database/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// conexao servidor do banco de dados
dbConnection.connect((err) => {
	if (err) {
		console.log("Erro ao Conectar ao Banco de Dados\n" + err);
	} else {
		console.log("Servidor de Banco de Dados Conectado");

		// inicia servidor em PORT
		app.listen(port, () => {
			console.log(`Servidor rodando no link http://localhost:${port}`);
		});
	}
});
