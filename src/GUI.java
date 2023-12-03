import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.imageio.ImageIO;
import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class GUI extends Jogo {
   private JFrame jogoGUI;
   private BufferedImage imagem;
   private JTextArea telaStats;
   private JTextField campoEntrada;
   private JTextArea telaSaida;
   private JButton botaoExecutar;
   private JPanel painelMapa;
   private JPanel painelStats;
   private JPanel painelES;
   private JLabel picLabel;

   public GUI() {
      super();
      jogoGUI = new JFrame("A Jornada de Guidolf");
      telaSaida = new JTextArea();
      telaStats = new JTextArea();
      campoEntrada = new JTextField();
      botaoExecutar = new JButton("Enviar Comando");
      picLabel = new JLabel();

      botaoExecutar.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
            telaSaida.setText("");
            telaSaida.setText(jogar(campoEntrada.getText()));
            telaStats.setText(exibirStatus());
            campoEntrada.setText("");
            atualizarImagem(imprimirLocalizacaoAtual());
         }
      });

      montarTelaJogo();
   }

   public void montarTelaJogo() {

      jogoGUI.setSize(1020, 780);
      jogoGUI.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      jogoGUI.setLayout(new BorderLayout());
      jogoGUI.setResizable(false);

      painelMapa();
      painelStats();
      painelES();
   }

   private void painelMapa() {
      painelMapa = new JPanel();
      carregarImagem("Praca da Cidade");
      painelMapa.setLayout(new BoxLayout(painelMapa, BoxLayout.Y_AXIS));
      painelMapa.setPreferredSize(new Dimension(800, 800));
      painelMapa.setBorder(
            BorderFactory.createTitledBorder("Sua Localizacao"));
      painelMapa.add(picLabel);
      jogoGUI.add(painelMapa, BorderLayout.CENTER);

   }

   private void painelStats() {
      painelStats = new JPanel();
      painelStats.setLayout(new BoxLayout(painelStats, BoxLayout.Y_AXIS));
      painelStats.setPreferredSize(new Dimension(210, 400));
      painelStats.setBorder(
            BorderFactory.createTitledBorder("Ambiente atual"));
      painelStats.add(telaStats);

      telaStats.setEditable(false);
      telaStats.setPreferredSize(new Dimension(600, 200));
      telaStats.setText(exibirStatus());
      telaStats.setLineWrap(true);
      telaStats.setWrapStyleWord(true);
      jogoGUI.add(painelStats, BorderLayout.EAST);
   }

   private void painelES() {
      painelES = new JPanel();
      painelES.setLayout(new BoxLayout(painelES, BoxLayout.Y_AXIS));
      painelES.setBorder(
            BorderFactory.createTitledBorder("Area de Interacao"));

      montarTelaSaida(painelES);
      montarCampoEntrada(painelES);

      jogoGUI.add(painelES, BorderLayout.SOUTH);
   }

   private void montarTelaSaida(JPanel paiNel) {
      telaSaida.setText(imprimirBoasVindas());
      telaSaida.setPreferredSize(new Dimension(600, 200));
      telaSaida.setEditable(false);
      telaSaida.setLineWrap(true);
      telaSaida.setWrapStyleWord(true);

      JScrollPane telaSaidaScrollPane = new JScrollPane(telaSaida);
      telaSaidaScrollPane.setPreferredSize(
            new Dimension(300, 140));
      telaSaidaScrollPane.setVerticalScrollBarPolicy(
            JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);

      // adiciona a área de rolagem ao subpainel de mensagens
      paiNel.add(telaSaidaScrollPane);

   }

   private void montarCampoEntrada(JPanel paiNel) {
      campoEntrada.setPreferredSize(new Dimension(600, 50));
      paiNel.add(campoEntrada);

      botaoExecutar.setPreferredSize(new Dimension(50, 30));
      paiNel.add(botaoExecutar);

   }

   private void carregarImagem(String posicao) {
      try {
         String enderecoImagem = "./files/" + posicao + ".jpg";
         imagem = ImageIO.read(new File(enderecoImagem));
         picLabel = new JLabel(new ImageIcon(imagem));
      } catch (IOException e) {
         e.printStackTrace();
      }
   }

   private void atualizarImagem(String posicao) {
      painelMapa.remove(picLabel);
      carregarImagem(posicao);
      painelMapa.add(picLabel);

   }

   public void exibir() {
      jogoGUI.setVisible(true);
   }
}
