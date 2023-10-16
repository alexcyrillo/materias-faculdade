public class App {
    public static void main(String[] args) throws Exception {
        Estoque e1 = new Estoque("fluxo");

        e1.adicionarProduto(new Produto("Arroz", "Tio Joao", 500));
        e1.adicionarProduto(new Produto("Arroz", "Tio Joao", 125));
        e1.adicionarProduto(new Produto("Sabonete", "Dove", 50));
        e1.adicionarProduto(new Produto("Sabonete", "Nivea", 25));
        e1.adicionarProduto(new Produto("Sabonete", "Palmolive", 40));

        e1.gerarRelatorio();
    }
}
