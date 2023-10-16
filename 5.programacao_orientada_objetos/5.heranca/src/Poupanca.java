
public class Poupanca extends Aplicacao{
    private double taxaSelic;
    private double taxaRendimento;

    public Poupanca(double taxaSelic, double taxaRendimento, double valorAplicado){
        super(valorAplicado);
        this.taxaSelic = taxaSelic;
        this.taxaRendimento = taxaRendimento;
    }

    public double calcularRetorno(int tempo){
        double rendimento = 0.7 * taxaSelic + taxaRendimento; 
        return getValorAplicado() * Math.pow((1 + (rendimento/100)), tempo);
    }
}
