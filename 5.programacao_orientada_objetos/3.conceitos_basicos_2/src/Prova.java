import java.util.Scanner;
public class Prova {
    private Questao[] questao;

    Prova(){
        questao = new Questao[5];
        for(int i = 0; i < 5; i++)
            questao[i] = new Questao();
    }
    
    public void aplicar(){
        Scanner ler = new Scanner(System.in);
        int resposta = 0;
        int tentativa = 0;
        boolean acerto = false;
        
        for(int i = 0; i < 5; i++){
            resposta = 0;
            tentativa = 0;
            acerto = false;
            System.out.println("Questão " + questao[i].getIdQuestao() + ") " + questao[i].getEnunciado());
            
            while(!acerto && tentativa < 2){
                resposta = ler.nextInt();
                acerto = questao[i].acertou(resposta);
                if(!acerto && tentativa == 0)
                    System.out.println("Você ganhou mais uma chance! Digite outra resposta para a questão");
                tentativa++;
            }

            if(acerto)
                System.out.println("Você tentou " + tentativa + " vez(es) e acertou a questão.");
            else
                System.out.println("Você tentou 2 vezes e errou a questão");    
        }
        ler.close();
    }
}