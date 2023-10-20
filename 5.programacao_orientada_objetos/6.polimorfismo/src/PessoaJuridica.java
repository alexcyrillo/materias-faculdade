public class PessoaJuridica extends Contato{
    private String cnpj;
    private String inscricaoEstadual;
 
    public PessoaJuridica(String nome, String endereco, String email, String cnpj, String inscricaoEstadual){
        super(nome, endereco, email);
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
    }

    public String getCnpj() {
        return cnpj;
    }

    public String getInscricaoEstadual() {
        return inscricaoEstadual;
    }
}
