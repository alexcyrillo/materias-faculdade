/*
n: numero de vertices
m: numero de arestas

Lista de Adjacência
   complexidade de armazenamento: O(m)


Festa de São Petersburgo (https://www.beecrowd.com.br/judge/pt/problems/view/1209?origem=1)
   São Petersburgo tornou-se após o fim da cortina de ferro, no início dos anos 90, uma das principais cidades da cena alternativa em todo o mundo. Grupos de punks, diversas bandas de hardcore e outros representantes da cena alternativa mudaram-se para a cidade, atraídas pela grande quantidade de jovens. Com o surgimento das comunidades virtuais, alguns anos mais tarde, notou-se o enorme potencial do uso destas comunidades para combinar encontros, festas, raves, etc.

   Nestas festas de São Petersburgo é sempre muito importante que cada um dos participantes tenha pelo menos um certo número de amigos na rede social. E, ao mesmo tempo, desejamos convidar o maior número possível de pessoas de São Petersburgo desde que a restrição com relação ao número de amigos seja satisfeita. Tal restrição diz que, para ser convidada a festa, a pessoa precisa ter pelo menos um número  K  de amigos na lista de convidados.

   Sua tarefa neste problema é, dado o conjunto de pessoas da comunidade e a lista de suas relações, determinar quais devem ser chamadas para que a festa tenha a maior quantidade possível de participantes satisfazendo a restrição.

   Entrada
   A entrada é composta por diversas instâncias e termina com final de arquivo (EOF). A primeira linha de cada instância contém três inteiros  N  ( 1≤N≤1000 ),  M  e  K  ( O≤K≤N ) representando respectivamente o número de pessoas na comunidade, o número de relações de amizade nessa comunidade e o número mínimo de amigos convidados uma pessoa precisa ter para ser convidada. Cada pessoa da comunidade é identificada por números de  1  a  N . Cada uma das próximas  M  linhas contém um par de pessoas indicando que elas são amigas na rede social.

   Saída
   Para cada instância imprima uma única linha contendo a lista das pessoas a serem convidadas separadas por um espaço em branco. A lista deve estar ordenada em ordem crescente. Caso ninguém possa ser convidado, imprima o número 0.
   */
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <functional>

using namespace std;

int main()
{
   int n, m, k;
   cin >> n >> m >> k;

   while (!cin.eof())
   {
      // considerando que os índices dos vértices começam de 1 e vão até n
      vector<int> *lista_adj = new vector<int>[n + 1];
      int *grau = new int[n + 1];

      for (int i = 1; i <= n; i++)
         grau[i] = 0; // grau do nó i

      // leitura do grafo
      int u, v;
      for (int i = 0; i < m; i++)
      {
         cin >> u >> v; // lendo as arestas do grafo

         // evitando a leitura de vertices repetidos nas listas
         if (find(lista_adj[u].begin(), lista_adj[u].end(), v) != lista_adj[u].end())
            continue;

         // grafo nao-orientado
         lista_adj[u].push_back(v); // u -> v
         lista_adj[v].push_back(u); // v -> u

         grau[u]++;
         grau[v]++;
      }

      // empilha todos que tem menos de k amigos
      priority_queue<pair<int, int>> PQ;
      for (int i = 1; i <= n; i++)
         if (grau[i] < k)
            PQ.push({grau[i], i});

      // para cada um que nao vai na festa, reduz o numero dos seus amigos
      while (!PQ.empty())
      {
         int x = PQ.top().second;
         PQ.pop();

         for (auto it = lista_adj[x].begin(); it != lista_adj[x].end(); it++)
            // se o numero de amigos foi reduzido, inclui na PQ para tirar mais amigos
            if (--grau[*it] == k - 1)
               PQ.push({grau[*it], *it});
      }

      // apenas para imprimir corretamente
      bool primeiro = true;
      for (int i = 1; i <= n; i++)
         if (grau[i] >= k)
         {
            if (!primeiro)
               cout << " ";

            cout << i;
            primeiro = false;
         }

      if (primeiro)
         cout << 0;

      cout << endl;

      cin >> n >> m >> k;
   }

   return 0;
}