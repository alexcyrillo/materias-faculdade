/* 
n: numero de vertices
m: numero de arestas

Matriz de adjacencia 
   complexidade de armazenamento: O(n^2)

Código (Alg. de Warshall)
   complexidade de armazenamento: O(n^2)
   complexidade de tempo: O(n^3)


Algoritmo de Warshall
   Seja  W∈Bn×n  uma matriz binária quadrada de dimensão  n , em que  n  é o número de vértices do grafo direcionado. A matriz  W[u][v]  é  1  se o vértice  v  é alcançável a partir de  u .

   1. A alcançabilidade direta entre os vértices é obtida a partir da matriz de adjacência do grafo.
   2. Para calcularmos a alcançabilidade indireta, vamos considerar a presença de vértices de "atalho", que usaremos para alcançar os outros.
   3. Suponha  {1,...,k}  como um conjunto de vértices candidatos a serem intermediários no percurso de  u  a  v ,  k≤n .
   4. Se  W[u][v]  é igual a 1, não temos o que fazer. Caso o contrário, suponha um vértice intermediário  k . Então, se  W[u][k]=1  e  W[k][v]=1 , logo  W[u][v]=1 .
   5. Mas quais valores de  k  podemos testar? Todos, de forma iterativa! O importante é notar que se descobrimos que com  n=10  e  k=3 , conseguimos alcançar  2  a partir de  1 , utilizamos essa informação para os próximos passos do algoritmo, configurando que  W[1][2]=1 , mesmo que não haja ligação direta no grafo inicial.

*/
#include <iostream>
using namespace std;

int main()
{
   int n, m; // numero de vertices; numero de arestas do grafo

   cin >> n >> m;

   while (!cin.eof())
   {

      int **M = new int *[n + 1]; // matriz de adjacencia
      int **W = new int *[n + 1]; // matriz do fecho transitivo
      for (int i = 1; i <= n; i++)
      {
         M[i] = new int[n + 1];
         W[i] = new int[n + 1];
      }

      for (int u = 1; u <= n; u++)
         for (int v = 1; v <= n; v++)
            M[u][v] = W[u][v] = 0;

      // leitura do grafo
      int u, v;
      for (int i = 0; i < m; i++)
      {
         cin >> u >> v; // lendo as arestas do grafo
         M[u][v] = W[u][v] = 1;
      }

      // Implementacao do algoritmo de Warshall
      for (int k = 1; k <= n; k++)
         for (int u = 1; u <= n; u++)
            for (v = 1; v <= n; v++)
               W[u][v] = W[u][v] || (W[u][k] && W[k][v]);

      cout << "Matriz de adjacencia" << endl;
      for (int u = 1; u <= n; u++)
      {
         for (int v = 1; v <= n; v++)
            cout << M[u][v] << " ";
         cout << endl;
      }

      cout << "Fecho transitivo de cada vertice" << endl;
      for (int u = 1; u <= n; u++)
      {
         cout << "Vertice " << u << ": ";
         for (int v = 1; v <= n; v++)
            if (W[u][v])
               cout << v << " ";
         cout << endl;
      }

      for (int u = 0; u <= n; u++)
      {
         delete M[u];
         delete W[u];
      }
      delete[] M;
      delete[] W;

      cin >> n >> m;
   }
   return 0;
}