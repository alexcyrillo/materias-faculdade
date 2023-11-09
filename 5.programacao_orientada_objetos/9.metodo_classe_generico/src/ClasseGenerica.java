public class ClasseGenerica<T> {
   private T atributoGenerico1;
   private T atributoGenerico2;
   private T atributoGenerico3;

   ClasseGenerica(T atributoGenerico1, T atributoGenerico2, T atributoGenerico3) {
      this.atributoGenerico1 = atributoGenerico1;
      this.atributoGenerico2 = atributoGenerico2;
      this.atributoGenerico3 = atributoGenerico3;
   }

   public T getAtributoGenerico1() {
      return atributoGenerico1;
   }

   public T getAtributoGenerico2() {
      return atributoGenerico2;
   }

   public T getAtributoGenerico3() {
      return atributoGenerico3;
   }

   public void setAtributoGenerico1(T atributoGenerico1) {
      this.atributoGenerico1 = atributoGenerico1;
   }

   public void setAtributoGenerico2(T atributoGenerico2) {
      this.atributoGenerico2 = atributoGenerico2;
   }

   public void setAtributoGenerico3(T atributoGenerico3) {
      this.atributoGenerico3 = atributoGenerico3;
   }

}
