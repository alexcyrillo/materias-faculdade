public class Chocolate extends Sabor {

   public Chocolate(Sorvete s) {
      super(s);
   }

   @Override
   public double valor() {
      return 2.50 + getSorvete().valor();
   }
}
