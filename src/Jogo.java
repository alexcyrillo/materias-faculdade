import java.util.Random;

/**
 * Essa é a classe principal da aplicação "A Jornada de Guidolf".
 * 
 * Neste jogo, o jogador pode mover seu personagem por vários ambientes, jogar 
 * dados para obter vantagens e melhorias até que decida em diferentes locais do
 * mapa. O objetivo final é derrotar o Boss na Floresta Sombria.
 * 
 * Para que a quantidade de vantagens obtidas seja limitada, o jogador só pode
 * se movimentar pelo mapa por 5 vezes. Ao atingir esse limite, ele é redirecionado 
 * automaticamente para a Floresta Sombria, para que ocorra a batalha final.
 * 
 * Para jogar esse jogo, é preciso instanciar essa classe e chamar o método "jogar".
 * 
 * Essa classe principal cria e inicializa todas as outras: ela cria os
 * ambientes, o analisador e começa o jogo. Ela também avalia e executa os comandos
 * que o analisador retorna.
 * 
 * @author Alex Cyrillo de Sousa Borges, Cauã Marcos de Oliveira Silva, Lucas de Castro Nizio
 */
public class Jogo {
    // analisador de comandos do jogo
    private Analisador analisador;
    // ambiente onde se encontra o jogador
    private Ambiente ambienteAtual;
    // numero de tentativas
    private int tentativas;
    private Jogador jogador;
    private Boss boss;
    private boolean terminado;

    /**
     * Cria o jogo e incializa seu mapa interno.
     */
    public Jogo() {
        jogador = new Jogador();
        criarAmbientes();
        analisador = new Analisador();
        tentativas = 5;
        boss = new Boss();
        terminado = false;
    }

    /**
     * Cria todos os ambientes e liga as saidas deles
     */
    private void criarAmbientes() {
        // criando os ambientes
        Ambiente taverna = new Ambiente("Taverna da cidade de Saskatchewan");
        Ambiente forja = new Ambiente("Forja");
        Ambiente temploSagrado = new Ambiente("Templo Sagrado");
        Ambiente arenaTreinamento = new Ambiente("Arena de Treinamento");
        Ambiente pracaCidade = new Ambiente("Praça da Cidade");
        Ambiente florestaSombria = new Ambiente("Floresta Sombria");
        
        // inicializando as saidas dos ambientes
        taverna.ajustarSaida("norte", pracaCidade);
        taverna.ajustarSaida("leste", arenaTreinamento);
        taverna.ajustarSaida("sul", forja);
        pracaCidade.ajustarSaida("leste", temploSagrado);
        pracaCidade.ajustarSaida("oeste", taverna);
        temploSagrado.ajustarSaida("norte", pracaCidade);
        temploSagrado.ajustarSaida("sul", florestaSombria);
        forja.ajustarSaida("norte", arenaTreinamento);
        forja.ajustarSaida("leste", florestaSombria);
        forja.ajustarSaida("oeste", taverna);
        arenaTreinamento.ajustarSaida("sul", forja);
        arenaTreinamento.ajustarSaida("oeste", taverna);

        ambienteAtual = pracaCidade; // o jogo comeca na Praça da Cidade
    }

    /**
     * Rotina principal do jogo. Fica em loop até o jogo terminar.
     */
    public void jogar() {
        imprimirBoasVindas();

        // Entra no loop de comando principal. Aqui nós repetidamente lemos comandos e
        // os executamos até o jogo terminar.
        analisador.lerComandos();
        while (!terminado && tentativas > 0) {
            Comando comando = analisador.pegarComando();
            processarComando(comando);
        }
        if(tentativas == 0){
            System.out.println("Você esgotou suas tentativas. A jornada de Guidolf chegou ao fim. Enfrente os inimigos na Floresta Sombria!");
            // Colocar o jogador na Floresta Sombria
            ambienteAtual = new Ambiente("Floresta Sombria");
            explorarAmbiente();
            imprimirLocalizacaoAtual();
        }
        System.out.println("Obrigado por jogar. Até mais!");
    }

    /**
     * Imprime a mensagem de abertura para o jogador.
     */
    private void imprimirBoasVindas() {
        System.out.println();
        System.out.println("Bem-vindo a Jornada de Guidolf");
        System.out.println(
                "A sua jornada começa aqui, onde voce ira assumar o papel de Guidolf, um corajoso\r\n" + //
                        "guerreiro determinado a coletar recursos cruciais para a batalha épica que ocorrerá\r\n" + //
                        "na Floresta Sombria contra um inimigo proveniente de outra cidade.\r");
        System.out.println("Digite 'ajuda' se voce precisar de ajuda.");
        System.out.println();

        imprimirLocalizacaoAtual();
    }

