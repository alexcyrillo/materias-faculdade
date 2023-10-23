import java.util.ArrayList;

public class Agenda {
    private ArrayList<Contato> listaContatos;

    public Agenda() {
        listaContatos = new ArrayList<Contato>();
    }

    public void adicionar(String tipo, String nome, String endereco, String email, String cpfCnpj,
            String estadoInscricao) {
        if (tipo == "fisica")
            listaContatos.add(new PessoaFisica(nome, endereco, email, cpfCnpj, estadoInscricao));
        else if (tipo == "juridica")
            listaContatos.add(new PessoaJuridica(nome, endereco, email, cpfCnpj, estadoInscricao));
    }

    public void remover(String id) {
        for (Contato contato : listaContatos) {
            if (contato.getCpf() == id) {

            }
        }
    }

}
