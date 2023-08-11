/* 
n: numero de vertices
m: numero de arestas

Matriz de incidência 
   complexidade de armazenamento: O(m*n)

Código
   complexidade de armazenamento: O(m*n)
   complexidade de tempo: O(m*n)

Cálculo da Vizinhança de um Dado Vértice
   Considere um grafo não-direcionado simples (sem loops e sem arestas paralelas),  G=(V,E) , representado por uma matriz de incidência. Como calcular os vizinhos de um dado vértice  v∈V ? 

*/


#include <iostream>
using namespace std;

int main()
{
   int n, m; // numero de vertices; numero de arestas do grafo

   cin >> n >> m;

   while (!cin.eof())
   {

      int **M = new int *[m + 1]; // matriz de incidencia
      for (int i = 1; i <= m; i++)
         M[i] = new int[n + 1];

      for (int i = 1; i <= m; i++)
         for (int v = 1; v <= n; v++)
            M[i][v] = 0;

      // leitura do grafo
      int u, v;
      for (int i = 1; i <= m; i++)
      {
         cin >> u >> v; // lendo as arestas do grafo
         M[i][u] = M[i][v] = 1;
      }

      cout << "Matriz de incidencia" << endl;
      for (int i = 1; i <= m; i++)
      {
         for (int v = 1; v <= n; v++)
            cout << M[i][v] << " ";
         cout << endl;
      }

      int vertice = 1; // vertice escolhido
      cout << "Vizinhos do vertice " << vertice << endl;
      for (int i = 1; i <= m; i++)
      {
         bool continua = true;
         if (!M[i][vertice])
            continue;

         for (int v = 1; v <= n && continua; v++)
            if (M[i][vertice] && M[i][v] && vertice != v)
            {
               cout << v << " ";
               continua = false;
            }
      }
      cout << endl;
      for (int i = 0; i <= m; m++)
         delete M[i];

      delete[] M;
      cin >> n >> m;
   }
   return 0;
}