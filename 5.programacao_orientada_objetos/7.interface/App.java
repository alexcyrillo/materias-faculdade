import java.util.ArrayList;

public class App {
   public static void main(String[] args) {
      ArrayList<Seguro> seguro = new ArrayList<Seguro>();

      seguro.add(new Apartamento(3, 50));
      seguro.add(new Casa(true, 195));
      seguro.add(new Vida(9, "masculino"));

      for (Seguro segurado : seguro) {
         System.out.println(segurado);
      }

   }
}
