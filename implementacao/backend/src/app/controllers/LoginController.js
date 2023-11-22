import { consulta } from "../database/index.js";

class LoginController {
	static login = async (req, res) => {
		const { cpf, senha } = req.body;

		const sql = "SELECT cpf, senha, cargo FROM funcionarios WHERE cpf=?";
		const usuario = (await consulta(sql, [cpf]))[0];
		//usuario = usuario[0];

		if (usuario) {
			if (senha === usuario.senha) {
				return res.json({ auth: true });
			}
		} else {
			res.status(500).json({ message: "Login inválido!" });
		}
	};
}

export default LoginController;
