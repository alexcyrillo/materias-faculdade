import java.util.ArrayList;
import java.io.*;
/**
 * Esta classe é parte da aplicacao "A Jornada de Guidolf".
 * 
 * Esse analisador lê uma arquivo que contém todos os comandos que serão usados durante o uso
 * da aplicação e usa um por um, executando as ações geradas por cada comando.
 * Cada vez que é chamado, ele lê uma linha do terminal e tenta interpretar a linha como um 
 * comando de duas palavras. Ele retorna o comando como um objeto da classe Comando.
 *
 * O analisador tem um conjunto de palavras de comando conhecidas. Ele compara a entrada do 
 * usuário com os comandos conhecidos, e se a entrada não é um dos comandos conhecidos, ele 
 * retorna um objeto comando que é marcado como um comando desconhecido.
 * 
 * @author Caua Marcos de Oliveira Silva & Lucas de Castro Nizio
 */
public class Analisador  {
    // guarda todas as palavras de comando validas
    private PalavrasComando palavrasDeComando;
    private ArrayList<String> comandos;
    // origem da entrada de comandos

    /**
     * Cria um analisador para ler do terminal.
     */
    public Analisador()  {
        palavrasDeComando = new PalavrasComando();
        comandos = new ArrayList<>();
    }

    /**
     * @return O próximo comando do usuario
     */
    public Comando pegarComando()  {

        // o primeiro comando do ArrayList é usado e removido do ArrayList
        String linha = comandos.get(0);
        comandos.remove(0);

        // guardará até duas palavras usadas no comando
        String palavra1 = null;
        String palavra2 = null;

        // imprime o comando que será executado
        System.out.println("> " + linha);

        // quebra o comando do usuário em várias palavras, usando espaços em branco como separadores. 
        // Exemplo: se ele digitar "ir norte", o comando vai gerar um vetor com as duas palavras ["ir", "norte"].
        String[] palavras = linha.trim().split("\\s+");

        // guarda a primeira e a segunda palavras digitadas pelo usuário, se houverem.
        if (palavras.length >= 1) {
            palavra1 = palavras[0];
        }
        if (palavras.length >= 2) {
            palavra2 = palavras[1];
        }

        // Agora verifica se esta palavra é conhecida. Se for, cria um comando com ela.
        // Se não, cria um comando "null" (para comando desconhecido)
        if(palavrasDeComando.ehComando(palavra1)) {
            return new Comando(palavra1, palavra2);
        }
        else {
            return new Comando(null, palavra2); 
        }
    }

    /**
     * Retorna os comandos válidos do jogo
     * 
     * @return Uma lista de strings que representam os comandos válidos do jogo
     */
    public ArrayList<String> getComandosValidos() {
        return palavrasDeComando.getComandosValidos();
    }

    public void lerComandos() {
        try(BufferedReader arq = new BufferedReader(new FileReader("comandos.txt"))) {
            String linha = arq.readLine();
            while (linha != null) {
                comandos.add(linha);
                linha = arq.readLine();
            }
        } catch (FileNotFoundException e) {
            System.out.println("Arquivo  não encontrado!");
        } catch (IOException e) {
			System.out.println("Falha ao tentar ler comandos");
		}
    }
}
