public class Casa extends Residencial {
   private boolean condominioFechado;

   Casa(boolean condominioFechado, int metragemImovel) {
      super(metragemImovel);
      this.condominioFechado = condominioFechado;
   }

   @Override
   public int calcularPremio() {
      int premio = 0;
      if (condominioFechado) {
         premio = 5 * getMetragemImovel();
      } else {
         premio = 7 * getMetragemImovel();
      }
      return premio;
   }

   @Override
   public String toString() {
      return super.toString() + "| Condominio Fechado: " + condominioFechado + "| Premio: " + calcularPremio();
   }
}
