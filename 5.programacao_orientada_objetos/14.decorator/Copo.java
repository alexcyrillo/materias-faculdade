public class Copo extends Sorvete {
   public Copo(String descricao) {
      setDescricao(descricao);
   }

   @Override
   public double valor() {
      return 1.70;
   }
}
