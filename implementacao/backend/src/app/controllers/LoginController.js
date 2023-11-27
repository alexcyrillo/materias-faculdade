import { consulta } from "../database/index.js";

// Classe que contém métodos relacionados à lógica de autenticação de login.
class LoginController {
  // Método estático que lida com a solicitação de login.
  static login = async (req, res) => {
    // Obtém as informações de CPF e senha da solicitação POST.
    const { cpf, senha } = req.body;

    // Consulta o banco de dados para obter informações do funcionário com base no CPF.
    const sql = "SELECT cpf, senha, cargo FROM funcionarios WHERE cpf=?";
    const usuario = (await consulta(sql, [cpf]))[0];

    // Verifica se o usuário foi encontrado no banco de dados.
    if (usuario) {
      // Compara a senha fornecida com a senha armazenada no banco de dados.
      if (senha === usuario.senha) {
        // Se a senha estiver correta, retorna uma resposta JSON indicando autenticação bem-sucedida e o cargo do funcionário.
        return res.json({ auth: true, cargo: usuario.cargo });
      }
    } else {
      // Se o usuário não for encontrado, retorna um status 500 com uma mensagem de login inválido.
      res.status(500).json({ message: "Login inválido!" });
    }
  };
}

// Exporta a classe LoginController para ser utilizada em outros lugares.
export default LoginController;
