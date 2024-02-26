import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class Agenda {
    private ArrayList<Contato> listaContatos;

    public Agenda() {
        listaContatos = new ArrayList<Contato>();
    }

    public void adicionar(String nome, String endereco, String email, String cpf, String estadoInscricao) {
        listaContatos.add(new PessoaFisica(nome, endereco, email, cpf, estadoInscricao));
    }

    public void adicionar(String nome, String endereco, String email, String cnpj, int inscricaoEstadual) {
        listaContatos.add(new PessoaJuridica(nome, endereco, email, cnpj, inscricaoEstadual));
    }

    public boolean remover(String id) {
        for (Contato contato : listaContatos) {
            if (contato.getId().equals(id)) {
                listaContatos.remove(contato);
                return true;
            }
        }
        return false;
    }

    public List<Contato> getContatos() {
        return Collections.unmodifiableList(listaContatos);
    }
}