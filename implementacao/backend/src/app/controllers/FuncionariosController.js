import Repository from "../repositories/Repository.js";

const consulta = new Repository("funcionarios", "cpf");

class FuncionariosController {
	static listarFuncionarios = async (req, res) => {
		try {
			if (req.permit) {
				const resposta = await consulta.findAll();
				res.send(resposta);
			}
		} catch {
			res.json("Nenhum Funcionario cadastrado");
		}
	};

	static listarFuncionarioPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await consulta.findById(id);
			res.send(resposta);
		} catch {
			res.json({ message: "Funcionario não encontrado" });
		}
	};

	static cadastrarFuncionario = async (req, res) => {
		try {
			const Funcionario = req.body;
			const resposta = await consulta.create(Funcionario);
			res.send(resposta);
		} catch {
			res.json({ message: "Funcionario não cadatrado" });
		}
	};

	static editarFuncionario = async (req, res) => {
		try {
			const id = req.params.id;
			const Funcionario = req.body;
			const resposta = await consulta.update(Funcionario, id);
			res.send(resposta);
		} catch {
			res.json("Funcionario não encontrado");
		}
	};

	static deletarFuncionario = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = consulta.delete(id);
			res.send(resposta);
		} catch {
			res.json("Produto não excluido");
		}
	};
}

export default FuncionariosController;
