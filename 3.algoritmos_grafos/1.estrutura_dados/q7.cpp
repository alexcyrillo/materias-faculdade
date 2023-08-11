/*
Suponha que você esteja planejando uma rede de computadores e queira maximizar as conexões entre os computadores. Para isso, deseja-se que cada máquina presente na rede tenha a conexão direta com ao menos outras  x  máquinas.

Considere um grafo  G=(V,E)  que modela as possíveis conexões entre os computadores. Deseja-se projetar uma rede com a maior quantidade de computadores que se liguem a pelo menos outros  x  computadores selecionados.
*/

#include <iostream>
#include <vector>

typedef vector<int> vi;

using namespace std;

int main()
{
	int computadores, ligacoes, x;

	while (cin >> computadores >> ligacoes >> x)
	{
		vi *lista_adjacencia = new vi[computadores];

		// leitura do grafo
		int computador1, computador2;
		for (int i = 0; i < ligacoes; i++)
		{
			cin >> computador1 >> computador2;
			lista_adjacencia[computador1].push_back(computador2);
			lista_adjacencia[computador2].push_back(computador1);
		}

		// TODO
	}

	return 0;
}