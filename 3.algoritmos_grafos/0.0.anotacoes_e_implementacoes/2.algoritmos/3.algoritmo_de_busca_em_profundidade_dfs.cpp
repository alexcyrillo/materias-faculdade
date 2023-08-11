/*
n: numero de vertices
m: numero de arestas

Complexidade de Tempo: O(m + n)
Complexidade de Espaço: O(n)

Pseudo-código:
*/
#include <iostream>
using namespace std;

#include "4.algoritmo_de_tarjan.cpp"

int main()
{
   int n, m;
   cin >> n >> m;

   while (!cin.eof())
   {
      // alocando as estruturas auxiliares
      int *low = new int[n + 1];
      int *d = new int[n + 1];
      int *pai = new int[n + 1];
      int cont_dfs = 1;
      int filhos_raiz = 0;

      articulacoes = new bool[n + 1];

      // iniciando as estruturas auxiliares
      for (int i = 1; i <= n; i++)
      {
         low[i] = NAO_VISITADO;
         d[i] = NAO_VISITADO;
         pai[i] = -1;
         articulacoes[i] = false;
      }

      vector<int> *lista_adj = new vector<int>[n + 1];

      // leitura do grafo
      int u, v;
      for (int i = 0; i < m; i++)
      {
         cin >> u >> v; // lendo as arestas do grafo

         // evitando a leitura de vertices repetidos nas listas
         if (find(lista_adj[u].begin(), lista_adj[u].end(), v) != lista_adj[u].end())
         {
            continue;
         }

         // grafo nao-orientado
         lista_adj[u].push_back(v); // u -> v
         lista_adj[v].push_back(u); // v -> u
      }

      for (int i = 1; i <= n; i++)
      {
         if (d[i] == NAO_VISITADO)
         {
            raiz = i;
            filhos_raiz = 0;
            tarjan(i, lista_adj, low, d, pai, cont_dfs, filhos_raiz);
            // Caso especial para vertice de articulacao: a raiz da DFS com mais de 1 filho
            articulacoes[i] = (filhos_raiz > 1);
         }
      }

      for (int i = 1; i <= n; i++)
      {
         if (articulacoes[i])
         {
            cout << "vertice de articulacao: " << i << endl;
         }
      }

      delete[] pai;
      delete[] d;
      delete[] low;
      delete[] articulacoes;

      cin >> n >> m;
   }

   cout << "*****" << endl;

   return 0;
}