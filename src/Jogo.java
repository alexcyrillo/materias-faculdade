import java.util.Random;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

/**
 * Essa é a classe principal da aplicação "A Jornada de Guidolf".
 * 
 * Neste jogo, o jogador pode mover seu personagem por vários ambientes, jogar
 * dados para obter vantagens e melhorias até que decida em diferentes locais do
 * mapa. O objetivo final é derrotar o Boss na Floresta Sombria.
 * 
 * Para que a quantidade de vantagens obtidas seja limitada, o jogador só pode
 * se movimentar pelo mapa por 5 vezes. Ao atingir esse limite, ele é
 * redirecionado
 * automaticamente para a Floresta Sombria, para que ocorra a batalha final.
 * 
 * Para jogar esse jogo, é preciso instanciar essa classe e chamar o método
 * "jogar".
 * 
 * Essa classe principal cria e inicializa todas as outras: ela cria os
 * ambientes, o analisador e começa o jogo. Ela também avalia e executa os
 * comandos
 * que o analisador retorna.
 * 
 * @author Alex Cyrillo de Sousa Borges, Cauã Marcos de Oliveira Silva, Lucas de
 *         Castro Nizio
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
    private StringBuilder mensagem;

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
        Ambiente taverna = new Ambiente("Taverna");
        Ambiente forja = new Ambiente("Forja");
        Ambiente temploSagrado = new Ambiente("Templo Sagrado");
        Ambiente arenaTreinamento = new Ambiente("Arena de Treinamento");
        Ambiente pracaCidade = new Ambiente("Praca da Cidade");
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
    public String jogar(String escrito) {
        // Entra no loop de comando principal. Aqui nós repetidamente lemos comandos e
        // os executamos até o jogo terminar.
        // analisador.lerComandos();
        mensagem = new StringBuilder();
        if (!terminado && tentativas > 0) {
            Comando comando = analisador.pegarComando(escrito);
            mensagem.append(processarComando(comando));
            return mensagem.toString();
        }
        if (tentativas == 0) {
            // Colocar o jogador na Floresta Sombria
            ambienteAtual = new Ambiente("Floresta Sombria");
            mensagem.append(explorarAmbiente());
            mensagem.append(imprimirLocalizacaoAtual());
            return mensagem.append(
                    "Você esgotou suas tentativas. A jornada de Guidolf chegou ao fim. Enfrente os inimigos na Floresta Sombria! \n")
                    .toString();
        }
        return mensagem.append("Obrigado por jogar. Até mais! \n").toString();
    }

    /**
     * Imprime a mensagem de abertura para o jogador.
     */
    public String imprimirBoasVindas() {
        return ("Bem-vindo a Jornada de Guidolf\nA sua jornada começa aqui, onde você irá assumir o papel de Guidolf, um corajoso guerreiro determinado a coletar recursos cruciais para a batalha épica que ocorrerá na Floresta Sombria contra um inimigo proveniente de outra cidade.\nDigite 'ajuda' se você precisar de ajuda.\n\n");
    }

    /**
     * Dado um comando, processa-o (ou seja, executa-o)
     * 
     * @param comando O Comando a ser processado.
     * @return true se o comando finaliza o jogo.
     */
    private String processarComando(Comando comando) {
        if (comando.ehDesconhecido()) {
            return "Eu nao entendi o que voce disse...";
        }
        String palavraDeComando = comando.getPalavraDeComando();
        if (palavraDeComando.equals("ajuda")) {
            return imprimirAjuda();
        } else if (palavraDeComando.equals("ir")) {
            return irParaAmbiente(comando);
        } else if (palavraDeComando.equals("sair")) {
            terminado = sair(comando);
        }
        return null;
    }

    /**
     * Exibe informações de ajuda.
     * Aqui nós imprimimos algo bobo e enigmático e a lista de palavras de comando
     */
    private String imprimirAjuda() {
        StringBuilder saida = new StringBuilder();
        saida.append("Você está perdido. Mas será que está sozinho?\n");
        saida.append("Você caminha pelo(a) ").append(ambienteAtual.getDescricao()).append("\n");
        saida.append("Suas palavras de comando são:\n");
        saida.append("   ").append(analisador.getComandosValidos());
        return saida.toString();
    }

    /**
     * Tenta ir em uma direcao. Se existe uma saída para lá entra no novo ambiente,
     * caso contrário imprime mensagem de erro.
     */
    private String irParaAmbiente(Comando comando) {
        // se não há segunda palavra, não sabemos pra onde ir...
        if (!comando.temSegundaPalavra()) {
            return "Ir pra onde?";
        }

        String direcao = comando.getSegundaPalavra();

        // Tenta sair do ambiente atual
        Ambiente proximoAmbiente = ambienteAtual.getSaida(direcao);

        if (proximoAmbiente == null) {
            return "Nao ha passagem!";
        } else {
            tentativas--;
            ambienteAtual = proximoAmbiente;
            return explorarAmbiente();
        }
    }

    /**
     * Exibe as informações da localização atual para o jogador
     */
    public String imprimirLocalizacaoAtual() {
        System.out.println(ambienteAtual.getDescricao());
        return (ambienteAtual.getDescricao());

    }

    /**
     * "Sair" foi digitado. Verifica o resto do comando pra ver se nós queremos
     * realmente sair do jogo.
     * 
     * @return true, se este comando sai do jogo, false, caso contrário.
     */
    private boolean sair(Comando comando) {
        if (comando.temSegundaPalavra()) {
            mensagem.append("Sair o que?");
            return false;
        } else {
            return true; // sinaliza que o jogador realmente deseja sair
        }
    }

    private String explorarAmbiente() {
        StringBuilder saida = new StringBuilder();
        Random random = new Random();
        int chanceRecurso = random.nextInt(101);

        if (ambienteAtual.getDescricao().equals("Forja") && ambienteAtual.isPrimeiraChegada()) {
            saida.append("Esperando 10 segundos para ganhar 5 de dano e 2 de vida..");
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
                saida.append("Você encontrou um recurso!\n");
                saida.append(coletarRecurso());
            } else {
                saida.append("Não encontrou nenhum recurso.\n");
                jogador.setVida(jogador.getVida() - 2);
            }
        } else if (ambienteAtual.getDescricao().equals("Arena de Treinamento")) {
            int valorDado = random.nextInt(6) + 1;
            saida.append("Você jogou o dado e obteve um ").append(valorDado).append(".\n");
            if (valorDado == 6) {
                saida.append("Você ganhou 5 de ataque!\n");
                jogador.setAtaque(jogador.getAtaque() + 5);
            } else if (valorDado == 1) {
                saida.append("Você perdeu 2 de vida.\n");
                jogador.setVida(jogador.getVida() - 2);
            } else {
                saida.append("Você não ganhou nada!\n");
            }
            if (chanceRecurso > 75) {
                saida.append("Você encontrou uma espada lendária!\n");
                jogador.adicionarEspadaLendaria();
            }
        } else if (ambienteAtual.getDescricao().equals("Praça da Cidade")) {
            int valorDado = random.nextInt(6) + 1;
            saida.append("Você jogou o dado e obteve um ").append(valorDado).append(".\n");
            if (valorDado == 6) {
                saida.append("Você encontrou uma poção de cura!\n");
                jogador.adicionarPocaoDeCura();
            } else {
                saida.append("Você não encontrou nada.\n");
            }
        } else if (ambienteAtual.getDescricao().equals("Floresta Sombria")) {
            saida.append("Você entrou na Floresta Sombria e encontrou o Boss!\n");
            saida.append(batalharComBoss());
        }

        saida.append(ambienteAtual.getDescricao() + " explorado(a)");

        return saida.toString();
    }

    private String coletarRecurso() {
        Random random = new Random();
        int tipoRecurso = random.nextInt(3);

        switch (tipoRecurso) {
            case 0:
                return "Você encontrou uma poção de cura!\n";
            case 1:
                return "Você encontrou uma armadura reforçada!\n";
            case 2:
                return "Você encontrou uma espada lendária!\n";
        }
        return null;
    }

    public String exibirStatus() {
        StringBuilder saida = new StringBuilder();
        saida.append("Tentativas restantes: ").append(tentativas).append("\n");
        saida.append("Vida: ").append(jogador.getVida()).append("\n");
        saida.append("Ataque: ").append(jogador.getAtaque()).append("\n");
        saida.append("Poções de Cura: ").append(jogador.getPocoesDeCura()).append("\n");
        saida.append("Armaduras Reforçadas: ").append(jogador.getArmadurasReforcadas()).append("\n");
        saida.append("Espadas Lendárias: ").append(jogador.getEspadasLendarias()).append("\n");

        return saida.toString();
    }

    private String batalharComBoss() {
        StringBuilder saida = new StringBuilder();
        StringBuilder relatorioBatalha = new StringBuilder();
        relatorioBatalha.append("\nRelatório da Batalha:\n");
        // Enquanto o Boss e o jogador estiverem vivos
        int turno = 1;
        while (boss.getVida() > 0 && jogador.getVida() > 0) {
            relatorioBatalha.append("Turno ").append(turno).append("\n");
            // Jogador ataca o Boss
            saida.append("Você ataca o Boss \n");
            int danoJogador = jogador.getAtaque();
            boss.setVida(boss.getVida() - danoJogador);
            if (boss.getVida() < 0)
                boss.setVida(0);
            saida.append("Você causou ").append(danoJogador).append(" de dano ao Boss. Vida do Boss: ")
                    .append(boss.getVida()).append("\n");

            // Verifica se o Boss ainda está vivo
            if (boss.getVida() == 0) {
                saida.append("Você derrotou o Boss! Parabéns!\n");
                terminado = true;
                break;
            }

            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            // Boss ataca o jogador
            saida.append("Você é atacado pelo Boss \n");
            int danoBoss = boss.atacar();
            if (danoBoss > boss.getAtaque()) {
                saida.append("O Boss utilizou uma habilidade especial\n");
                saida.append("Dano adicional: ").append(danoBoss - boss.getAtaque()).append("\n");
            } else {
                saida.append("O Boss atacou! \n");
            }
            jogador.setVida(jogador.getVida() - danoBoss);
            if (jogador.getVida() < 5) {
                jogador.usarPocaoDeCura();
                saida.append("Você usaou uma poção de cura!");
            }
            if (jogador.getVida() < 0)
                jogador.setVida(0);
            saida.append("O Boss causou ").append(danoBoss).append(" de dano a você. Sua vida: ")
                    .append(jogador.getVida()).append("\n");

            // Verifica se o jogador ainda está vivo
            if (jogador.getVida() == 0) {
                saida.append("Você foi derrotado pelo Boss. Game over!\n");
                terminado = true;
                break;
            }
            relatorioBatalha.append(saida);
            turno++;
        }
        salvarRelatorioEmArquivo(relatorioBatalha.toString());
        return saida.toString();
    }

    private void salvarRelatorioEmArquivo(String logBatalha) {
        String nomeArquivo = "./files/relatorio_batalha.txt";
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(nomeArquivo))) {
            writer.write(logBatalha);
            System.out.println("Relatório da batalha salvo com sucesso no arquivo: " + nomeArquivo);
        } catch (IOException e) {
            System.out.println("Erro ao salvar o relatório da batalha no arquivo: " + e.getMessage());
        }
    }
}
