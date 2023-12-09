public class Creme extends Sabor {
   public Creme(Sorvete s) {
      super(s);
   }

   @Override
   public double valor() {
      return 3.50 + getSorvete().valor();
   }
}
