public abstract class Sorvete {
   private String descricao;

   public void setDescricao(String descricao) {
      this.descricao = descricao;
   }

   public String getDescricao() {
      return descricao;
   }

   public abstract double valor();

   public int qtBolas() {
      return 0;
   }
}
