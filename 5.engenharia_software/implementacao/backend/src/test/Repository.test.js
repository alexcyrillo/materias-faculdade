import Repository from "../app/repositories/Repository.js";

const consulta = new Repository("produtos", "id");

describe("Teste Operacoes Repositories", () => {
	const erro = { message: "Erro no banco de dados" };

	it("Listar Todos", () => {
		const retorno = consulta.findAll();
		expect(retorno).not.toEqual(erro);
	});

	it("Listar por id", () => {
		const retorno = consulta.findById();

		expect(retorno).not.toEqual(erro);
	});

	it("Cadastrar", () => {
		const retorno = consulta.create();

		expect(retorno).not.toEqual(erro);
	});
});
