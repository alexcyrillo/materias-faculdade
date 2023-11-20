import { consulta } from "../database/index.js";

class Repository {
	constructor(tabela) {
		this.tabela = tabela;
	}

	findAll() {
		const sql = "SELECT * FROM ?";
		return consulta(sql, this.tabela);
	}

	findById(id) {
		const sql = "SELECT * FROM ? WHERE id=?";
		return consulta(sql, [this.tabela, id]);
	}

	create(instancia) {
		const sql = "INSERT INTO ? SET ?";
		return consulta(sql, [this.tabela, instancia]);
	}

	update(instancia, id) {
		const sql = "UPDATE ? SET ? WHERE id=?";
		return consulta(sql, [this.tabela, instancia, id]);
	}

	delete(id) {
		const sql = "DELETE FROM ? WHERE id=?";
		consulta(sql, [this.tabela, id]);
	}
}
export default Repository;
