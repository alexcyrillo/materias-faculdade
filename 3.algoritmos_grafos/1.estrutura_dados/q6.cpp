/*
Suponha  G=(V,E) ,  |V|=n+1 , um grafo não-direcionado e bipartido completo.  G  possui uma particularidade adicional: uma partição é composta por apenas  1  (um) vértice, e outra partição possui  n  vértices. Implemente uma função que retorne true se  G  é um grafo bipartido com tais características. Importante: o valor  1  da partição não significa vértice de índice  1 , mas sim exatamente um vértice em uma das partições. Para simplificar, vamos supor que todos os grafos testados são bipartidos completos.
*/

#include <iostream>
using namespace std;

// supomos que a entrada seja a partir de uma matriz de adjacencia
bool grafo_especial(int **MA, int n)
{
	// retorna true se o grafo em questao possui a caracteristica indicada no enunciado
	bool ok = true;

	// TO DO

	return ok;
}

int main()
{
	int n, m;

	while (cin >> n >> m)
	{
		// considerando que os índices dos vértices começam de 0 e vão até n-1
		int **MA = new int *[n];
		for (int i = 0; i < n; i++)
		{
			MA[i] = new int[n];
			for (int j = 0; j < n; j++)
				MA[i][j] = 0;
		}

		// leitura do grafo
		int u, v;
		for (int i = 0; i < m; i++)
		{
			cin >> u >> v; // lendo as arestas do grafo

			// grafo nao-direcionado
			MA[u][v] = 1; // u -> v
			MA[v][u] = 1; // v -> u
		}

		/*
		 * cout << grafo_especial(MA, n) << endl;
		 */
	}

	return 0;
}