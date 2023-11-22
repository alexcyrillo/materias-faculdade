//import jwt from "jsonwebtoken";
import { consulta } from "../database/index.js";
//import authConfig from "../../config/authentication.js";

class LoginController {
	static login = async (req, res) => {
		const { cpf, senha } = req.body;

		const sql = "SELECT cpf, senha, cargo FROM funcionarios WHERE cpf=?";
		const usuarioBd = await consulta(sql, [cpf]);

		if (usuarioBd) {
			if (senha === usuarioBd[0].senha) {
				return res.json({ auth: true });
			}
		} else {
			res.status(500).json({ message: "Login inválido!" });
		}
	};
}

// const generateToken = (params) => {
// 	return jwt.sign(params, authConfig.secret, {
// 		expiresIn: 86400,
// 	});
// };

// class LoginController {
// 	static login = async (req, res) => {
// 		try {
// 			const { cpf, senha } = req.body;

// 			const sql = "SELECT cpf, senha, cargo FROM funcionarios WHERE cpf=?";
// 			const usuarioBd = await consulta(sql, [cpf]);

// 			console.log(usuarioBd[0].senha);
// 			console.log(senha);

// 			if (usuarioBd) {
// 				if (senha === usuarioBd[0].senha) {
// 					if (usuarioBd[0].cargo === "gerente") {
// 						const cpf = usuarioBd[0].cpf;
// 						const token = generateToken({ cpf: cpf });
// 						return res.send({
// 							token: token,
// 							uid: cpf,
// 							tokenExpiration: "1d",
// 						});
// 					} else if (usuarioBd[0].cargo === "vendedor") {
// 						return res.json({ auth: true });
// 					}
// 				} else {
// 					res.status(500).json({ message: "Login inválido!" });
// 				}
// 			}
// 		} catch {
// 			res.status(500).json({ message: "Erro ao Logar!" });
// 		}
// 	};

// 	static logout = (req, res) => {
// 		res.json({ auth: false, token: null });
// 	};
// }

export default LoginController;
