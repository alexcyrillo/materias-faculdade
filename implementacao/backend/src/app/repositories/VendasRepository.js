import { consulta } from "../database/index.js";

// Define a classe VendasRepository, responsável por interagir com o banco de dados para operações relacionadas a vendas.
class VendasRepository {
	// Método para registrar uma venda feita por um vendedor, atualizando a quantidade de vendas no banco de dados.
	async vendedorVenda(id) {
		// Consulta a quantidade de vendas do vendedor no banco de dados.
		let sql = "SELECT qt_vendas FROM funcionarios WHERE cpf=?";
		let qtVendas = await consulta(sql, [id]);

		// Incrementa a quantidade de vendas do vendedor.

		qtVendas.consulta[0].qt_vendas = qtVendas.consulta[0].qt_vendas + 1;

		qtVendas = qtVendas.consulta[0].qt_vendas;

		// Atualiza a quantidade de vendas no banco de dados.
		sql = "UPDATE funcionarios SET qt_vendas=? WHERE cpf=?";
		consulta(sql, [qtVendas, id]);
	}

	// Método para registrar uma compra feita por um cliente, atualizando a quantidade de compras no banco de dados.
	async clienteCompra(id) {
		// Consulta a quantidade de compras do cliente no banco de dados.
		let sql = "SELECT qt_compras FROM clientes WHERE cpf=?";
		let qtCompras = await consulta(sql, [id]);
		// Incrementa a quantidade de compras do cliente.
		qtCompras.consulta[0].qt_compras = qtCompras.consulta[0].qt_compras + 1;

		qtCompras = qtCompras.consulta[0].qt_compras;

		// Atualiza a quantidade de compras no banco de dados.
		sql = "UPDATE clientes SET qt_compras=? WHERE cpf=?";
		consulta(sql, [qtCompras, id]);
	}

	// Método para reduzir o estoque de um produto após uma venda.
	async reduzirEstoque(id) {
		// Consulta a quantidade em estoque do produto no banco de dados.
		let sql = "SELECT quantidade FROM produtos WHERE id=?";
		let quantidadeProduto = await consulta(sql, [id]);

		// Reduz a quantidade em estoque do produto.

		quantidadeProduto.consulta[0].quantidade =
			quantidadeProduto.consulta[0].quantidade - 1;

		quantidadeProduto = quantidadeProduto.consulta[0].quantidade;

		// Atualiza a quantidade em estoque no banco de dados.
		sql = "UPDATE produtos SET quantidade=? WHERE id=?";
		consulta(sql, [quantidadeProduto, id]);
	}

	// Método para listar as compras de um cliente específico.
	async listarComprasCliente(id) {
		// Consulta todas as vendas associadas ao cliente no banco de dados.
		let sql = "SELECT * FROM vendas WHERE cpf_cliente=?";
		return await consulta(sql, [id]);
	}
}

// Exporta uma instância da classe VendasRepository para ser utilizada em outras partes do aplicativo.
export default new VendasRepository();
