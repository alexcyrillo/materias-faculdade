import mysql from "mysql";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env.
dotenv.config();

// Cria uma conexão com o banco de dados MySQL usando as variáveis de ambiente fornecidas.
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

// Estabelece a conexão com o banco de dados.
db.connect((erro) => {
	if (erro) {
		// Se houver um erro na conexão, exibe uma mensagem de erro.
		console.log("Erro ao Conectar ao Banco de Dados\n" + erro);
	} else {
		// Se a conexão for bem-sucedida, exibe uma mensagem de sucesso.
		console.log("Conexão com o Banco de Dados Realizada com Sucesso");
	}
});

// Função para realizar consultas no banco de dados usando promessas para operações assíncronas.
// export const consulta = (sql, valores) => {
// 	return new Promise((resolve, reject) => {
// 		// Executa a consulta no banco de dados.
// 		db.query(sql, valores, (erro, resultado) => {
// 			if (erro) return reject(erro);

// 			// Converte o resultado para um formato JSON.
// 			const resposta = JSON.parse(JSON.stringify(resultado));
// 			return resolve(resposta);
// 		});
// 	});
// };

export const consulta = (sql, valores) => {
	return new Promise((resolve, reject) => {
		// Executa a consulta no banco de dados.
		db.query(sql, valores, (erro, resultado) => {
			if (erro)
				return reject({ message: "Erro no banco de dados", erro: erro });

			// Converte o resultado para um formato JSON.
			const resposta = {
				message: "Consulta realizada",
				consulta: JSON.parse(JSON.stringify(resultado)),
			};
			return resolve(resposta);
		});
	});
};

// Exporta a instância de conexão com o banco de dados.
export default db;
