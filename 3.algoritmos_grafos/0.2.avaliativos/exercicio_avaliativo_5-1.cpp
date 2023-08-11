// https://www.beecrowd.com.br/judge/pt/custom-problems/view/3426
#include <iostream>
#include <limits.h>
#include <queue>
#include <string.h>
using namespace std;

int *controlCap, n, m, e, s, **MA, **MAr;

bool bfs(int s, int t, int pai[])
{
   bool visitado[t + 1];
   memset(visitado, 0, sizeof(visitado));

   queue<int> q;
   q.push(s);
   visitado[s] = true;
   pai[s] = -1;

   while (!q.empty())
   {
      int u = q.front();
      q.pop();

      for (int v = 0; v < t + 1; v++)
      {
         if (visitado[v] == false && MAr[u][v] > 0)
         {
            if (v == t)
            {
               pai[v] = u;
               return true;
            }
            q.push(v);
            pai[v] = u;
            visitado[v] = true;
         }
      }
   }

   return false;
}

int fordFulkerson(int s, int t)
{
   int u, v;

   MAr = new int *[t + 1];
   for (int i = 0; i < t + 1; i++)
      MAr[i] = new int[t + 1];

   for (u = 0; u < t + 1; u++)
      for (v = 0; v < t + 1; v++)
         MAr[u][v] = MA[u][v];

   int pai[t + 1];

   int fluxoMax = 0;

   while (bfs(s, t, pai))
   {
      int fluxo = INT_MAX;
      for (v = t; v != s; v = pai[v])
      {
         u = pai[v];
         fluxo = min(fluxo, MAr[u][v]);
      }

      for (v = t; v != s; v = pai[v])
      {
         u = pai[v];
         MAr[u][v] -= fluxo;
         MAr[v][u] += fluxo;
      }

      fluxoMax += fluxo;
   }

   return fluxoMax;
}

int main()
{
   int u, v, p;
   cin >> n;
   while (n != -1)
   {
      controlCap = new int[n + 1];
      for (int i = 1; i <= n; i++)
         cin >> controlCap[i];

      MA = new int *[2 * n + 2];
      for (int i = 0; i < 2 * n + 2; i++)
      {
         MA[i] = new int[2 * n + 2];
         for (int j = 0; j < 2 * n + 2; j++)
            MA[i][j] = 0;
      }

      cin >> m;

      for (int i = 1; i <= n; i++)
         MA[i][n + i] = controlCap[i];

      for (int i = 0; i < m; i++)
      {
         cin >> u >> v >> p;
         MA[u + n][v] = p;
      }

      cin >> e >> s;

      for (int i = 0; i < e; i++)
      {
         cin >> u;
         MA[0][u] = INT_MAX;
      }

      for (int i = 0; i < s; i++)
      {
         cin >> v;
         MA[v + n][2 * n + 1] = INT_MAX;
      }

      cout << fordFulkerson(0, 2 * n + 1) << endl;

      cin >> n;
   }

   return 0;
}