public class Apartamento extends Residencial {
   private int numAndaresPredio;

   Apartamento(int numAndaresPredio, int metragemImovel) {
      super(metragemImovel);
      this.numAndaresPredio = numAndaresPredio;
   }

   @Override
   public int calcularPremio() {
      int premio = 0;
      if (numAndaresPredio < 4) {
         premio = 3 * getMetragemImovel();
      } else {
         premio = 4 * getMetragemImovel();
      }
      return premio;
   }

   @Override
   public String toString() {
      return super.toString() + "| Numero Andares: " + numAndaresPredio + "| Premio: " + calcularPremio();
   }
}