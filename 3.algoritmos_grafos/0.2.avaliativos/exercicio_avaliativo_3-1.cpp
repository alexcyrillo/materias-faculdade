#include <iostream>
#include <vector>
#include <queue>
#include <utility>
#include <functional>
using namespace std;

#define INF 100000000

typedef pair<int, int> ii;

vector<ii> *LA, *LAAux;
vector<int> d, numArestas;
int n, m;

int dijkstra(int org, int dest)
{
   d.assign(n, INF);
   numArestas.assign(n, INF);

   d[org] = 0;
   numArestas[org] = 0;

   priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;
   heap.push(make_pair(0, org));

   while (!heap.empty())
   {
      ii vertice = heap.top();
      heap.pop();

      int distancia = vertice.first;
      int u = vertice.second;

      if (u == dest && (numArestas[u] % 2 == 0))
         return d[dest];

      if (distancia > d[u])
         continue;

      for (int j = 0; j < (int)LA[u].size(); j++)
      {
         ii vizinho = LA[u][j];
         int v = vizinho.first;
         int peso = vizinho.second;

         if (d[v] > d[u] + peso)
         {
            d[v] = d[u] + peso;
            numArestas[v] = numArestas[u] + 1;
            heap.push(make_pair(d[v], v));
         }
      }
   }

   return -1;
}

int main()
{
   cin >> n >> m;

   LA = new vector<ii>[n];
   int u, v, p;
   for (int i = 0; i < m; i++)
   {
      cin >> u >> v >> p;
      u--;
      v--;
      LA[u].push_back(make_pair(v, p));
   }

   cout << dijkstra(0, n - 1);

   return 0;
}
