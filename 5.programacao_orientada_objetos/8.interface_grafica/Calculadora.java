import java.util.ArrayList;

public class Calculadora {

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

   public String calcularExpressao(ArrayList<String> expressao) {
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
         return expressao.get(0);
      } else {
         return "Operacao Invalida";
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
}