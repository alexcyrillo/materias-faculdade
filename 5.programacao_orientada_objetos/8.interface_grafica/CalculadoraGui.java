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

public class CalculadoraGui extends Calculadora {
   private JFrame calculadoraGui;
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

   CalculadoraGui() {
      super();
      this.calculadoraGui = new JFrame("Calculadora");
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
            String impressao = calcularExpressao(expressao);
            tela.setText(impressao);
         }
      });

      montarCalculadora();
   }

   private void imprimirNaTela(String botao) {
      String limpar = tela.getText();
      if (limpar.equals("Operacao Invalida")) {
         tela.setText(botao);
      } else if (limpar.equals(" - ")) {
         tela.setText("-" + botao);
      } else
         tela.setText(tela.getText() + botao);
   }

   public void montarCalculadora() {
      calculadoraGui.setSize(400, 600);
      calculadoraGui.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      calculadoraGui.setLayout(new GridLayout(2, 4));

      JPanel painelCima = new JPanel();
      painelCima.setLayout(new GridLayout(2, 4));
      painelCima.add(tela);
      painelCima.add(botaoAc);
      tela.setEditable(false);
      calculadoraGui.add(painelCima);

      JPanel painelBaixo = new JPanel();
      painelBaixo.setLayout(new GridLayout(4, 4));
      painelBaixo.add(botao1);
      painelBaixo.add(botao2);
      painelBaixo.add(botao3);
      painelBaixo.add(botaoMult);
      painelBaixo.add(botao4);
      painelBaixo.add(botao5);
      painelBaixo.add(botao6);
      painelBaixo.add(botaoMais);
      painelBaixo.add(botao7);
      painelBaixo.add(botao8);
      painelBaixo.add(botao9);
      painelBaixo.add(botaoDiv);
      painelBaixo.add(botaoDecimal);
      painelBaixo.add(botao0);
      painelBaixo.add(botaoIgual);
      painelBaixo.add(botaoMenos);
      calculadoraGui.add(painelBaixo);
   }

   public void exibir() {
      calculadoraGui.setVisible(true);
   }
}
