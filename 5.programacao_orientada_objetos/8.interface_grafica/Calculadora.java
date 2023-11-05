import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JTextField;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Arrays;

public class Calculadora {
   private JFrame calculadora;
   private JTextField tela;
   private JButton botaoIgual;
   private JButton botaoMais;
   private JButton botaoMenos;
   private JButton botaoMult;
   private JButton botaoDiv;
   private JButton botaoAc;
   private JButton botaoDecimal;
   private JButton botao1;
   private JButton botao2;
   private JButton botao3;
   private JButton botao4;
   private JButton botao5;
   private JButton botao6;
   private JButton botao7;
   private JButton botao8;
   private JButton botao9;
   private JButton botao0;

   Calculadora() {
      this.calculadora = new JFrame("Calculadora");
      this.tela = new JTextField();
      this.botao0 = new JButton("0");
      this.botao1 = new JButton("1");
      this.botao2 = new JButton("2");
      this.botao3 = new JButton("3");
      this.botao4 = new JButton("4");
      this.botao5 = new JButton("5");
      this.botao6 = new JButton("6");
      this.botao7 = new JButton("7");
      this.botao8 = new JButton("8");
      this.botao9 = new JButton("9");
      this.botaoMais = new JButton("+");
      this.botaoMenos = new JButton("-");
      this.botaoMult = new JButton("*");
      this.botaoDiv = new JButton("/");
      this.botaoAc = new JButton("AC");
      this.botaoDecimal = new JButton(".");
      this.botaoIgual = new JButton("=");

      botao0.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("0");
         }
      });

      botao1.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("1");
         }
      });

      botao2.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("2");
         }
      });

      botao3.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("3");
         }
      });

      botao4.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("4");
         }
      });

      botao5.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("5");
         }
      });

      botao6.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("6");
         }
      });

      botao7.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("7");
         }
      });

      botao8.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("8");
         }
      });

      botao9.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela("9");
         }
      });

      botaoMais.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela(" + ");
         }
      });

      botaoMenos.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela(" - ");
         }
      });

      botaoMult.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela(" * ");
         }
      });

      botaoDiv.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela(" / ");
         }
      });

      botaoDecimal.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            imprimirNaTela(".");
         }
      });

      botaoAc.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            tela.setText("");
         }
      });

      botaoIgual.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            ArrayList<String> expressao = new ArrayList<String>(Arrays.asList(tela.getText().split(" ")));
            calcularExpressao(expressao);
         }
      });

      montarCalculadora();
   }

   private int buscarPosElemento(ArrayList<String> expressao, String operador) {
      if (expressao.size() > 1)
         for (String item : expressao) {
            if (item.equals(operador))
               return expressao.indexOf(item);
         }
      else {
         // não há mais numeros para calcular
         return -2;
      }
      // não há mais o operador pesquisado
      return -1;
   }

   private void imprimirNaTela(String botao) {
      String limpar = tela.getText();
      if (limpar.equals("Operacao Invalida")) {
         tela.setText(botao);
      } else {
         tela.setText(tela.getText() + botao);
      }
   }

   private void calcularOperacao(ArrayList<String> expressao, int posOperador, String operador) {
      if (posOperador != -1 && expressao.size() >= 3) {
         double resOperacao = 0;
         double operando1 = Double.parseDouble(expressao.get(posOperador - 1));
         double operando2 = Double.parseDouble(expressao.get(posOperador + 1));
         switch (operador) {
            case "*":
               resOperacao = operando1 * operando2;
               break;
            case "/":
               resOperacao = operando1 / operando2;
               break;
            case "+":
               resOperacao = operando1 + operando2;
               break;
            case "-":
               resOperacao = operando1 - operando2;
               break;
            default:
               break;
         }
         String valor = String.valueOf(resOperacao);
         expressao.set(posOperador, valor);
         expressao.remove(posOperador + 1);
         expressao.remove(posOperador - 1);
      }
   }

   private String buscarElemento(ArrayList<String> expressao, int posItem) {
      return expressao.get(posItem);
   }

   private String tipoElemento(String elemento) {
      if (elemento.equals("*") || elemento.equals("/") || elemento.equals("+") || elemento.equals("-")) {
         return "operador";
      } else {
         return "operando";
      }

   }

   private boolean valido(ArrayList<String> expressao) {
      // verifica se a operação possui numero impar de elementos, pois, caso seja par
      // falta um sinal ou numero
      int numElementos = expressao.size();
      if (numElementos % 2 == 1) {
         String elementoAnterior = buscarElemento(expressao, 0);
         String tipoElementoAnterior = tipoElemento(elementoAnterior);
         String elementoAtual;
         String tipoElementoAtual;
         for (int i = 1; i < numElementos; i++) {
            elementoAtual = buscarElemento(expressao, i);
            tipoElementoAtual = tipoElemento(elementoAtual);
            if (tipoElementoAnterior.equals(tipoElementoAtual) || elementoAtual.equals("")) {
               return false;
            }
            elementoAnterior = elementoAtual;
            tipoElementoAnterior = tipoElementoAtual;
         }
         return true;
      }
      return false;
   }

   private void calcularExpressao(ArrayList<String> expressao) {
      if (valido(expressao)) {
         int posOperador = -1;
         String operador = "*";
         do {
            posOperador = buscarPosElemento(expressao, operador);
            if (posOperador == -1)
               if (operador.equals("*"))
                  operador = "/";
               else if (operador.equals("/"))
                  operador = "+";
               else if (operador.equals("+"))
                  operador = "-";
            if (posOperador >= 0)
               calcularOperacao(expressao, posOperador, operador);
         } while (posOperador != -2);
         tela.setText(expressao.get(0));
      } else {
         tela.setText("Operacao Invalida");
      }

      /*
       * do {
       * operador = "/";
       * item = buscarPosElemento(calculo, operador);
       * calculador(calculo, item, operador);
       * } while (item != -1);
       * 
       * do {
       * operador = "+";
       * item = buscarPosElemento(calculo, operador);
       * calculador(calculo, item, operador);
       * } while (item != -1);
       * 
       * do {
       * operador = "-";
       * item = buscarPosElemento(calculo, operador);
       * calculador(calculo, item, operador);
       * } while (item != -1);
       */

   }

   public void montarCalculadora() {
      calculadora.setSize(500, 600);
      calculadora.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      calculadora.setLayout(new BorderLayout());

      JPanel painelCima = new JPanel();
      painelCima.setLayout(new BoxLayout(painelCima, BoxLayout.Y_AXIS));
      painelCima.add(tela);
      tela.setEditable(false);
      calculadora.add(painelCima, BorderLayout.NORTH);

      JPanel painelCentro = new JPanel();
      painelCentro.setLayout(new GridLayout(5, 4));
      painelCentro.add(botaoAc);
      painelCentro.add(botaoDiv);
      painelCentro.add(botaoMult);
      painelCentro.add(botaoMenos);
      painelCentro.add(botao1);
      painelCentro.add(botao2);
      painelCentro.add(botao3);
      painelCentro.add(botaoMais);
      painelCentro.add(botao4);
      painelCentro.add(botao5);
      painelCentro.add(botao6);
      painelCentro.add(botaoDecimal);
      painelCentro.add(botao7);
      painelCentro.add(botao8);
      painelCentro.add(botao9);
      painelCentro.add(botaoIgual);
      painelCentro.add(botao0);
      calculadora.add(painelCentro, BorderLayout.CENTER);
   }

   public void exibir() {
      calculadora.setVisible(true);
   }
}
