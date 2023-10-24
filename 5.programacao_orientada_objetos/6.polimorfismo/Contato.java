public class Contato {
    private String nome;
    private String endereco;
    private String email;

    public Contato(String nome, String endereco, String email) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public String getEmail() {
        return email;
    }

    public String getId() {
        return null;
    }

    public String toString() {
        return "Nome: " + nome + " | Endereco: " + endereco + " | E-mail: " + email;
    }

}
