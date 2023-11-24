import { consulta } from "../database/index.js";

// Classe Repository que encapsula operações básicas de CRUD para uma tabela específica no banco de dados.
class Repository {
  // Construtor que recebe o nome da tabela e o nome da coluna de identificação (id).
  constructor(tabela, id) {
    this.tabela = tabela; // Nome da tabela
    this.id = id; // Nome da coluna de identificação (id)
  }

  // Método para recuperar todos os registros da tabela.
  findAll() {
    const sql = "SELECT * FROM " + this.tabela;
    return consulta(sql);
  }

  // Método para recuperar um registro específico com base no id.
  findById(id) {
    const sql = "SELECT * FROM " + this.tabela + " WHERE " + this.id + "=?";
    return consulta(sql, [id]);
  }

  // Método para criar um novo registro na tabela.
  create(instancia) {
    const sql = "INSERT INTO " + this.tabela + " SET ?";
    return consulta(sql, [instancia]);
  }

  // Método para atualizar um registro existente com base no id.
  update(instancia, id) {
    const sql = "UPDATE " + this.tabela + " SET ? WHERE " + this.id + "=?";
    return consulta(sql, [instancia, id]);
  }

  // Método para excluir um registro com base no id.
  delete(id) {
    const sql = "DELETE FROM " + this.tabela + " WHERE " + this.id + "=?";
    consulta(sql, [id]);
  }
}

// Exporta a classe Repository para ser utilizada em outras partes do aplicativo.
export default Repository;
