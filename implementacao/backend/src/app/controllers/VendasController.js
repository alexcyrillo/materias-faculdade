import Repository from "../repositories/Repository.js";

const consulta = new Repository("vendas", "cpf");

class VendasController {
	static listarVendas = async (req, res) => {
		try {
			if (req.permit) {
				const resposta = await consulta.findAll();
				res.send(resposta);
			}
		} catch {
			res.json("Nenhum Venda cadastrado");
		}
	};

	static listarVendaPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await consulta.findById(id);
			res.send(resposta);
		} catch {
			res.json({ message: "Venda não encontrado" });
		}
	};

	static cadastrarVenda = async (req, res) => {
		try {
			const Venda = req.body;
			const resposta = await consulta.create(Venda);
			res.send(resposta);
		} catch {
			res.json({ message: "Venda não cadatrado" });
		}
	};

	static editarVenda = async (req, res) => {
		try {
			const id = req.params.id;
			const Venda = req.body;
			const resposta = await consulta.update(Venda, id);
			res.send(resposta);
		} catch {
			res.json("Venda não encontrado");
		}
	};

	static deletarVenda = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = consulta.delete(id);
			res.send(resposta);
		} catch {
			res.json("Produto não excluido");
		}
	};
}

export default VendasController;
