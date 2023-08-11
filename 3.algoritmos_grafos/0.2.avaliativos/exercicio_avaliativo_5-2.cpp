// https://www.beecrowd.com.br/judge/pt/custom-problems/view/3427
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

#define INF 1000000000

int n, custoMax, *pai;
typedef pair<int, int> ii;

int dijkstra(vector<ii> *LA, int orig, int dest)
{
   int dist[n], pai[n], visitados[n];

   for (int i = 0; i < n; i++)
   {
      dist[i] = INF;
      visitados[i] = false;
      pai[i] = -1;
   }

   dist[orig] = 0;
   pai[orig] = -1;

   priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;
   heap.push(make_pair(0, orig));

   while (!heap.empty())
   {
      ii vertice = heap.top();
      heap.pop();

      int distancia = vertice.first;
      int u = vertice.second;

      if (visitados[u] == false)
      {
         visitados[u] = true;

         for (int i = 0; i < LA[u].size(); i++)
         {
            ii vizinho = LA[u][i];
            int v = vizinho.first;
            int peso = vizinho.second;

            if (dist[v] > dist[u] + peso)
            {
               dist[v] = dist[u] + peso;
               pai[v] = u;
               heap.push(make_pair(dist[v], v));
            }
         }
      }
   }

   if ((dist[dest] > custoMax) || dist[dest] == INF)
      return -1;
   else
   {
      int u = dest;
      int maior = 0;

      while (pai[u] != -1)
      {
         if (dist[u] - dist[pai[u]] > maior)
            maior = dist[u] - dist[pai[u]];

         u = pai[u];
      }
      return maior;
   }
}

int main()
{
   int x, u, v, p, m, orig, dest, custoFim, custoFimInv;

   cin >> x;

   while (x > 0)
   {
      cin >> n >> m >> orig >> dest >> custoMax;

      vector<ii> LA[n], LAInv[n];
      pai = new int[n];

      for (int i = 0; i < n; i++)
         pai[i] = 0;

      for (int i = 0; i < m; i++)
      {
         cin >> u >> v >> p;
         u--;
         v--;
         LA[u].push_back(make_pair(v, p));
         LAInv[v].push_back(make_pair(u, p));
      }

      custoFim = dijkstra(LA, orig - 1, dest - 1);
      custoFimInv = dijkstra(LAInv, dest - 1, orig - 1);

      if(custoFim == -1 || custoFimInv == -1)
         cout << -1 << endl;
      else if (custoFim > custoFimInv)
         cout << custoFim << endl;
      else
         cout << custoFimInv << endl;

      x--;
   }

   return 0;
}