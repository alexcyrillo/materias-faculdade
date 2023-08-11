/*
Implemente uma função que dada a matriz de adjacência de  G , retorne uma matriz de incidência, representando o mesmo grafo.
*/
#include <iostream>
#include <vector>
using namespace std;

typedef vector<int> vi;

// Implemente sua resposta aqui
// m: numero de arestas do grafo
int **MA_para_MI(int **MA, int n, int m)
{
	int **MI = new int *[m], k = 0;

	for(int i = 0; i < m; i++)
	{	
		MI[i] = new int[n];
		for(int j = 0; j < n; j++)
			MI[i][j] = 0;
	}

	for (int i = 0; i < n; i++)
		for (int j = i; j < n; j++)
			if (MA[i][j] == 1)
			{
				MI[k][i] = 1;
				MI[k][j] = 1;
				k++;
			}

	return MI;
}

int main()
{
	int n, m;
	cin >> n >> m;

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
		MA[u][v] = MA[v][u] = 1; // u - v
	}

	int **MI = MA_para_MI(MA, n, m);
	for (int e = 0; e < m; e++)
	{
		for (int u = 0; u < n; u++)
		{
			cout << MI[e][u] << " ";
		}
		cout << endl;
	}

	return 0;
}