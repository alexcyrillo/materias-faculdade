	#include<iostream>
	#include<vector>
	using namespace std;

	typedef vector<int> vi;

	// Implemente sua resposta aqui
	int centro(vi* LA, int n)
	{
		int centro;
		int *d = new int[n];
		vector<int> folhas;
		for(int i = 0; i < n; i++)
		{
			d[i] = LA[i].size();
			if(d[i] == 1)
				folhas.push_back(i);
		}
		while(n > 2)
		{
			vector<int> novasFolhas;
			for(int i = 0; i < folhas.size(); i++)
			{
				int j = LA[folhas[i]][0];
				d[j]--;
				n--;
				if(d[j] == 1)
					novasFolhas.push_back(j);
				folhas = novasFolhas;
			}
		}
		return centro;
	}

	int main()
	{
		int n, m;
		cin >> n >> m;

		while(!cin.eof())
		{
			// considerando que os índices dos vértices começam de 0 e vão até n-1
			vi* LA = new vector<int>[n];

			// leitura do grafo
			int u, v;
			for(int i = 0; i < m; i++)
			{
				cin >> u >> v; // lendo as arestas do grafo

				// grafo direcionado
				LA[u].push_back(v); //u -> v
				LA[v].push_back(u); //v -> u
			}

			/*
			cout << centro(LA, n) << endl;
			*/
		}

		return 0;
	}