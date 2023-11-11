import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

db.connect((erro) => {
	if (erro) {
		console.log("Erro ao Conectar ao Bando de Dados\n" + erro);
	} else {
		console.log("Conexao com Banco de Dados Realizada com Sucesso");
	}
});

export const consulta = (sql, valores = "") => {
	return new Promise((resolve, reject) => {
		db.query(sql, valores, (erro, resultado) => {
			if (erro) return reject(erro);

			const resposta = JSON.parse(JSON.stringify(resultado));
			return resolve(resposta);
		});
	});
};

export default db;
