import java.util.Scanner;

public abstract class Leitor {
   public void executarOperacao() {
      String dado = ler();
      dado = transformarString(dado);
      imprimirDado(dado);
   }

   public String ler() {
      Scanner scanner = new Scanner(System.in);
      System.out.println("Qual palavra?");
      String dado = scanner.nextLine();
      scanner.close();
      return dado;
   }

   public abstract String transformarString(String dado);

   public void imprimirDado(String dado) {
      System.out.println(dado);
   }
}
