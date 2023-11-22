import { consulta } from "../database/index.js";

class VendasRepository {
	async vendedorVenda(id) {
		let sql = "SELECT qt_vendas FROM funcionarios WHERE cpf=?";
		const qtVendas = (await consulta(sql, [id]))[0];
		qtVendas.qt_vendas++;
		console.log(qtVendas);
		sql = "UPDATE funcionarios SET ? WHERE cpf=?";
		consulta(sql, [qtVendas, id]);
	}

	async clienteCompra(id) {
		let sql = "SELECT qt_compras FROM clientes WHERE cpf=?";
		const qtVendas = (await consulta(sql, [id]))[0];
		qtVendas.qt_compras++;
		console.log(qtVendas);
		sql = "UPDATE clientes SET ? WHERE cpf=?";
		consulta(sql, [qtVendas, id]);
	}

	async reduzirEstoque(id) {
		let sql = "SELECT quantidade FROM produtos WHERE id=?";
		const qtVendas = (await consulta(sql, [id]))[0];
		qtVendas.quantidade--;
		console.log(qtVendas);
		sql = "UPDATE produtos SET ? WHERE id=?";
		consulta(sql, [qtVendas, id]);
	}

	async listarComprasCliente(id) {
		let sql = "SELECT * FROM vendas WHERE cpf_cliente=?";
		return await consulta(sql, [id]);
	}
}

export default new VendasRepository();
