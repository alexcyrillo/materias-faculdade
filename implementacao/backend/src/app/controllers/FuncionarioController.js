import Repository from "./Repository.js";

class FuncionarioController extends Repository {
	constructor() {
		super("funcionario");
	}

	static listarFuncionarios = async (req, res) => {
		try {
			const resposta = await Repository().findAll();
			res.send(resposta);
		} catch {
			res.json("Nenhum Funcionario cadastrado");
		}
	};

	static listarFuncionarioPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await Repository.findById(id);
			res.json(resposta);
		} catch {
			res.json("Funcionario não encontrado");
		}
	};

	static cadastrarFuncionario = async (req, res) => {
		try {
			const Funcionario = req.body;
			const resposta = await Repository.create(Funcionario);
			res.send(resposta);
		} catch {
			res.json("Funcionario não cadatrado");
		}
	};

	static editarFuncionario = async (req, res) => {
		try {
			const id = req.params.id;
			const Funcionario = req.body;
			const resposta = await Repository.update(Funcionario, id);
			res.send(resposta);
		} catch {
			res.json("Funcionario não encontrado");
		}
	};

	static deletarFuncionario = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = Repository.delete(id);
			res.send(resposta);
		} catch {
			res.json("Produto não excluido");
		}
	};
}

export default FuncionarioController;
