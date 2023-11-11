import { consulta } from "../database/index.js";

class ProdutoRepository {
	findAll() {
		const sql = "SELECT * FROM produtos";
		return consulta(sql);
	}

	findById(id) {
		const sql = "SELECT * FROM produtos WHERE id=?";
		return consulta(sql, id);
	}

	create(produto) {
		const sql = "INSERT INTO produtos SET ?";
		return consulta(sql, produto);
	}

	update(produto, id) {
		const sql = "UPDATE produtos SET ? WHERE id=?";
		return consulta(sql, [produto, id]);
	}

	delete(id) {
		const sql = "DELETE FROM produtos WHERE id=?";
		consulta(sql, id);
	}
}
export default new ProdutoRepository();
