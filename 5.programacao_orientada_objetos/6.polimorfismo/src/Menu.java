import java.util.Scanner;

public class Menu {
    private Scanner entrada;
    private Agenda agenda;

    public Menu(){
        entrada = new Scanner(System.in);
    }

    public void iniciar(){
        int op;
        do{
            exibirOpcoes();
            op = Integer.parseInt(entrada.nextLine());
            executarOpcao(op);
        }while(op != 5);
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
        switch (op){
            case 1:
                String nome, endereco, email, cpf, estadoCivil;
                agenda.adicionar("fisica", nome, endereco, email, cpf, estadoCivil);
                break;
            case 2:
                String nome, endereco, email, cnpj, inscricaoEstadual;
                agenda.adicionar("juridica", nome, endereco, email, cnpj, inscricaoEstadual);
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            default:
                System.out.println("Escolha uma opcao entre 1 e 5");
        }
    }
}
