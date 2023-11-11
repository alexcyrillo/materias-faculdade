import ProdutoRepository from "../repositories/ProdutoRepository.js";

class ProdutosController {
	static listarProdutos = async (req, res) => {
		try {
			const resposta = await ProdutoRepository.findAll();
			res.send(resposta);
		} catch {
			res.json("Nenhum produto cadastrado");
		}
	};

	static listarProdutoPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await ProdutoRepository.findById(id);
			res.json(resposta);
		} catch {
			res.json("Produto não encontrado");
		}
	};

	static cadastrarProduto = async (req, res) => {
		try {
			const produto = req.body;
			const resposta = await ProdutoRepository.create(produto);
			res.send(resposta);
		} catch {
			res.json("Produto não cadatrado");
		}
	};

	static editarProduto = async (req, res) => {
		try {
			const id = req.params.id;
			const produto = req.body;
			const resposta = await ProdutoRepository.update(produto, id);
			res.send(resposta);
		} catch {
			res.json("Produto não encontrado");
		}
	};

	static deletarProduto = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await ProdutoRepository.delete(id);
			res.send(resposta);
		} catch {
			res.json("Produto não excluido");
		}
	};
}

export default ProdutosController;