    /**
     * Dado um comando, processa-o (ou seja, executa-o)
     * 
     * @param comando O Comando a ser processado.
     * @return true se o comando finaliza o jogo.
     */
    private void processarComando(Comando comando) {

        if (comando.ehDesconhecido()) {
            System.out.println("Eu nao entendi o que voce disse...");
            return;
        }

        String palavraDeComando = comando.getPalavraDeComando();
        if (palavraDeComando.equals("ajuda")) {
            imprimirAjuda();
        } else if (palavraDeComando.equals("ir")) {
            irParaAmbiente(comando);
        } else if (palavraDeComando.equals("sair")) {
            terminado = sair(comando);
        } else if (palavraDeComando.equals("mapa")){
            imprimirMapa();
        } else if (palavraDeComando.equals("status")){
            exibirStatus();
        }
    }

    /**
     * Exibe informações de ajuda.
     * Aqui nós imprimimos algo bobo e enigmático e a lista de palavras de comando
     */
    private void imprimirAjuda() {
        System.out.println("Voce esta perdido. Mas será que esta sozinho?");
        System.out.println("Voce caminha pelo(a) " + ambienteAtual.getDescricao());
        System.out.println("Suas palavras de comando sao:");
        System.out.println("   " + analisador.getComandosValidos());
    }

    private void imprimirMapa() {
        System.out.printf("%102s\n", "Cidade de Saskatchewan");
        System.out.println(
                "                                  -----------------------                                  Norte");
        System.out.println(
                "                                  #                     #                                    ^ ");
        System.out.println(
                "       -------------------------  #   Praca da Cidade   #  -------------------------         |    ");
        System.out.println(
                "       |                          #                     #                          |  Oeste-- --Leste");
        System.out.println(
                "       |                          -----------------------                          |         |");
        System.out.println(
                "       |                                                                           |        Sul");
        System.out.println("       |                                                                           |");
        System.out.println("       |                                                                           |");
        System.out
                .println("---------------               -----------------------                       --------------");
        System.out
                .println("#             #               #                     #                       #            #");
        System.out
                .println("#   Taverna   #  -----------  #   Arena de Treino   #                       #   Templo   #");
        System.out
                .println("#             #               #                     #                       #            #");
        System.out
                .println("---------------               -----------------------                       --------------");
        System.out.println("       |                                 |                                         |");
        System.out.println("       |                                 |                                         |");
        System.out.println("       |                                 |                                         |");
        System.out.println(
                "       |                           -------------                       ------------------------");
        System.out.println(
                "       |                           #           #                       #                      #");
        System.out.println(
                "       --------------------------  #   Forja   #  -------------------  #   Floresta Sombria   #");
        System.out.println(
                "                                   #           #                       #                      #");
        System.out.println(
                "                                   -------------                       ------------------------ ");
    }

    /**
     * Tenta ir em uma direcao. Se existe uma saída para lá entra no novo ambiente,
     * caso contrário imprime mensagem de erro.
     */
    private void irParaAmbiente(Comando comando) {
        // se não há segunda palavra, não sabemos pra onde ir...
        if (!comando.temSegundaPalavra()) {
            System.out.println("Ir pra onde?");
            return;
        }

        String direcao = comando.getSegundaPalavra();

        // Tenta sair do ambiente atual
        Ambiente proximoAmbiente = ambienteAtual.getSaida(direcao);

        if (proximoAmbiente == null) {
            System.out.println("Nao ha passagem!");
        } else {
            tentativas--;
            ambienteAtual = proximoAmbiente;
            explorarAmbiente();
        }
    }

    /**
     * Exibe as informações da localização atual para o jogador
     */
    private void imprimirLocalizacaoAtual() {
        System.out.println("Voce esta " + ambienteAtual.getDescricao());

        System.out.print("Saidas: " + ambienteAtual.direcoesDeSaida());
        System.out.println();
    }

    /**
     * "Sair" foi digitado. Verifica o resto do comando pra ver se nós queremos
     * realmente sair do jogo.
     * 
     * @return true, se este comando sai do jogo, false, caso contrário.
     */
    private boolean sair(Comando comando) {
        if (comando.temSegundaPalavra()) {
            System.out.println("Sair o que?");
            return false;
        } else {
            return true; // sinaliza que o jogador realmente deseja sair
        }
    }

