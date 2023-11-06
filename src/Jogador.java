class Jogador {
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
        armadurasReforcadas++;
    }

    public int getEspadasLendarias() {
        return espadasLendarias;
    }

    public void adicionarEspadaLendaria() {
        espadasLendarias++;
    }
}
