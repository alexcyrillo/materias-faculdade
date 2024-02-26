public class Investir {
   private TipoInvestidor tipo;

   public Investir(TipoInvestidor tipo) {
      this.tipo = tipo;
   }

   public double ExecutarSimulacao(double valor, int tempo) {
      return tipo.investir(valor, tempo);
   }
}
