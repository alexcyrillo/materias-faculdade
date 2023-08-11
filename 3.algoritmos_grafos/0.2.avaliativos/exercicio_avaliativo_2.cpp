#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
#include <cmath>

using namespace std;

typedef vector<int> vi;
typedef pair<int, int> ii;
typedef vector<pair<int, ii>> uvp;

class UFDS
{
public:
   UFDS(int n)
   {
      rank.assign(n, 0);
      p.assign(n, 0);
      for (int i = 0; i < n; i++)
         p[i] = i;
   }

   int busca(int i)
   {
      if (p[i] == i)
         return i;

      p[i] = busca(p[i]);
      return p[i];
   }

   bool mesmoConjunto(int i, int j)
   {
      return busca(i) == busca(j);
   }

   void uniao(int i, int j)
   {
      if (!mesmoConjunto(i, j))
      {
         int c1 = busca(i);
         int c2 = busca(j);

         if (rank[c1] > rank[c2])
            p[c2] = c1;

         else
         {
            p[c1] = c2;
            if (rank[c1] == rank[c2])
               rank[c2]++;
         }
      }
   }

   friend ostream &operator<<(ostream &saida, const UFDS &conjunto)
   {
      for (int i = 0; i < conjunto.p.size(); i++)
         saida << i << ": p(" << conjunto.p[i] << "), rank(" << conjunto.rank[i] << ")";
      return saida;
   }

private:
   vi p;
   vi rank;
};

int kruskall(uvp &arestas, int n, int m, int trajetoIni, int trajetoFim)
{
   sort(arestas.begin(), arestas.end());
   reverse(arestas.begin(), arestas.end());

   int resultado = arestas[0].first;

   UFDS ufds(n);

   int u, v;
   pair<int, ii> e;

   int numero_arestas = 0;
   for (int i = 0; i < m; i++)
   {
      e = arestas[i];
      u = e.second.first;
      v = e.second.second;
      if (!ufds.mesmoConjunto(u, v))
      {
         if (e.first < resultado)
            resultado = e.first;
         numero_arestas++;
         if (numero_arestas == n - 1 || ufds.mesmoConjunto(trajetoIni, trajetoFim))
            return resultado;

         ufds.uniao(u, v);
      }
   }

   return resultado;
}

int main()
{
   int numRuas, numIntersec, u, v, w, trajetoIni, trajetoFim;
   float numFunc;
   uvp arestas;

   cin >> numIntersec >> numRuas;

   for (int i = 0; i < numRuas; i++)
   {
      cin >> u >> v >> w;
      arestas.push_back(make_pair(w, make_pair(u, v)));
      arestas.push_back(make_pair(w, make_pair(v, u)));
   }

   cin >> trajetoIni >> trajetoFim >> numFunc >> u >> v;

   cout << endl
        << kruskall(arestas, numRuas, numIntersec, trajetoIni, trajetoFim)
        << endl
        << ceil(numFunc / kruskall(arestas, numRuas, numIntersec, trajetoIni, trajetoFim));

   return 0;
}