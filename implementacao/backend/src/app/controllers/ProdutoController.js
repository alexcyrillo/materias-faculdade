import Repository from "../repositories/Repository.js";

const consulta = new Repository("produtos");
class ProdutosController {
	static listarProdutos = async (req, res) => {
		try {
			const resposta = await consulta.findAll();
			res.send(resposta);
		} catch {
			res.json("Nenhum produto cadastrado");
		}
	};

	static listarProdutoPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await consulta.findById(id);
			res.json(resposta);
		} catch {
			res.json("Produto não encontrado");
		}
	};

	static cadastrarProduto = async (req, res) => {
		try {
			const produto = req.body;
			const resposta = await consulta.create(produto);
			res.send(resposta);
		} catch {
			res.json("Produto não cadastrado");
		}
	};

	static editarProduto = async (req, res) => {
		try {
			const id = req.params.id;
			const produto = req.body;
			const resposta = await consulta.update(produto, id);
			res.send(resposta);
		} catch {
			res.json("Produto não encontrado");
		}
	};

	static deletarProduto = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = consulta.delete(id);
			res.send(resposta);
		} catch {
			res.json("Produto não excluido");
		}
	};
}

export default ProdutosController;
