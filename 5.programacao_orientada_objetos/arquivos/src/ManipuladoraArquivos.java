
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.Map;

public class ManipuladoraArquivos {
   public static void gerarArquivoTexto(Map<String, Integer> hv, String nomeArquivo) {
      // try(FileWriter arq = new FileWriter(nomeArquivo)){
      // for(HistogramaVotos voto: hv)
      // }
   }

   public static HistogramaVotos lerArquivoTexto(String nomeArquivo) {
      HistogramaVotos hv = null;
      try (BufferedReader arq = new BufferedReader(new FileReader(nomeArquivo))) {
         hv = new HistogramaVotos();
         String linha = arq.readLine();

         while (linha != null) {
            hv.cadastrarVoto(linha);
            linha = arq.readLine();
         }
      } catch (FileNotFoundException e) {
         System.out.println("Arquivo nao encontrado");

      } catch (IOException e) {
         System.out.println("Erro ao ler arquivo");
      }
      return hv;
   }

   public static void gerarArquivoBinario(HistogramaVotos hv, String nomeArquivo) {
      try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(nomeArquivo));) {
         oos.writeObject(hv);
      } catch (IOException e) {
         System.out.println("Erro");
      }
   }

   public static HistogramaVotos lerArquivoBinario(String nomeArquivo) {
      HistogramaVotos hv = null;
      try (FileReader fr = new FileReader(nomeArquivo)) {
         ObjectInputStream ois = new ObjectInputStream(new FileInputStream(nomeArquivo));
         // ArrayList<HistogramaVotos> listHv = new ArrayList<>();
         hv = (HistogramaVotos) ois.readObject();

         ois.close();

         return hv;
      } catch (IOException e) {
         System.out.println("Erro ao ler arquivo");
      } catch (ClassNotFoundException e) {
         System.out.println("Erro ao ler arquivo");
      }
      return hv;
   }
}
