import java.util.ArrayList;
import java.util.Comparator;

public class Estoque {
    private String tipo;
    private ArrayList<Produto> listaProdutos;

    public Estoque(String tipo){
        this.tipo = tipo;
        listaProdutos = new ArrayList<>();
    }

    public void adicionarProduto(Produto p0){
        listaProdutos.add(p0);
    }

    public Comparator<Produto> comparador(){
        Comparator<Produto> comparar = new Comparator<Produto>(){
            @Override
            public int compare(Produto p0, Produto p1){
                if(p0.getNome().compareTo(p1.getNome()) != 0){
                    return p0.getNome().compareTo(p1.getNome());
                } else
                    return p0.getMarca().compareTo(p1.getMarca());
            }
        };
        return comparar;
    }

    public void gerarRelatorio(){
        listaProdutos.sort(comparador());
        System.out.println("\nTipo de Estoque: " + this.tipo);
        System.out.printf("%-15s%-20s%-15s\n", "Nome", "Marca", "Quantidade");
        for(Produto p: listaProdutos){
            System.out.printf("%-15s%-20s%-15d\n", p.getNome(), p.getMarca(), p.getQuantidade());
        }
    }


}
