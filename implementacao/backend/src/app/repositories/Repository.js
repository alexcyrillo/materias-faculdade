import { consulta } from "../database/index.js";

class Repository {
	constructor(tabela, id) {
		this.tabela = tabela;
		this.id = id;
	}

	findAll() {
		const sql = "SELECT * FROM " + this.tabela;
		return consulta(sql);
	}

	findById(id) {
		const sql = "SELECT * FROM " + this.tabela + " WHERE " + this.id + "=?";
		return consulta(sql, [id]);
	}

	create(instancia) {
		const sql = "INSERT INTO " + this.tabela + " SET ?";
		return consulta(sql, [instancia]);
	}

	update(instancia, id) {
		const sql = "UPDATE " + this.tabela + " SET ? WHERE " + this.id + "=?";
		return consulta(sql, [instancia, id]);
	}

	delete(id) {
		const sql = "DELETE FROM " + this.tabela + " WHERE " + this.id + "=?";
		consulta(sql, [id]);
	}
}
export default Repository;
