/*
Utilizado para detecção de pontes em grafos não-orientados
Lema. Depois de uma DFS em um grafo não-orientado  G , uma aresta  (u,v)  da floresta DFS é ponte se, e somente se, nenhuma aresta abraça  (u,v) .
*/

#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <functional>

using namespace std;

#define NAO_VISITADO 0

// Raiz da DFS
int raiz;

// Armazena a informacao se um vertice eh de articulacao
bool *articulacoes;

/*
 * Parametros:
 *  u -> vertice a ser explorado
 *  lista_adj -> lista de adjacencia, que modela o grafo
 *  low -> vetor com os menores tempos de descoberta de arestas que abracam um vertice
 *  d -> vetor dos tempos de descoberta pre-ordem de todos os vertices
 *  pai -> vetor com os pais de todos os vertices
 *  cont_dfs -> contador do tempo de descoberta em profundidade dos vertices
 *  filhos_raiz -> conta quantos filhos a raiz possui na DFS
 */
void tarjan(int u, vector<int> *lista_adj, int *low, int *d, int *pai, int &cont_dfs, int &filhos_raiz)
{
   low[u] = d[u] = cont_dfs++;

   for (auto it = lista_adj[u].begin(); it != lista_adj[u].end(); it++)
   {
      int v = *it;
      if (d[v] == NAO_VISITADO)
      {
         pai[v] = u;

         if (u == raiz)
         {
            filhos_raiz++;
         }

         tarjan(v, lista_adj, low, d, pai, cont_dfs, filhos_raiz);

         if (low[v] >= d[u])
         {
            articulacoes[u] = true;
         }

         if (low[v] > d[u])
         {
            cout << "ponte: (" << u << ", " << v << ")" << endl;
         }

         low[u] = min(low[u], low[v]);
      }

      // Nao eh um ciclo trivial
      else if (v != pai[u])
      {
         low[u] = min(low[u], d[v]);
      }
   }
}