    private void explorarAmbiente() {
        System.out.println("Explorando " + ambienteAtual.getDescricao() + "...");
        Random random = new Random();
        int chanceRecurso = random.nextInt(101);

        if (ambienteAtual.getDescricao().equals("Forja") && ambienteAtual.isPrimeiraChegada()) {
            System.out.println("Esperando 10 segundos para ganhar 5 de dano e 2 de vida...");
            try {
                Thread.sleep(10000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            jogador.setVida(jogador.getVida() + 2);
            ambienteAtual.setPrimeiraChegada(false);
        }

        if (ambienteAtual.getDescricao().equals("Forja") || ambienteAtual.getDescricao().equals("Templo Sagrado")) {
            if (chanceRecurso > 30) {
                System.out.println("Você encontrou um recurso!");
                coletarRecurso();
            } else {
                System.out.println("Não encontrou nenhum recurso.");
                jogador.setVida(jogador.getVida() - 2);
            }
        } else if (ambienteAtual.getDescricao().equals("Arena de Treinamento")) {
            int valorDado = random.nextInt(6) + 1;
            System.out.println("Você jogou o dado e obteve um " + valorDado + ".");
            if (valorDado == 6) {
                System.out.println("Você ganhou 5 de ataque!");
                jogador.setAtaque(jogador.getAtaque() + 5);
            } else if (valorDado == 1) {
                System.out.println("Você perdeu 2 de vida.");
                jogador.setVida(jogador.getVida() - 2);
            }
            if (chanceRecurso > 75) {
                System.out.println("Você encontrou uma espada lendária!");
                jogador.adicionarEspadaLendaria();
            }
        } else if (ambienteAtual.getDescricao().equals("Praça da Cidade")) {
            int valorDado = random.nextInt(6) + 1;
            System.out.println("Você jogou o dado e obteve um " + valorDado + ".");
            if (valorDado == 6) {
                System.out.println("Você encontrou uma poção de cura!");
                jogador.adicionarPocaoDeCura();
            } else {
                System.out.println("Você não encontrou nada.");
            }
        } else if (ambienteAtual.getDescricao().equals("Floresta Sombria")){
            System.out.println("Você entrou na Floresta Sombria e encontrou o Boss!");
            batalharComBoss();
        }
    }

    private void coletarRecurso() {
        Random random = new Random();
        int tipoRecurso = random.nextInt(3);

        switch (tipoRecurso) {
            case 0:
                System.out.println("Você encontrou uma poção de cura!");
                jogador.adicionarPocaoDeCura();
                break;
            case 1:
                System.out.println("Você encontrou uma armadura reforçada!");
                jogador.adicionarArmaduraReforcada();
                break;
            case 2:
                System.out.println("Você encontrou uma espada lendária!");
                jogador.adicionarEspadaLendaria();
                break;
        }
    }


    private void exibirStatus() {
        System.out.println("----------");
        System.out.println("Tentativas restantes: " + tentativas);
        System.out.println("Vida: " + jogador.getVida());
        System.out.println("Ataque: " + jogador.getAtaque());
        System.out.println("Poções de Cura: " + jogador.getPocoesDeCura());
        System.out.println("Armaduras Reforçadas: " + jogador.getArmadurasReforcadas());
        System.out.println("Espadas Lendárias: " + jogador.getEspadasLendarias());
        System.out.println("Você está " + ambienteAtual.getDescricao());
    }

    private void batalharComBoss() {
        // Enquanto o Boss e o jogador estiverem vivos
        while (boss.getVida() > 0 && jogador.getVida() > 0) {
            // Jogador ataca o Boss
            int danoJogador = jogador.getAtaque();
            boss.setVida(boss.getVida() - danoJogador);
            if(boss.getVida() < 0)
                boss.setVida(0);
            System.out.println("Você causou " + danoJogador + " de dano ao Boss. Vida do Boss: " + boss.getVida());

            // Verifica se o Boss ainda está vivo
            if (boss.getVida() == 0) {
                System.out.println("Você derrotou o Boss! Parabéns!");
                terminado = true;
                break;
            }

            // Boss ataca o jogador
            int danoBoss = boss.atacar();
            jogador.setVida(jogador.getVida() - danoBoss);
            if (jogador.getVida() < 0)
                jogador.setVida(0);
            System.out.println("O Boss causou " + danoBoss + " de dano a você. Sua vida: " + jogador.getVida());

            // Verifica se o jogador ainda está vivo
            if (jogador.getVida() == 0) {
                System.out.println("Você foi derrotado pelo Boss. Game over!");
                terminado = true;
                break;
            }
        }
    }
}
