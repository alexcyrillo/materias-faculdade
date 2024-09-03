## PRÁTICA SOBRE CLASSES E MÉTODOS GENÉRICOS

### ETAPA 1

Altere a implementação a seguir de modo que o método souGenerico( ) aceite três argumentos de tipos parametrizáveis distintos.

~~~
public class MetodoGenerico {
 
 public <T> void souGenerico(T t){
 System.out.println(t.getClass().getName());
 }
 
 public static void main(String[] args){
 MetodoGenerico mg = new MetodoGenerico();
 mg.souGenerico("A");
 mg.souGenerico(1);
 mg.souGenerico(1.0);
 mg.souGenerico(1.0f);
 mg.souGenerico(mg);
 }
}
~~~

### ETAPA 2

Crie uma classe genérica que possua 3 atributos do mesmo tipo, um construtor para inicializá-los e métodos que permitam a consulta (get) e alteração (set) desses atributos. Em seguida, na classe que contém o método main, instancie dois objetos dessa classe definindo String e Double como o tipo desses atributos, utilize o método set para alterar o valor de algum atributo e imprima o valor de todos os atributos na tela