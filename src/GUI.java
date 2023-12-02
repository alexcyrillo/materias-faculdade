import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.imageio.ImageIO;
import javax.swing.BoxLayout;
import javax.swing.ImageIcon;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class GUI extends Jogo {
   private JFrame jogoGUI;
   private JTextField tela;
   private BufferedImage imagem;

   public GUI() {
      super();
      jogoGUI = new JFrame("A Jornada de Guidolf");
      this.tela = new JTextField();

      montarTelaJogo();
   }

   public void montarTelaJogo() {

      jogoGUI.setSize(1000, 1000);
      jogoGUI.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      jogoGUI.setLayout(new BorderLayout());

      painelCentral();
      painelDireito();
      painelEsquerdo();
      painelInferior();

   }

   private void painelCentral() {
      try {
         imagem = ImageIO.read(new File("./files/mapa.png"));
         JLabel picLabel = new JLabel(new ImageIcon(imagem));
         JPanel painelCentral = new JPanel();
         painelCentral.setLayout(new BoxLayout(painelCentral, BoxLayout.Y_AXIS));
         painelCentral.add(picLabel);
         jogoGUI.add(painelCentral, BorderLayout.CENTER);
      } catch (IOException e) {
         e.printStackTrace();
      }
   }

   private void painelDireito() {
      JPanel painelDireito = new JPanel();
      painelDireito.setLayout(new BoxLayout(painelDireito, BoxLayout.Y_AXIS));
      jogoGUI.add(painelDireito, BorderLayout.EAST);
   }

   private void painelEsquerdo() {
      JPanel painelEsquerdo = new JPanel();
      jogoGUI.add(painelEsquerdo, BorderLayout.WEST);
   }

   private void painelInferior() {
      JPanel painelInferior = new JPanel();
      painelInferior.setLayout(new BoxLayout(painelInferior, BoxLayout.Y_AXIS));
      painelInferior.add(tela);
      jogoGUI.add(painelInferior, BorderLayout.SOUTH);

   }

   public void exibir() {
      jogoGUI.setVisible(true);
   }
}