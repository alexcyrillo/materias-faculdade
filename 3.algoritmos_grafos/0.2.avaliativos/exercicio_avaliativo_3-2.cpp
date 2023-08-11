// https://www.beecrowd.com.br/judge/pt/problems/view/2959
#include <iostream>
#include <vector>
#include <utility>
#include <functional>
using namespace std;

#define INF 1000000000

int **MA;

int n, m, p;

int floyd_warshall()
{
   for (int k = 0; k < n; k++)
      for (int i = 0; i < n; i++)
         for (int j = 0; j < n; j++)
            MA[i][j] = min(MA[i][j], max(MA[i][k], MA[k][j]));
}

int main()
{
   cin >> n >> m >> p;

   MA = new int *[n];
   int u, v;

   for (int i = 0; i < n; i++)
   {
      MA[i] = new int[n];
      for (int j = 0; j < n; j++)
         MA[i][j] = INF;
   }

   for (int i = 0; i < m; i++)
   {
      cin >> u >> v;
      u--;
      v--;
      MA[u][v] = MA[v][u] = 1;
   }

   floyd_warshall();

   for (int i = 0; i < p; i++)
   {
      cin >> u >> v;
      u--;
      v--;
      if (u != v && MA[u][v] == 1)
         cout << "Lets que lets" << endl;
      else
         cout << "Deu ruim" << endl;
   }

   return 0;
}