public class Morango extends Sabor {
   public Morango(Sorvete s) {
      super(s);
   }

   @Override
   public double valor() {
      return 1.50 + getSorvete().valor();
   }

}
