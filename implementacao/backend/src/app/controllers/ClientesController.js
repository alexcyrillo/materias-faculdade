import Repository from "../repositories/Repository.js";

const consulta = new Repository("clientes", "cpf");

class ClientesController {
	static listarClientes = async (req, res) => {
		try {
			const resposta = await consulta.findAll();
			if (resposta) res.send(resposta);
			else res.json("Não há Clientes Cadastrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static listarClientePorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await consulta.findById(id);
			if (resposta) res.send(resposta);
			else res.json("Cliente não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static cadastrarCliente = async (req, res) => {
		try {
			const cliente = req.body;
			const resposta = await consulta.create(cliente);
			res.send({ message: "Cadastro Realizado com Sucesso", resposta });
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static editarCliente = async (req, res) => {
		try {
			const id = req.params.id;
			const cliente = req.body;
			const resposta = await consulta.update(cliente, id);
			if (resposta)
				res.send({ message: "Cliente Editado com Sucesso", resposta });
			else res.json("Cliente não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static deletarCliente = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = consulta.delete(id);
			if (resposta) res.send("Cliente Excluído com Sucesso");
			else res.json("Cliente não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};
}

export default ClientesController;
