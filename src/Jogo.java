import java.util.Random;
import java.util.Scanner;

class Jogo {
    private Jogador jogador;
    private Ambiente ambienteAtual;
    private int tentativas;

    public Jogo() {
        jogador = new Jogador();
        criarAmbientes();
        ambienteAtual = Ambiente.taverna(); // Começa na Taverna
        tentativas = 5;
    }

    private void criarAmbientes() {
        Ambiente taverna, pracaCidade, forja, arenaTreinamento, temploSagrado, florestaSombria;
        // Cria os ambientes
        taverna = Ambiente.taverna();
        pracaCidade = Ambiente.pracaCidade();
        forja = Ambiente.forja();
        arenaTreinamento = Ambiente.arenaTreinamento();
        temploSagrado = Ambiente.temploSagrado();
        florestaSombria = Ambiente.florestaSombria();

        // Inicializa as saídas dos ambientes
        taverna.ajustarSaidas(pracaCidade, forja, arenaTreinamento, null);
        pracaCidade.ajustarSaidas(null, temploSagrado, null, taverna);
        forja.ajustarSaidas(arenaTreinamento, florestaSombria, taverna, null);
        arenaTreinamento.ajustarSaidas(null, null, forja, null);
        temploSagrado.ajustarSaidas(florestaSombria, null, null, pracaCidade);
        florestaSombria.ajustarSaidas(null, temploSagrado, null, forja);

        ambienteAtual = taverna; // O jogo começa na taverna
    }

    public void jogar() {
        System.out.println("Bem-vindo à Jornada de Guidolf!");
        System.out.println("O objetivo é coletar recursos e derrotar o chefe na Floresta Sombria.");

        while (tentativas > 0) {
            exibirStatus();
            Comando comando = receberComando();
            processarComando(comando);
        }

        System.out.println("Você esgotou suas tentativas. A jornada de Guidolf chegou ao fim.");
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
        System.out.println("Possíveis comandos: norte, sul, leste, oeste");
    }

    private Comando receberComando() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("> ");
        String input = scanner.nextLine();
        return new Comando(input, null);
    }

    private void processarComando(Comando comando) {
        String direcao = comando.getPalavra1();
        Ambiente proximoAmbiente = null;

        switch (direcao) {
            case "norte":
                proximoAmbiente = ambienteAtual.getSaidaNorte();
                break;
            case "sul":
                proximoAmbiente = ambienteAtual.getSaidaSul();
                break;
            case "leste":
                proximoAmbiente = ambienteAtual.getSaidaLeste();
                break;
            case "oeste":
                proximoAmbiente = ambienteAtual.getSaidaOeste();
                break;
            default:
                System.out.println("Comando inválido. Use 'norte', 'sul', 'leste' ou 'oeste'.");
                return;
        }

        if (proximoAmbiente != null) {
            tentativas--;
            ambienteAtual = proximoAmbiente;
            explorarAmbiente();
        } else {
            System.out.println("Não há saída nessa direção.");
        }
    }

    private void explorarAmbiente() {
        System.out.println("Explorando " + ambienteAtual.getDescricao() + "...");
        Random random = new Random();
        int chanceRecurso = random.nextInt(101);

        if (ambienteAtual == Ambiente.forja() && ambienteAtual.isPrimeiraChegada()) {
            System.out.println("Esperando 10 segundos para ganhar 5 de dano e 2 de vida...");
            try {
                Thread.sleep(10000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            jogador.setVida(jogador.getVida() + 2);
        }

        if (ambienteAtual == Ambiente.forja() || ambienteAtual == Ambiente.temploSagrado()) {
            if (chanceRecurso > 50) {
                System.out.println("Você encontrou um recurso!");
                coletarRecurso();
            } else {
                System.out.println("Não encontrou nenhum recurso.");
                jogador.setVida(jogador.getVida() - 2);
            }
        } else if (ambienteAtual == Ambiente.arenaTreinamento()) {
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
        } else if (ambienteAtual == Ambiente.pracaCidade()) {
            int valorDado = random.nextInt(6) + 1;
            System.out.println("Você jogou o dado e obteve um " + valorDado + ".");
            if (valorDado == 6) {
                System.out.println("Você encontrou uma poção de cura!");
                jogador.adicionarPocaoDeCura();
            } else {
                System.out.println("Você não encontrou nada.");
            }
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
}