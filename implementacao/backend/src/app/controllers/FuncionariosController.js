import Repository from "../repositories/Repository.js";

const consulta = new Repository("funcionarios", "cpf");

class FuncionariosController {
	static listarFuncionarios = async (req, res) => {
		try {
			const resposta = await consulta.findAll();
			if (resposta) res.send(resposta);
			else res.json("Não há Funcionarios Cadastrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static listarFuncionarioPorId = async (req, res) => {
		try {
			const id = req.params.id;
			const resposta = await consulta.findById(id);
			if (resposta) res.send(resposta);
			else res.json("Funcionario não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static cadastrarFuncionario = async (req, res) => {
		try {
			const funcionario = req.body;
			const resposta = await consulta.create(funcionario);
			res.send({ message: "Cadastro Realizado com Sucesso", resposta });
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static editarFuncionario = async (req, res) => {
		try {
			const id = req.params.id;
			const Funcionario = req.body;
			const resposta = await consulta.update(Funcionario, id);
			if (resposta)
				res.send({ message: "Funcionario Editado com Sucesso", resposta });
			else res.json("Funcionario não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};

	static deletarFuncionario = (req, res) => {
		try {
			const id = req.params.id;
			const resposta = consulta.delete(id);
			if (resposta) res.send("Fucionário Excluído com Sucesso");
			else res.json("Funcionario não encontrado");
		} catch (erro) {
			res.json({ erro: erro });
		}
	};
}

export default FuncionariosController;
