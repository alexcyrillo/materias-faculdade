/*
n: numero de vertices
m: numero de arestas

Lista de Arestas
   complexidade de armazenamento: O(m)

Utilizada no Algoritmo de Kruskall

Cálculo do Grau de um Dado Vértice
   Considere um grafo não-direcionado simples, G=(V,E), representado por uma lista de arestas. Como calcular o grau de um dado vértice v∈V?
*/


#include <iostream>
#include <vector>
#include <utility>
using namespace std;

int main()
{
   int n, m; // numero de vertices; numero de arestas do grafo

   cin >> n >> m;

   while (!cin.eof())
   {

      vector<pair<int, int>> lista_arestas; // lista de arestas

      // leitura do grafo (supondo que os pares estejam ordenados)
      int u, v;
      for (int i = 1; i <= m; i++)
      {
         cin >> u >> v; // lendo as arestas do grafo
         pair<int, int> uv(u, v);
         lista_arestas.push_back(uv);
      }

      cout << "Lista de arestas" << endl;
      for (auto it = lista_arestas.begin(); it != lista_arestas.end(); it++)
      {
         cout << "(" << (*it).first << "," << (*it).second << ")" << endl;
      }

      int vertice = 2; // vertice escolhido
      int grau = 0;    // grau do vertice escolhido
      cout << "Grau do vertice " << vertice << endl;
      for (auto it = lista_arestas.begin(); it != lista_arestas.end(); it++)
      {
         if (((*it).first == vertice && (*it).second != vertice) ||
             ((*it).first != vertice && (*it).second == vertice))
         {
            grau++;
         }

         // em caso de loops
         else if ((*it).first == vertice && (*it).second == vertice)
         {
            grau += 2;
         }
      }
      cout << grau << endl;
      cin >> n >> m;
   }
   return 0;
}