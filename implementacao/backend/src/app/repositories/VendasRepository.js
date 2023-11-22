import { consulta } from "../database/index.js";

class VendasRepository {
	/**
	 * Funcao para incrementar em 1 o valor de um atributo de uma tabela
	 * @param {string} tabela Nome da tabela
	 * @param {string} coluna Nome do atributo a ser alterado
	 * @param {string} nomeId Nome do utilizado para definir o id no banco de dados
	 * @param {*} id Id do atributo a ser incrementado
	 */
	async incrementar(tabela, coluna, nomeId, id) {
		let sql =
			"SELECT " + coluna + " FROM " + tabela + " WHERE " + nomeId + "=?";
		const ovo = JSON.parse(JSON.stringify((await consulta(sql, [id]))[0]));

		console.log(ovo, coluna, tabela, nomeId, id);

		sql = "UPDATE " + tabela + " SET " + coluna + "=? WHERE " + nomeId + "=?";
		consulta(sql, [ovo, id]);
	}

	/**
	 * Funcao para decrementar em 1 o valor de um atributo de uma tabela
	 * @param {string} tabela Nome da tabela
	 * @param {string} coluna Nome do atributo a ser alterado
	 * @param {string} nomeId Nome do utilizado para definir o id no banco de dados
	 * @param {*} id Id do atributo a ser incrementado
	 */
	async decrementar(tabela, coluna, nomeId, id) {
		let sql =
			"SELECT " + coluna + " FROM " + tabela + " WHERE " + nomeId + "=?";
		const qtVendas = (await consulta(sql, [id]))[0].coluna - 1;

		sql = "UPDATE " + tabela + " SET " + coluna + "=? WHERE " + nomeId + "=?";
		consulta(sql, [qtVendas, id]);
	}
}

export default new VendasRepository();
