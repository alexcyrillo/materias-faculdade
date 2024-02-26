public class App {
    public static void main(String[] args) throws Exception {
        Sorvete s = new Cestinha("Napolitano");
        s = new Morango(s);
        s = new Morango(s);
        s = new Chocolate(s);
        s = new Chocolate(s);
        s = new Creme(s);
        System.out.println(s.getDescricao() + " com " + s.qtBolas() + " bolas: " + s.valor());

    }
}
