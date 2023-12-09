import java.util.Random;

public class Arrojado implements TipoInvestidor {
   public double investir(double valor, int tempo) {
      Random random = new Random();
      for (int i = 0; i < tempo; i++) {
         if (random.nextInt(100) < 65) {
            valor += valor * 0.003;
         } else if (random.nextInt(100) > 89) {
            valor += valor * 0.05;
         } else {
            valor += valor * 0.02;
         }
      }
      return valor;
   }
}
