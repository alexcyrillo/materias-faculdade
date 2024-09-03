public class Vida implements Seguro {
   private int idadeSegurado;
   private String generoSegurado;

   Vida(int idadeSegurado, String generoSegurado) {
      this.idadeSegurado = idadeSegurado;
      this.generoSegurado = generoSegurado;
   }

   @Override
   public int calcularPremio() {
      int premio = 0;
      if (idadeSegurado < 60) {
         premio = ((idadeSegurado / 10) + 1) * 100;
      } else {
         premio = (generoSegurado.equals("masculino")) ? 800 : 700;
      }
      return premio;
   }

   @Override
   public String toString() {
      return "Idade Segurado: " + idadeSegurado + "| Genero Segurado: " + generoSegurado + "| Premio: "
            + calcularPremio();
   }
}