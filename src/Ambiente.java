class Ambiente {
    private String descricao;
    private Ambiente saidaNorte;
    private Ambiente saidaSul;
    private Ambiente saidaLeste;
    private Ambiente saidaOeste;
    private boolean primeiraChegada;

    public Ambiente(String descricao) {
        this.descricao = descricao;
        primeiraChegada = true;
    }

    public String getDescricao() {
        return descricao;
    }

    public Ambiente getSaidaNorte() {
        return saidaNorte;
    }

    public void setSaidaNorte(Ambiente ambiente) {
        saidaNorte = ambiente;
    }

    public Ambiente getSaidaSul() {
        return saidaSul;
    }

    public void setSaidaSul(Ambiente ambiente) {
        saidaSul = ambiente;
    }

    public Ambiente getSaidaLeste() {
        return saidaLeste;
    }

    public void setSaidaLeste(Ambiente ambiente) {
        saidaLeste = ambiente;
    }

    public Ambiente getSaidaOeste() {
        return saidaOeste;
    }

    public void setSaidaOeste(Ambiente ambiente) {
        saidaOeste = ambiente;
    }

    public boolean isPrimeiraChegada() {
        return primeiraChegada;
    }

    public void setPrimeiraChegada(boolean primeiraChegada) {
        this.primeiraChegada = primeiraChegada;
    }

    public static Ambiente taverna() {
        Ambiente taverna = new Ambiente("Taverna da cidade de Saskatchewan");
        taverna.setPrimeiraChegada(true);
        return taverna;
    }

    public static Ambiente forja() {
        Ambiente forja = new Ambiente("Forja");
        forja.setPrimeiraChegada(true);
        return forja;
    }

    public static Ambiente temploSagrado() {
        Ambiente temploSagrado = new Ambiente("Templo Sagrado");
        temploSagrado.setPrimeiraChegada(true);
        return temploSagrado;
    }

    public static Ambiente arenaTreinamento() {
        Ambiente arenaTreinamento = new Ambiente("Arena de Treinamento");
        arenaTreinamento.setPrimeiraChegada(true);
        return arenaTreinamento;
    }

    public static Ambiente pracaCidade() {
        Ambiente pracaCidade = new Ambiente("Praça da Cidade");
        pracaCidade.setPrimeiraChegada(true);
        return pracaCidade;
    }

    public static Ambiente florestaSombria() {
        Ambiente florestaSombria = new Ambiente("Floresta Sombria");
        florestaSombria.setPrimeiraChegada(true);
        return florestaSombria;
    }

    /**
     * Define as saidas do ambiente. Cada direcao ou leva a um
     * outro ambiente ou eh null (nenhuma saida para la).
     * 
     * @param norte A saida norte.
     * @param leste A saida leste.
     * @param sul   A saida sul.
     * @param oeste A saida oeste.
     */
    public void ajustarSaidas(Ambiente norte, Ambiente leste, Ambiente sul, Ambiente oeste) {
        if (norte != null)
            saidaNorte = norte;
        if (leste != null)
            saidaLeste = leste;
        if (sul != null)
            saidaSul = sul;
        if (oeste != null)
            saidaOeste = oeste;
    }
}