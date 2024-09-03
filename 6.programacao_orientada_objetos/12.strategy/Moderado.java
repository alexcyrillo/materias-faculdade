import java.util.Random;

public class Moderado implements TipoInvestidor {
   public double investir(double valor, int tempo) {
      Random random = new Random();
      for (int i = 0; i < tempo; i++) {
         if (random.nextInt(100) < 80) {
            valor += valor * 0.006;
         } else {
            valor += valor * 0.02;
         }
      }
      return valor;
   }
}
