import java.util.Random;

public class Questao {
    private String enunciado;
    private int gabarito;
    private static int numQuestoes;
    private int idQuestao;

    Questao(){
        Random numeroAleatorio = new Random();
        int num1 = numeroAleatorio.nextInt(10);
        int num2 = numeroAleatorio.nextInt(10);
        enunciado = "Quanto é " + num1 + " * " + num2 + "?";
        gabarito = num1 * num2;
        idQuestao = numQuestoes + 1;
        numQuestoes++;
    }

    public int getIdQuestao(){
        return idQuestao;
    }
    
    public String getEnunciado(){
        return enunciado;
    }

    public boolean acertou(int resposta){
        return (resposta == gabarito); 
    } 
}
