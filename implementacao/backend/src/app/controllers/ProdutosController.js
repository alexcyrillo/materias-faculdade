import Repository from "../repositories/Repository.js";

const consulta = new Repository("produtos", "id");
class ProdutosController {
	static listarProdutos = async (req, res) => {
		try {
			const resposta = await consulta.findAll();
			if (resposta) res.send(resposta);
			else res.json("Não há Produtos Cadastrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static listarProdutoPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await consulta.findById(id);
			if (resposta) res.send(resposta);
			else res.json("Produto não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static cadastrarProduto = async (req, res) => {
		try {
			const produto = req.body;
			const resposta = await consulta.create(produto);
			res.send({ message: "Cadastro Realizado com Sucesso", resposta });
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static editarProduto = async (req, res) => {
		try {
			const id = req.params.id;
			const produto = req.body;
			const resposta = await consulta.update(produto, id);
			if (resposta)
				res.send({ message: "Produto Editado com Sucesso", resposta });
			else res.json("Produto não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static deletarProduto = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = consulta.delete(id);
			if (resposta) res.send("Produto Excluído com Sucesso");
			else res.json("Produto não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};
}

export default ProdutosController;
