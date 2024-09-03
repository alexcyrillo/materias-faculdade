import Repository from "../repositories/Repository.js";

// Instância do Repository para acessar operações de banco de dados para a entidade "clientes".
const consulta = new Repository("clientes", "cpf");

// Classe que contém métodos relacionados à lógica de manipulação de clientes.
class ClientesController {
	// Método estático que lista todos os clientes.
	static listarClientes = async (req, res) => {
		try {
			// Obtém a resposta da consulta para listar todos os clientes.
			const resposta = (await consulta.findAll()).consulta;

			// Verifica se há clientes cadastrados e envia a resposta.
			if (resposta) res.send(resposta);
			else res.json("Não há Clientes Cadastrado");
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.status(400).res.json(erro);
		}
	};

	// Método estático que lista um cliente por ID.
	static listarClientePorId = async (req, res) => {
		try {
			// Obtém o ID da solicitação.
			const id = req.params.id;

			// Consulta o cliente por ID.
			const resposta = (await consulta.findById(id)).consulta;

			// Verifica se o cliente foi encontrado e envia a resposta.
			if (resposta) res.send(resposta);
			else res.json("Cliente não encontrado");
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.status(400).res.json(erro);
		}
	};

	// Método estático que cadastra um novo cliente.
	static cadastrarCliente = async (req, res) => {
		try {
			// Obtém os dados do cliente a partir do corpo da solicitação.
			const cliente = req.body;

			// Realiza o cadastro do cliente.
			const resposta = await consulta.create(cliente);

			// Envia uma resposta JSON indicando que o cadastro foi realizado com sucesso.
			res.send({ message: "Cadastro Realizado com Sucesso", resposta });
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.status(400).res.json(erro);
		}
	};

	// Método estático que edita um cliente por ID.
	static editarCliente = async (req, res) => {
		try {
			// Obtém o ID da solicitação.
			const id = req.params.id;

			// Obtém os dados atualizados do cliente a partir do corpo da solicitação.
			const cliente = req.body;

			// Realiza a edição do cliente.
			const resposta = await consulta.update(cliente, id);

			// Verifica se o cliente foi encontrado e envia uma mensagem de sucesso ou falha.
			if (resposta)
				res.send({ message: "Cliente Editado com Sucesso", resposta });
			else res.json("Cliente não encontrado");
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.status(400).res.json(erro);
		}
	};

	// Método estático que deleta um cliente por ID.
	static deletarCliente = (req, res) => {
		try {
			// Obtém o ID da solicitação.
			const id = req.params.id;

			// Realiza a exclusão do cliente.
			const resposta = consulta.delete(id);

			// Verifica se o cliente foi encontrado e envia uma mensagem de sucesso ou falha.
			if (resposta) res.send("Cliente Excluído com Sucesso");
			else res.json("Cliente não encontrado");
		} catch (erro) {
			// Em caso de erro, envia uma resposta JSON com informações de erro.
			res.status(400).res.json(erro);
		}
	};
}

// Exporta a classe ClientesController para ser utilizada em outros lugares.
export default ClientesController;
