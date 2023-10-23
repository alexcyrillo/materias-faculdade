public class PessoaFisica extends Contato {
    private String cpf;
    private String estadoCivil;

    public PessoaFisica(String nome, String endereco, String email, String cpf, String estadoCivil) {
        super(nome, endereco, email);
        this.cpf = cpf;
        this.estadoCivil = estadoCivil;
    }

    @Override
    public String getId() {
        return cpf;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    @Override
    public String toString() {
        return super.toString() + " | CPF: " + cpf + " | Estado Civil: " + estadoCivil;
    }

}
