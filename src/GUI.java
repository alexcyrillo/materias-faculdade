import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
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
   private JTextField telaStats;
   private JTextField telaEntrada;
   private JTextArea telaSaida;
   private JButton botaoExecutar;
   private JPanel painelMapa;
   private JPanel painelStats;
   private JPanel painelES;

   public GUI() {
      super();
      jogoGUI = new JFrame("A Jornada de Guidolf");
      telaSaida = new JTextArea();
      telaStats = new JTextField();
      telaEntrada = new JTextField();
      botaoExecutar = new JButton("Enviar Comando");

      botaoExecutar.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent e) {
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
      JLabel picLabel = carregarImagem();
      painelMapa = new JPanel();
      painelMapa.setLayout(new BoxLayout(painelMapa, BoxLayout.Y_AXIS));
      painelMapa.setBorder(
            BorderFactory.createTitledBorder("Mapa da Cidade"));
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
      telaStats.setPreferredSize(new Dimension(600, 200));
      jogoGUI.add(painelStats, BorderLayout.EAST);
   }

   private void painelES() {
      painelES = new JPanel();
      painelES.setLayout(new BoxLayout(painelES, BoxLayout.Y_AXIS));
      painelES.setBorder(
            BorderFactory.createTitledBorder("Area de Interacao"));
      painelES.add(telaSaida);
      telaSaida.setText(imprimirBoasVindas());
      painelES.add(telaEntrada);
      painelES.add(botaoExecutar);
      telaEntrada.setPreferredSize(new Dimension(600, 50));
      telaSaida.setPreferredSize(new Dimension(600, 200));
      telaEntrada.setPreferredSize(new Dimension(50, 30));
      telaSaida.setEditable(false);
      jogoGUI.add(painelES, BorderLayout.SOUTH);

   }

   private JLabel carregarImagem() {
      try {
         imagem = ImageIO.read(new File("./files/mapa.png"));
         return new JLabel(new ImageIcon(imagem));
      } catch (IOException e) {
         e.printStackTrace();
      }
      return null;
   }

   public void exibir() {
      jogoGUI.setVisible(true);
   }
}
