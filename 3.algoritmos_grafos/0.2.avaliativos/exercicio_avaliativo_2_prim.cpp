#include <iostream>
#include <queue>
#include <utility>
#include <vector>
#include <cmath>
using namespace std;

#define NAO_VISITADO 0
#define VISITADO 1

typedef pair<int, int> ii;
typedef vector<int> vi;
typedef vector<ii> vii;
typedef vector<pair<int, ii>> uvp;

vi explorado;
priority_queue<ii> Q;
vector<vii> LA, LANova;
int n, m;
uvp lista;

void dfs(int u, int *pai, int *d)
{
   d[u] = VISITADO;
   for (auto it = LANova[u].begin(); it != LANova[u].end(); it++)
   {
      int v = it->first;
      if (d[v] == NAO_VISITADO)
      {
         pai[v] = u;
         dfs(v, pai, d);
      }
   }
}

int dfsar(int *pai, int trajetoFim, int &menor)
{
   int u = trajetoFim;
   if (pai[u] != -1)
   {
      for (int i = 0; i < LANova[u].size(); i++)
      {
         if (pai[u] == LANova[u][i].first)
         {
            if (LANova[u][i].second < menor)
               menor = LANova[u][i].second;
         }
      }
      u = pai[u];
      dfsar(pai, u, menor);
   }
   return menor;
}

void atualizaFila(int u)
{
   explorado[u] = 1;
   for (int j = 0; j < LA[u].size(); j++)
   {
      ii v = LA[u][j];
      if (!explorado[v.first])
         Q.push(ii(v.second, v.first));
   }
}

int prim(int trajetoIni)
{
   explorado.assign(n, 0);
   atualizaFila(trajetoIni);

   int resultado = 0, w;

   while (!Q.empty())
   {
      ii u = Q.top();
      Q.pop();

      int w = u.first, v = u.second;

      if (!explorado[v])
      {
         for (int i = 0; i < LA[v].size(); i++)
            if (w == LA[v][i].second)
            {
               int u = LA[v][i].first;

               LANova[v].push_back(make_pair(u, w));
               LANova[u].push_back(make_pair(v, w));
            }
         atualizaFila(v);
      }
   }

   return resultado;
}

int main()
{
   int u, v, w, trajetoIni, trajetoFim, numFunc;

   cin >> n >> m;

   while (n != 0 && m != 0)
   {
      int *pai = new int[n], *d = new int[n];
      for (int i = 0; i < n; i++)
      {
         d[i] = 0;
         pai[i] = -1;
         vii lista;
         LA.push_back(lista);
         LANova.push_back(lista);
      }

      for (int i = 0; i < m; i++)
      {
         cin >> u >> v >> w;
         u--;
         v--;
         LA[u].push_back(make_pair(v, w));
         LA[v].push_back(make_pair(u, w));
      }

      cin >> trajetoIni >> trajetoFim >> numFunc;

      if (trajetoIni > 0 && trajetoFim <= n)
      {
         trajetoIni--;
         trajetoFim--;
         prim(trajetoIni);
         dfs(trajetoIni, pai, d);
         int menor = 100000000;

         cout << ceil(numFunc / float(dfsar(pai, trajetoFim, menor) - 1)) << endl;
      }

      delete[] pai;
      delete[] d;
      LA.clear();
      LANova.clear();
      cin >> n >> m;
   }
   return 0;
}