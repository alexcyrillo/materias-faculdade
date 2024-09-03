import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.Map;

public class ManipuladoraArquivos implements Serializable {
   public static HistogramaVotos lerArquivoTexto(String arquivo) {
      HistogramaVotos dadosLidos = null;
      try (BufferedReader leitor = new BufferedReader(new FileReader(arquivo))) {
         dadosLidos = new HistogramaVotos();
         String linha = leitor.readLine();
         while (linha != null) {
            dadosLidos.cadastrarVoto(linha);
            linha = leitor.readLine();
         }
      } catch (FileNotFoundException e) {
         System.out.println("Arquivo nao encontrado");
      } catch (IOException e) {
         System.out.println("Erro na leitura do arquivo");
      }
      return dadosLidos;
   }

   public static HistogramaVotos lerArquivoBinario(String arquivo) {
      HistogramaVotos dadosLidos = null;
      try (ObjectInputStream leitorBinario = new ObjectInputStream(new FileInputStream(arquivo))) {
         dadosLidos = (HistogramaVotos) leitorBinario.readObject();
      } catch (ClassNotFoundException e) {
         System.out.println("Classe invalida");
      } catch (FileNotFoundException e) {
         System.out.println("Arquivo nao encontrado");
      } catch (IOException e) {
         System.out.println("Erro na leitura do arquivo");
      }
      return dadosLidos;
   }

   public static void gerarArquivoTexto(Map<String, Integer> mapa, String arquivo) {
      try (FileWriter escritor = new FileWriter(arquivo)) {
         for (String voto : mapa.keySet()) {
            escritor.write(voto + " " + mapa.get(voto) + "\n");
         }
      } catch (IOException e) {
         System.out.println("Falha ao criar arquivo");
      }
   }

   public static void gerarArquivoBinario(HistogramaVotos mapa, String arquivo) {
      try (ObjectOutputStream escritor = new ObjectOutputStream(new FileOutputStream(arquivo))) {
         escritor.writeObject(mapa);
      } catch (IOException e) {
         System.out.println("Falha ao criar arquivo");
      }
   }
}
