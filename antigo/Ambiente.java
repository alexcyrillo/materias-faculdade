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
     * Define as saídas do ambiente. Cada direção ou leva a um
     * outro ambiente ou é null (nenhuma saída para lá).
     * 
     * @param norte A saída norte.
     * @param leste A saída leste.
     * @param sul   A saída sul.
     * @param oeste A saída oeste.
     */
    public void ajustarSaidas(Ambiente norte, Ambiente leste, Ambiente sul, Ambiente oeste) {
        if (norte != null) {
            saidaNorte = norte;
            norte.setSaidaSul(this);
        }
        if (leste != null) {
            saidaLeste = leste;
            leste.setSaidaOeste(this);
        }
        if (sul != null) {
            saidaSul = sul;
            sul.setSaidaNorte(this);
        }
        if (oeste != null) {
            saidaOeste = oeste;
            oeste.setSaidaLeste(this);
        }
    }

}