// https://www.beecrowd.com.br/judge/pt/custom-problems/view/3358
#include <iostream>
#include <vector>

using namespace std;

vector<int> *LA, visitado, pilha, pai;
bool verif = true;

void DFS(int u)
{
   visitado[u] = 1;
   for (int i = 0; i < LA[u].size(); i++)
   {
      if (visitado[LA[u][i]] == 0)
      {
         pai[LA[u][i]] = u;
         DFS(LA[u][i]);
      }
      if (pai[LA[u][i]] != u && visitado[LA[u][i]] == 1)
         verif = false;
   }
   pilha.push_back(u);
   visitado[u] = -1;
}

void ordenar(int n, int u)
{
   visitado.assign(n, 0);
   pai.assign(n, -1);
   for (int i = 0; i < n; i++)
      if (visitado[i] == 0)
         DFS(i);

   if (verif)
   {
      for (int i = 0; i < n; i++)
      {
         if (i == n - 1)
            std::cout << pilha.back();
         else
            std::cout << pilha.back() << ' ';

         pilha.pop_back();
      }
   }
   else
   {
      std::cout << -1;
      for (int i = 0; i < n; i++)
         pilha.pop_back();
   }
   std::cout << endl;
}

int main()
{
   int n, m;
   cin >> n >> m;
   while (n != 0 && m != 0)
   {
      int a, b;
      LA = new vector<int>[n];
      for (int i = 0; i < m; i++)
      {
         cin >> a >> b;
         if (a != 0 || b != 0)
            LA[a].push_back(b);
      }
      ordenar(n, 0);
      verif = true;
      cin >> n >> m;
   }
   return 0;
}