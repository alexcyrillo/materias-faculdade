import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const { Pool } = pg;
const app = express();
const port = 3000;

// Create a PostgreSQL connection pool
const pool = new Pool({
	connectionString:
		"postgres://cnernkkv:h86EzUAJV4WCqcfOak4q6g7tsLr_Irpd@babar.db.elephantsql.com/cnernkkv",
});

// Test the database connection
pool.connect((err, client, done) => {
	if (err) {
		console.error("Erro ao Conectar ao Banco de Dados", err);
	} else {
		console.log("Conetado ao Banco de Dados");
	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
	console.log(`Servidor rodando no link http://localhost:${port}`);
});
