import Repository from "../repositories/Repository.js";
import VendasRepository from "../repositories/VendasRepository.js";

const consulta = new Repository("vendas", "cpf");
class VendasController {
	static listarVendas = async (req, res) => {
		try {
			const resposta = await consulta.findAll();
			if (resposta) res.send(resposta);
			else res.json("Não há Vendas Cadastrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static listarVendaPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await consulta.findById(id);
			if (resposta) res.send(resposta);
			else res.json("Venda não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static listarVendaPorCliente = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await VendasRepository.listarComprasCliente(id);
			if (resposta[0]) res.send(resposta);
			else res.send({ message: "Nenhuma Venda Cadastrada" });
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static cadastrarVenda = async (req, res) => {
		try {
			const venda = req.body;
			const resposta = await consulta.create(venda);

			VendasRepository.vendedorVenda(venda.cpf_vendedor);
			VendasRepository.clienteCompra(venda.cpf_cliente);
			VendasRepository.reduzirEstoque(venda.cod_produto);

			res.send({ message: "Cadastro Realizado com Sucesso", resposta });
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static editarVenda = async (req, res) => {
		try {
			const id = req.params.id;
			const venda = req.body;
			const resposta = await consulta.update(venda, id);
			if (resposta)
				res.send({ message: "Venda Editada com Sucesso", resposta });
			else res.json("Venda não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static deletarVenda = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = consulta.delete(id);
			if (resposta) res.send("Venda Excluída com Sucesso");
			else res.json("Venda não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};
}

export default VendasController;
