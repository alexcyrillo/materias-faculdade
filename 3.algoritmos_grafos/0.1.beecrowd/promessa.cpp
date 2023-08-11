/*
Durante sua campanha eleitoral, o prefeito do município de Barro Bravo prometeu que, até o fim de seu mandato, os cidadãos conseguiriam se locomover entre os principais pontos do município sem passar por nenhum trecho de estrada de terra (quando assumiu o cargo, não era possível ir a lugar algum sem passar pelo barro...).

A primeira providência que tomou foi finalizar as diversas vias de ligação que haviam sido parcialmente construídas, mas não terminadas. Assim que concluiu esta etapa, já com o orçamento reduzido, o prefeito precisava determinar se a promessa já fora cumprida ou não, e caso não tem sido, quantas estradas ainda deveriam ser construídas para que a promessa se concretizasse.

Escreva, portanto, um programa que auxilie o prefeito a obter sua resposta.

Entrada
A entrada consiste em uma série de casos de teste. O número T (T ≤ 100) de casos de teste é indicado na primeira linha da entrada.

Cada caso de teste é composto por várias linhas. A primeira e a segunda linha do caso de teste contém, respectivamente, os valores N (1 ≤ N ≤ 100) e M (0 ≤ M ≤ N(N - 1)/2), onde N é o número de pontos principais da cidade e M o número de estradas já construídas. Os principais pontos da cidade são identificados sequencialmente por números inteiros, a partir do número um.

As M linhas seguintes contém pares de valores X e Y (1 ≤ X, Y ≤ N), que indicam que existe uma estrada que liga o ponto X ao ponto Y.

Saida
Para cada caso de teste deverá ser impressa ou a mensagem "Caso #t: ainda falta(m) E estrada(s)" ou a mensagem "Caso #t: a promessa foi cumprida", conforme for o caso, onde t é o número do caso de teste (cuja contagem tem início no número um) e E é o número mínimo de estradas que devem ser construídas para que a promessa seja cumprida.

Ao final de cada mensagem deve ser impressa uma quebra de linha.
*/
#include <iostream>
#include <vector>
#include <utility>

using namespace std;

int main()
{
	int nTeste, pontosPrincipais, estradasNecess, n, m;

	cin >> nTeste;

	int pair<int, bool>;

	for (int i = 0; i < nTeste; i++)
	{
		cin >> pontosPrincipais >> estradasNecess;

		// cria uma matriz de adjacencia
		int **LA = new int *[pontosPrincipais];
		for (int i = 0; i < pontosPrincipais; i++)
		{
			LA[i] = new int[pontosPrincipais];
			for (int j = 0; j < pontosPrincipais; j++)
				LA[i][j] = 0;
		}

		// recebe as ligacoes feitas
		for (int i = 0; i < estradasNecess; i++)
		{
			cin >> n >> m;
			LA[n - 1][m - 1] = 1;
		}

		int estradasConst = 0;
		for(int i = 0; i < estradasNecess; i++)
			if(LA[i][i + 1] == 1)
				estradasConst++;
		
		if(estradasConst == estradasNecess)
				conectado[i] = true;
	}
	for (int i = 0; i < nTeste; i++)
	{
		if(conectado[i] == true)
			cout << "Caso #" << (i + 1) << ": a promessa foi cumprida" << endl;
		else
			cout << "Caso #" << (i + 1) << "ainda falta(m) " << (estradasNecess - es) << "estrada(s)" << endl;
	}
	return 0;
}