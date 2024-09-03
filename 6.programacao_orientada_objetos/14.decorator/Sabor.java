public abstract class Sabor extends Sorvete {
   private Sorvete s;

   public Sabor(Sorvete s) {
      this.s = s;
      setDescricao(s.getDescricao());
   }

   public Sorvete getSorvete() {
      return s;
   }

   public abstract double valor();

   @Override
   public int qtBolas() {
      return 1 + getSorvete().qtBolas();
   }
}
