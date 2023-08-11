// https://www.beecrowd.com.br/judge/pt/problems/view/1902
#include <iostream>
#include <utility>
#include <vector>
#include <map>

using namespace std;

#define NAO_VISITADO -1

map<string, int> nomesInt;

typedef vector<int> vi; // vetor de inteiros

/* Variaveis globais */

// low[v]: tempo de descoberta do ancestral do vertice v descoberto "mais cedo" na DFS
int *low;

// d[v]: tempo de descoberta pre-ordem do vertice v
int *d;

// pilha: pilha de vertices descobertos pela DFS
vi pilha;

// visitado[v]: igual a 1 se o vertice v foi visitado
int *visitado;

// tempo de descoberta atual da DFS
int tempo = 0, numCasamentos = 0;

// lista de adjacencia do grafo
vector<int> *LA;

// u: raiz da DFS
void tarjanCFC(int u)
{

    low[u] = d[u] = tempo++;

    // insercao na pilha de vertices descobertos
    pilha.push_back(u);

    visitado[u] = 1;
    for (int j = 0; j < LA[u].size(); j++)
    {
        int v = LA[u][j];

        if (d[v] == NAO_VISITADO)
            tarjanCFC(v);

        if (visitado[v])
            low[u] = min(low[u], low[v]);
    }

    // isso significa que u eh a raiz da sua respectiva CFC
    if (low[u] == d[u])
    {
        int tam = 0;
        while (true)
        {
            int vtx = pilha.back();
            pilha.pop_back();
            // atribuimos para zero para que o low do vizinho de vtx nao seja mais atualizado
            visitado[vtx] = 0;
            tam++;

            if (u == vtx)
                break;
        }
        if (tam >= 2)
            ++numCasamentos;
    }
}

int main()
{
    string nome1, nome2;
    int p1, p2, numPessoas = 0;

    LA = new vector<int>[100000];

    while (cin >> nome1 >> nome2)
    {
        if (nomesInt.count(nome1))
            p1 = nomesInt[nome1];
        else
        {
            p1 = numPessoas;
            nomesInt[nome1] = numPessoas;
            numPessoas++;
        }

        if (nomesInt.count(nome2))
            p2 = nomesInt[nome2];
        else
        {
            p2 = numPessoas;
            nomesInt[nome2] = numPessoas;
            numPessoas++;
        }

        LA[p1].push_back(p2);
    }

    d = new int[numPessoas];
    low = new int[numPessoas];
    visitado = new int[numPessoas];

    for (int i = 0; i < numPessoas; i++)
    {
        d[i] = NAO_VISITADO;
        low[i] = 0;
        visitado[i] = 0;
    }

    for (int i = 0; i < numPessoas; i++)
        if (d[i] == NAO_VISITADO)
            tarjanCFC(i);

    cout << numCasamentos;
    return 0;
}