import Repository from "../repositories/Repository.js";
import VendasRepository from "../repositories/VendasRepository.js";

// Cria uma instância da classe Repository para a tabela "vendas" com a coluna de identificação "id".
const consulta = new Repository("vendas", "id");

// Classe VendasController que encapsula as operações relacionadas a vendas.
class VendasController {
  // Método estático para listar todas as vendas.
  static listarVendas = async (req, res) => {
    try {
      const resposta = await consulta.findAll();
      if (resposta) res.send(resposta);
      else res.json("Não há Vendas Cadastradas");
    } catch (erro) {
      res.json({ erro: erro });
    }
  };

  // Método estático para listar uma venda específica por ID.
  static listarVendaPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const resposta = await consulta.findById(id);
      if (resposta) res.send(resposta);
      else res.json("Venda não encontrada");
    } catch (erro) {
      res.json({ erro: erro });
    }
  };

  // Método estático para listar vendas de um cliente específico por ID.
  static listarVendaPorCliente = async (req, res) => {
    try {
      const id = req.params.id;
      const resposta = await VendasRepository.listarComprasCliente(id);
      if (resposta[0]) res.send(resposta);
      else res.send({ message: "Nenhuma Venda Cadastrada" });
    } catch (erro) {
      res.json({ erro: erro });
    }
  };

  // Método estático para cadastrar uma nova venda.
  static cadastrarVenda = async (req, res) => {
    try {
      const venda = req.body;
      const resposta = await consulta.create(venda);

      // Atualiza dados relacionados à venda (vendedor, cliente, estoque).
      VendasRepository.vendedorVenda(venda.cpf_vendedor);
      VendasRepository.clienteCompra(venda.cpf_cliente);
      VendasRepository.reduzirEstoque(venda.cod_produto);

      res.send({ message: "Cadastro Realizado com Sucesso", resposta });
    } catch (erro) {
      res.json({ erro: erro });
    }
  };

  // Método estático para editar uma venda existente por ID.
  static editarVenda = async (req, res) => {
    try {
      const id = req.params.id;
      const venda = req.body;
      const resposta = await consulta.update(venda, id);
      if (resposta)
        res.send({ message: "Venda Editada com Sucesso", resposta });
      else res.json("Venda não encontrada");
    } catch (erro) {
      res.json({ erro: erro });
    }
  };

  // Método estático para deletar uma venda existente por ID.
  static deletarVenda = (req, res) => {
    try {
      const id = req.params.id;
      const resposta = consulta.delete(id);
      res.send("Venda Excluída com Sucesso");
    } catch (erro) {
      res.json({ erro: erro });
    }
  };
}

// Exporta a classe VendasController para ser utilizada em outras partes do aplicativo.
export default VendasController;
