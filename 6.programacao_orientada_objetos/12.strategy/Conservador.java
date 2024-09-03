public class Conservador implements TipoInvestidor {
   public double investir(double valor, int tempo) {
      return 0.008 * valor * tempo;
   }
}
