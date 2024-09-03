import Repository from "../repositories/Repository.js";

// Cria uma instância de Repository configurada para a entidade "produtos" com a chave primária "id".
const consulta = new Repository("produtos", "id");

// Define um controlador para operações relacionadas aos produtos.
class ProdutosController {
	// Método para listar todos os produtos.
	static listarProdutos = async (req, res) => {
		try {
			// Chama o método findAll() da instância de Repository para obter todos os produtos do banco de dados.
			const resposta = (await consulta.findAll()).consulta;

			// Verifica se há produtos e envia a resposta como JSON. Caso contrário, retorna uma mensagem indicando a ausência de produtos.
			if (resposta) res.send(resposta);
			else res.json("Não há Produtos Cadastrados");
		} catch (erro) {
			// Em caso de erro, retorna uma resposta JSON contendo informações sobre o erro.
			res.json(erro);
		}
	};

	// Método para listar um produto específico por ID.
	static listarProdutoPorId = async (req, res) => {
		try {
			// Obtém o ID do produto a partir dos parâmetros da requisição.
			const id = req.params.id;

			// Chama o método findById() da instância de Repository para obter um produto específico pelo ID.
			const resposta = await consulta.findById(id).consulta;

			// Verifica se o produto foi encontrado e envia a resposta como JSON. Caso contrário, retorna uma mensagem indicando que o produto não foi encontrado.
			if (resposta) res.send(resposta);
			else res.json("Produto não encontrado");
		} catch (erro) {
			// Em caso de erro, retorna uma resposta JSON contendo informações sobre o erro.
			res.json(erro);
		}
	};

	// Método para cadastrar um novo produto.
	static cadastrarProduto = async (req, res) => {
		try {
			// Obtém os dados do produto a partir do corpo da requisição.
			const produto = req.body;

			// Chama o método create() da instância de Repository para cadastrar o novo produto no banco de dados.
			const resposta = await consulta.create(produto);

			// Envia uma resposta JSON indicando que o cadastro foi realizado com sucesso, juntamente com os detalhes do produto cadastrado.
			res.send({ message: "Cadastro Realizado com Sucesso", resposta });
		} catch (erro) {
			// Em caso de erro, retorna uma resposta JSON contendo informações sobre o erro.
			res.json(erro);
		}
	};

	// Método para editar um produto existente por ID.
	static editarProduto = async (req, res) => {
		try {
			// Obtém o ID do produto a partir dos parâmetros da requisição.
			const id = req.params.id;

			// Obtém os novos dados do produto a partir do corpo da requisição.
			const produto = req.body;

			// Chama o método update() da instância de Repository para editar o produto no banco de dados.
			const resposta = await consulta.update(produto, id);

			// Verifica se o produto foi editado com sucesso e envia uma resposta JSON. Caso contrário, retorna uma mensagem indicando que o produto não foi encontrado.
			if (resposta)
				res.send({ message: "Produto Editado com Sucesso", resposta });
			else res.json("Produto não encontrado");
		} catch (erro) {
			// Em caso de erro, retorna uma resposta JSON contendo informações sobre o erro.
			res.json(erro);
		}
	};

	// Método para excluir um produto por ID.
	static deletarProduto = (req, res) => {
		try {
			// Obtém o ID do produto a partir dos parâmetros da requisição.
			const id = req.params.id;

			// Chama o método delete() da instância de Repository para excluir o produto do banco de dados.
			const resposta = consulta.delete(id);

			// Verifica se o produto foi excluído com sucesso e envia uma resposta JSON. Caso contrário, retorna uma mensagem indicando que o produto não foi encontrado.
			if (resposta) res.send("Produto Excluído com Sucesso");
			else res.json("Produto não encontrado");
		} catch (erro) {
			// Em caso de erro, retorna uma resposta JSON contendo informações sobre o erro.
			res.json(erro);
		}
	};
}

// Exporta o controlador ProdutosController para ser utilizado em outras partes do aplicativo.
export default ProdutosController;
