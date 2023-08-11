/*
Escreva uma função que dada uma lista de adjacências LA, o número de vértices de  G ,  n , e um vértice  u∈V , retorne o grau de entrada e o grau de saída de  u , representados por um pair. Como saída, imprima (para cada caso de teste) o vértice  u , o grau de entrada e o grau de saída.
*/
#include<iostream>
#include<vector>
#include<utility>
using namespace std;

typedef vector<int> vi;
typedef pair<int,int> ii;

// Implemente sua resposta aqui
ii retornaGrau(vi* LA, int n, int u)
{
  // first: grau de entrada; second: grau de saida
  ii grau;
  grau.first = 0;
  grau.second = LA[u].size();

  for(int i = 0; i < n; i++)
    for(int j = 0; j < LA[i].size(); j++)
      if(LA[i][j] == u)
        grau.first++;

  return grau;
}

int main()
{
  int n, m;
  cin >> n >> m;

  while(!cin.eof())
  {
    // considerando que os índices dos vértices começam de 0 e vão até n-1
    vi* LA = new vi[n];

    // leitura do grafo
    int u, v;
    for(int i = 0; i < m; i++)
    {
      cin >> u >> v; // lendo as arestas do grafo

      // grafo direcionado
      LA[u].push_back(v); //u -> v
    }

    // escolhe aleatoriamente um vertice de 0 a n-1
    int vertice = rand() % n;
    ii grau = retornaGrau(LA, n, vertice);
    cout << vertice << " " << grau.first << " " << grau.second << endl;
  }

  return 0;
}