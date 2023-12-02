import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.imageio.ImageIO;
import javax.swing.BoxLayout;
import javax.swing.ImageIcon;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
public class GUI extends Jogo {
   private JFrame jogoGUI;

   public GUI() {
      super();
      this.jogoGUI = new JFrame("A Jornada de Guidolf");

      montarTelaJogo();
   }

   public void montarTelaJogo() {
      BufferedImage myPicture;
      try {
         myPicture = ImageIO.read(new File("./files/mapa.png"));
         JLabel picLabel = new JLabel(new ImageIcon(myPicture));

         jogoGUI.setSize(900, 900);
         jogoGUI.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
         jogoGUI.setLayout(new BorderLayout());

         JPanel painelCentral = new JPanel();
         painelCentral.setLayout(new BoxLayout(painelCentral, BoxLayout.Y_AXIS));
         painelCentral.add(picLabel);
         jogoGUI.add(painelCentral);

         JPanel painelDireito = new JPanel();
         painelDireito.setLayout(new BoxLayout(painelDireito, BoxLayout.Y_AXIS));

         JPanel painelInferior = new JPanel();
         painelInferior.setLayout(new BoxLayout(painelInferior, BoxLayout.Y_AXIS));

      } catch (IOException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }
   }

   public void exibir() {
      jogoGUI.setVisible(true);
   }
}
