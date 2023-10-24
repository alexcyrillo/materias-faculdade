## PRÁTICA SOBRE CONCEITOS BÁSICOS DE ORIENTAÇÃO A OBJETOS

### ETAPA 1

Este exercício se refere a um programa para ajudar alunos da escola primária no aprendizado da multiplicação. Nesta primeira etapa, crie uma classe Questao que atenda às necessidades listadas a seguir. Lembre-se de usar adequadamente a visibilidade (public/private) dos atributos e métodos.

- As questões devem possuir um enunciado e um gabarito, ou seja, a sua resposta correta.
- O construtor dessa classe deve gerar o enunciado do exercício, o qual sempre tem o formato “Quanto é num1 * num2?”, sendo os dados que compõem esse enunciado (num1 e num2) devem ser gerados aleatoriamente (entre 0 e 9) utilizando-se o método nextInt da classe Random do Java (pacote java.util)¹. 
Antes da declaração da classe Questao, não se esqueça da declaração import (import java.util.Random;) para fazer uso da classe Random.
- Deve existir um método para ser possível consultar o enunciado.
- Deve existir um método que receba por parâmetro a resposta do aluno e retorne um booleano indicando se o aluno acertou a questão ou não. Crie uma segunda classe denominada Prova, que atenda aos seguintes requisitos:
- Cada prova deve conter uma única questão.
- Deve existir um método denominado aplicar que, quando chamado, apresente uma questão para o usuário e, a partir da resposta do mesmo, verifique a sua corretude e imprima na tela uma das mensagens a seguir:
- Muito bem, você acertou!
- Infelizmente você errou!

Para testar o seu programa, crie uma terceira classe denominada Principal que contenha o método main. No método main, apenas instancie um objeto da classe Prova e chame o método aplicar.

Teste sua implementação!

### ETAPA 2

Altere o método aplicar da classe Prova de modo a permitir que o usuário tenha mais uma chance de responder corretamente a questão se a primeira resposta dele estiver incorreta. Nesse caso, deve ser adicionada a seguinte mensagem para o usuário: "Você ganhou mais uma chance! Digite outra resposta para a questão: ". Além disso,  após verificar a corretude da(s) resposta(s), imprima na tela uma das mensagens a seguir (onde x corresponde ao número de vezes que o usuário respondeu aquela questão):

- Você tentou x vez(es) e acertou a questão. 
- Você tentou 2 vezes e errou a questão. 

Teste suas alterações!

¹ 
Criando um objeto Random:     
~~~
Random numeroAleatorio = new Random( );
~~~
Obtendo um valor aleatório int no intervalo [0, y]:    
~~~
int valor =  numeroAleatorio.nextInt(y+1);
~~~
