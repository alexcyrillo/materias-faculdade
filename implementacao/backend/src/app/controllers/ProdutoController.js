import Repository from "./Repository.js";

class ProdutosController extends Repository {
	constructor() {
		super("produtos");
	}

	static listarProdutos = async (req, res) => {
		try {
			const resposta = await findAll();
			res.send(resposta);
		} catch {
			res.json("Nenhum produto cadastrado");
		}
	};

	static listarProdutoPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await findById(id);
			res.json(resposta);
		} catch {
			res.json("Produto não encontrado");
		}
	};

	static cadastrarProduto = async (req, res) => {
		try {
			const produto = req.body;
			const resposta = await Repository.create(produto);
			res.send(resposta);
		} catch {
			res.json("Produto não cadastrado");
		}
	};

	static editarProduto = async (req, res) => {
		try {
			const id = req.params.id;
			const produto = req.body;
			const resposta = await Repository.update(produto, id);
			res.send(resposta);
		} catch {
			res.json("Produto não encontrado");
		}
	};

	static deletarProduto = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = Repository.delete(id);
			res.send(resposta);
		} catch {
			res.json("Produto não excluido");
		}
	};
}

export default ProdutosController;
