public abstract class Residencial implements Seguro {
   private int metragemImovel;

   Residencial(int metragemImovel) {
      this.metragemImovel = metragemImovel;
   }

   public int getMetragemImovel() {
      return metragemImovel;
   }

   @Override
   public String toString() {
      return "Metragem: " + metragemImovel;
   }
}
