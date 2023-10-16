
public class Cdb extends Aplicacao{
    private double taxaCdi;

    public Cdb(double taxaCdi,double valorAplicado){
        super(valorAplicado);
        this.taxaCdi = taxaCdi;
    }

    public double calcularRetorno(int tempo){
        double rendimento = 1.2 * taxaCdi;
        return getValorAplicado() * Math.pow((1 + (rendimento/100)), tempo); 
    }
}
