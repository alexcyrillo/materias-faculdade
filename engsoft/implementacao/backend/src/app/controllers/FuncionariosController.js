import Repository from "../repositories/Repository.js";

// Instância do Repository para acessar operações de banco de dados para a entidade "funcionarios".
const consulta = new Repository("funcionarios", "cpf");

// Classe que contém métodos relacionados à lógica de manipulação de funcionários.
class FuncionariosController {
	// Método estático que lista todos os funcionários.
	static listarFuncionarios = async (req, res) => {
		try {
			// Obtém a resposta da consulta para listar todos os funcionários.
			const resposta = (await consulta.findAll()).consulta;

			// Verifica se há funcionários cadastrados e envia a resposta.
			if (resposta) res.send(resposta);
			else res.json("Não há Funcionarios Cadastrado");
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.json({ erro: erro });
		}
	};

	// Método estático que lista um funcionário por ID.
	static listarFuncionarioPorId = async (req, res) => {
		try {
			// Obtém o ID da solicitação.
			const id = req.params.id;

			// Consulta o funcionário por ID.
			const resposta = await consulta.findById(id).consulta;

			// Verifica se o funcionário foi encontrado e envia a resposta.
			if (resposta) res.send(resposta);
			else res.json("Funcionario não encontrado");
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.json({ erro: erro });
		}
	};

	// Método estático que cadastra um novo funcionário.
	static cadastrarFuncionario = async (req, res) => {
		try {
			// Obtém os dados do funcionário a partir do corpo da solicitação.
			const funcionario = req.body;

			// Realiza o cadastro do funcionário.
			const resposta = await consulta.create(funcionario);

			// Envia uma resposta JSON indicando que o cadastro foi realizado com sucesso.
			res.send({ message: "Cadastro Realizado com Sucesso", resposta });
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.json({ erro: erro });
		}
	};

	// Método estático que edita um funcionário por ID.
	static editarFuncionario = async (req, res) => {
		try {
			// Obtém o ID da solicitação.
			const id = req.params.id;

			// Obtém os dados atualizados do funcionário a partir do corpo da solicitação.
			const Funcionario = req.body;

			// Realiza a edição do funcionário.
			const resposta = await consulta.update(Funcionario, id);

			// Verifica se o funcionário foi encontrado e envia uma mensagem de sucesso ou falha.
			if (resposta)
				res.send({ message: "Funcionario Editado com Sucesso", resposta });
			else res.json("Funcionario não encontrado");
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.json({ erro: erro });
		}
	};

	// Método estático que deleta um funcionário por ID.
	static deletarFuncionario = (req, res) => {
		try {
			// Obtém o ID da solicitação.
			const id = req.params.id;

			// Realiza a exclusão do funcionário.
			const resposta = consulta.delete(id);

			// Verifica se o funcionário foi encontrado e envia uma mensagem de sucesso ou falha.
			if (resposta) res.send("Fucionário Excluído com Sucesso");
			else res.json("Funcionario não encontrado");
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.json({ erro: erro });
		}
	};
}

// Exporta a classe FuncionariosController para ser utilizada em outros lugares.
export default FuncionariosController;
