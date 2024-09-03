
public class Acao extends Aplicacao{
    private double valorAcaoAntes;
    private double valorAcaoDepois;

    public Acao(double valorAcaoAntes, double valorAcaoDepois, double valorAplicado){
        super(valorAplicado);
        this.valorAcaoAntes = valorAcaoAntes;
        this.valorAcaoDepois = valorAcaoDepois;
    }

    public double calcularRetorno(int tempo){
        double rendimento = ((valorAcaoDepois/valorAcaoAntes) * 100 - 100);
        return getValorAplicado() * Math.pow((1 + (rendimento/100)), tempo);
    }
}
