import java.util.Random;

/**
 * Essa classe é parte da aplicação "A Jornada de Guidolf".
 * 
 * Essa classe é responsável por inicilizar o objeto do tipo Boss e
 * manusear seus atributos, permitindo a chamada de getters e setters
 * por outras classes que devem modificar o valor de seus atributos, bem
 * como definir a quantidade de dano que o Boss causará ao atacar o jogador.
 * 
 * @author Lucas de Castro Nizio
 */

public class Boss {
    private int vida;
    private int ataque;

    public Boss() {
        this.vida = 50;
        this.ataque = 2;
    }

    public int atacar() {
        Random random = new Random();
        int chanceHabilidade = random.nextInt(100) + 1;

        if (chanceHabilidade <= 35) {
            int danoAdicional = random.nextInt(4);
            return danoAdicional + ataque;
        } else {
            return ataque;
        }
    }

    public int getVida() {
        return vida;
    }

    public int getAtaque() {
        return ataque;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }

    public void setAtaque(int ataque) {
        this.ataque = ataque;
    }

}
