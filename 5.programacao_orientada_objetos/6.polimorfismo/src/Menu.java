import java.util.Scanner;
import java.util.List;

public class Menu {
    private Scanner entrada;
    private Agenda agenda;

    public Menu() {
        entrada = new Scanner(System.in);
        agenda = new Agenda();
    }

    public void iniciar() {
        int op;
        do {
            exibirOpcoes();
            op = Integer.parseInt(entrada.nextLine());
            executarOpcao(op);
        } while (op != 5);
    }

    private void exibirOpcoes() {
        System.out.println("###### MENU DE OPÇÕES ######");
        System.out.println("1 - Cadastrar uma pessoa física");
        System.out.println("2 - Cadastrar uma pessoa jurídica");
        System.out.println("3 - Remover um contato");
        System.out.println("4 - Imprimir dados da agenda");
        System.out.println("5 - Sair");
        System.out.print("Escolha a sua opcao: ");
    }

    private void executarOpcao(int op) {
        switch (op) {
            case 1:
                cadastroPessoaFisica();
                break;
            case 2:
                cadastroPessoaJuridica();
                break;
            case 3:
                removerContato();
                break;
            case 4:
                imprimirLista();
                break;
            case 5:
                break;
            default:
                System.out.println("Escolha uma opcao entre 1 e 5");
        }
    }

    private void cadastroPessoaFisica() {
        String nome = entrada.nextLine();
        String endereco = entrada.nextLine();
        String email = entrada.nextLine();
        String cpf = entrada.nextLine();
        String estadoCivil = entrada.nextLine();
        agenda.adicionar(nome, endereco, email, cpf, estadoCivil);
    }

    private void cadastroPessoaJuridica() {
        String nome = entrada.nextLine();
        String endereco = entrada.nextLine();
        String email = entrada.nextLine();
        String cnpj = entrada.nextLine();
        int inscricaoEstadual = Integer.parseInt(entrada.nextLine());
        agenda.adicionar(nome, endereco, email, cnpj, inscricaoEstadual);
    }

    private void removerContato() {
        String id = entrada.nextLine();
        boolean excluido = agenda.remover(id);
        if (!excluido)
            System.out.println("erro");
    }

    private void imprimirLista() {
        List<Contato> listaContatos = agenda.getContatos();
        for (Contato contato : listaContatos) {
            System.out.println(contato);
        }
    }
}
