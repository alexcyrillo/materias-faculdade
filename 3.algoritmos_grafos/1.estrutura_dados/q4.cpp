/*Implemente uma função que dada a lista de adjacência de  G , retorne uma lista de arestas, representando o mesmo grafo.*/

#include <iostream>
#include <vector>
#include <utility>
using namespace std;

typedef pair<int, int> ii;
typedef vector<ii> vii;

// Implemente sua resposta aqui
// Em cada elemento do vector, o first representa o peso da aresta, e o second um outro pair, indicando a aresta
vector<pair<int, ii>> LA_para_LAr(vii *LA, int n)
{
	// first: peso; second: aresta
	vector<pair<int, ii>> LAr;

	for (int i = 0; i < n; i++)
		for (int j = 0; j < LA[i].size(); j++)
		{
			ii vp = LA[i][j];
			int p = vp.second;
			if (vp.first > i)
				LAr.push_back(make_pair(p, make_pair(i, vp.first)));
		}

	return LAr;
}

int main()
{
	int n, m;

	while (cin >> n >> m)
	{
		// considerando que os índices dos vértices começam de 0 e vão até n-1
		vii *LA = new vii[n];

		// leitura do grafo
		int u, v, w;
		for (int i = 0; i < m; i++)
		{
			// w: peso da aresta (u,v)
			cin >> u >> v >> w; // lendo as arestas do grafo

			// grafo nao-direcionado
			// u - v
			LA[u].push_back(make_pair(v, w));
			LA[v].push_back(make_pair(u, w));
		}

		// lista de arestas
		vector<pair<int, ii>> LAr;
		LAr = LA_para_LAr(LA, n);

		// imprimindo a lista por iterator
		for (auto it = LAr.begin(); it != LAr.end(); ++it)
			cout << "(" << (*it).second.first << "," << (*it).second.second << ")[" << (*it).first << "]\t";
		cout << endl;
	}

	return 0;
}