import Repository from "../repositories/Repository.js";

const consulta = new Repository("clientes", "cpf");

class ClientesController {
	static listarClientes = async (req, res) => {
		try {
			if (req.permit) {
				const resposta = await consulta.findAll();
				res.send(resposta);
			}
		} catch {
			res.json("Nenhum Cliente cadastrado");
		}
	};

	static listarClientePorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await consulta.findById(id);
			res.send(resposta);
		} catch {
			res.json({ message: "Cliente não encontrado" });
		}
	};

	static cadastrarCliente = async (req, res) => {
		try {
			const Cliente = req.body;
			const resposta = await consulta.create(Cliente);
			res.send(resposta);
		} catch {
			res.json({ message: "Cliente não cadatrado" });
		}
	};

	static editarCliente = async (req, res) => {
		try {
			const id = req.params.id;
			const Cliente = req.body;
			const resposta = await consulta.update(Cliente, id);
			res.send(resposta);
		} catch {
			res.json("Cliente não encontrado");
		}
	};

	static deletarCliente = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = consulta.delete(id);
			res.send(resposta);
		} catch {
			res.json("Produto não excluido");
		}
	};
}

export default ClientesController;
