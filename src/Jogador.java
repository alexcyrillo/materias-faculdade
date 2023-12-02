import java.util.Random;

/**
 * Essa classe é parte da aplicação "A Jornada de Guidolf".
 * 
 * Essa classe é responsável por inicilizar o objeto do tipo Jogador e
 * manusear seus atributos, permitindo a chamada de getters e setters
 * por outras classes que devem modificar o valor de seus atributos.
 * 
 * @author Lucas de Castro Nizio
 */

public class Jogador {
    private int vida;
    private int ataque;
    private int pocoesDeCura;
    private int armadurasReforcadas;
    private int espadasLendarias;

    public Jogador() {
        vida = 10; // Valor inicial de vida
        ataque = 5; // Valor inicial de ataque
        pocoesDeCura = 3; // Quantidade inicial de poções de cura
        armadurasReforcadas = 0; // Quantidade inicial de armaduras reforçadas
        espadasLendarias = 0; // Quantidade inicial de espadas lendárias
    }

    public int getVida() {
        return vida;
    }

    public void setVida(int novaVida) {
        vida = novaVida;
    }

    public int getAtaque() {
        return ataque;
    }

    public void setAtaque(int novoAtaque) {
        ataque = novoAtaque;
    }

    public int getPocoesDeCura() {
        return pocoesDeCura;
    }

    public void adicionarPocaoDeCura() {
        pocoesDeCura++;
    }

    public void usarPocaoDeCura() {
        if (pocoesDeCura > 0) {
            vida += 3; // Aumenta a vida em 3 pontos ao usar uma poção de cura
            pocoesDeCura--;
        }
    }

    public int getArmadurasReforcadas() {
        return armadurasReforcadas;
    }

    public void adicionarArmaduraReforcada() {
        Random random = new Random();
        int vidaExtra = random.nextInt(10);
        vida += vidaExtra;
        espadasLendarias++;
        armadurasReforcadas++;
    }

    public int getEspadasLendarias() {
        return espadasLendarias;
    }

    public void adicionarEspadaLendaria() {
        Random random = new Random();
        int ataqueExtra = random.nextInt(10);
        ataque += ataqueExtra;
        espadasLendarias++;
    }
}
