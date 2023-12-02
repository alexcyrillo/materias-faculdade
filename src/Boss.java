import java.util.Random;

public class Boss {
    private int vida;
    private int ataque;

    public Boss() {
        this.vida = 50;
        this.ataque = 2;
    }

    public int atacar() {
        Random random = new Random();
        int chanceHabilidade = random.nextInt(10) + 1;

        if (chanceHabilidade <= 3) {
            int danoAdicional = random.nextInt(5); 
            System.out.println("O Boss utilizou uma habilidade especial!");
            System.out.println("Dano adicional causado: " + danoAdicional);
            return danoAdicional + ataque;
        } else {
            System.out.println("O Boss atacou!");
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
