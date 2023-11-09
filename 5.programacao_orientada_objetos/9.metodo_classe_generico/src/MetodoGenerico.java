public class MetodoGenerico {

    public <T, U, V> void souGenerico(T t, U u, V v) {
        System.out.println(t.getClass().getName());
        System.out.println(u.getClass().getName());
        System.out.println(v.getClass().getName());
    }

    public static void main(String[] args) {
        MetodoGenerico mg = new MetodoGenerico();
        mg.souGenerico("A", 1.0f, mg);
        mg.souGenerico(1, 1.0, "teste");

        ClasseGenerica<String> genString = new ClasseGenerica<String>("gen 1", "gen 2", "gen 3");
        ClasseGenerica<Double> genDouble = new ClasseGenerica<Double>(1.1, 2.2, 3.3);

        genString.setAtributoGenerico1("generico 1");

        genDouble.setAtributoGenerico2(5.5);

        System.out.println(genString.getAtributoGenerico1() + " " + genString.getAtributoGenerico2()
                + " " + genString.getAtributoGenerico3() + " " + genDouble.getAtributoGenerico1() + " "
                + genDouble.getAtributoGenerico2()
                + " " + genDouble.getAtributoGenerico3());
    }
}
