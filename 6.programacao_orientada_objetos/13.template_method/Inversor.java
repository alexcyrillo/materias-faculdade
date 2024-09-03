public class Inversor extends Leitor {
   public String transformarString(String dado) {
      StringBuilder dadoTranformado = new StringBuilder(dado);
      return dadoTranformado.reverse().toString();
   };
}
