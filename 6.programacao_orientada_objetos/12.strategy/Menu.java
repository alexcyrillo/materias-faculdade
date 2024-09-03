import java.util.Scanner;

public class Menu {
    private Investir investir;

    public void iniciar() {
        Scanner scanner = new Scanner(System.in);
        String continuar = "Sim";
        do {
            System.out.println("Entre com o valor inicial do investimento: ");
            double valor = scanner.nextDouble();

            scanner.nextLine();

            System.out.println("Entre com o tempo (meses) da aplicação: ");
            int tempo = scanner.nextInt();

            scanner.nextLine();

            System.out.print("Escolha o tipo do investidor:\r\n" + //
                    "1 - Conservador\r\n" + //
                    "2 - Moderado\r\n" + //
                    "3 - Arrojado\r\n" + //
                    "Digite sua opcao: ");
            int opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    investir = new Investir(new Conservador());
                    System.out.println("Valor final esperado: " + investir.ExecutarSimulacao(valor, tempo));
                    break;
                case 2:
                    investir = new Investir(new Moderado());
                    System.out.println("Valor final esperado: " + investir.ExecutarSimulacao(valor, tempo));
                    break;
                case 3:
                    investir = new Investir(new Arrojado());
                    System.out.println("Valor final esperado: " + investir.ExecutarSimulacao(valor, tempo));
                    break;
                default:
                    break;
            }

            scanner.nextLine();
            System.out.println("Deseja realizar nova simulação?(Sim/Nao): ");
            continuar = scanner.nextLine();

        } while (continuar.equals("Sim"));

        scanner.close();
    }
}
