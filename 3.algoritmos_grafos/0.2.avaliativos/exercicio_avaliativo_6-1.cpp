// https://www.beecrowd.com.br/judge/pt/problems/view/1389
#include <iostream>
#include <vector>
#include <cstring>

using namespace std;

#define NAO_VISITADO 0

typedef pair<int, int> ii;

int n, c, *low, *d, x = 0;
vector<int> *confederacao;
vector<ii> *LA;
bool *visitado, *articulacao;

void dfs(int u, int p, int cont_dfs)
{
    if (!visitado[u])
    {
        d[u] = low[u] = cont_dfs++;
        visitado[u] = true;
        bool anterior = true;

        for (int i = 0; i < LA[u].size(); i++)
        {
            int v = LA[u][i].first;

            if (v == p)
            {
                if (!anterior)
                    low[u] = min(low[u], cont_dfs--);
                anterior = false;
            }
            else if (visitado[v])
            {
                low[u] = min(low[u], d[v]);
            }
            else
            {
                dfs(v, u, cont_dfs);
                low[u] = min(low[u], low[v]);

                if (low[v] > cont_dfs)
                    articulacao[LA[u][i].second] = true;
            }
        }
    }
}

int main()
{
    cin >> n >> c;
    string cidadeConf;

    while (n != 0 && c != 0)
    {
        int grau[c];
        vector<int> caminhos;
        low = new int[c];
        d = new int[c];
        pai = new int[c];
        LA = new vector<ii>[n + 1];
        confederacao = new vector<int>[n + 1];
        visitado = new bool[c];
        articulacao = new bool[n + 1];

        for (int i = 0; i < c; i++)
        {
            articulacao[i] = false;
            LA[i].clear();
            grau[i] = 0;
        }

        for (int i = 0; i < c; i++)
        {
            int k, k1;
            cin >> k;
            for (int j = 0; j < k; j++)
            {
                cin >> k1;
                confederacao[k1].push_back(i);
            }
        }

        for (int i = 0; i < n; i++)
        {
            int u = confederacao[i][0], v;

            if (confederacao[i].size() == 1)
                v = u;
            else
                v = confederacao[i][1];

            grau[u]++;
            grau[v]++;
            LA[u].push_back(make_pair(v, i));
            LA[v].push_back(make_pair(u, i));
        }

        for (int i = 0; i < c; i++)
        {
            visitado[i] = NAO_VISITADO;
            if (grau[i] == 1)
                caminhos.push_back(i);
        }

        for (int i = 0; i < c && x <= 1; i++)
            if (grau[i] != 0 && !visitado[i])
            {
                dfs(i, -1, -1);
            }

        if (caminhos.size() > 2)
            cout << -1 << endl;
        else if (caminhos.size() == 0)
            cout << 0 << endl;
        else
        {
            int cidadeInicial = n;

            for (int i = 0; i <= 1; i++)
            {
                int u = caminhos[i];

                if (LA[u].size() == 1)
                    cidadeInicial = min(cidadeInicial, LA[u][0].second);
                else
                {
                    for (int j = LA[u].size() - 1; j >= 0; j--)
                        if (!articulacao[LA[u][j].second])
                            cidadeInicial = min(cidadeInicial, LA[u][j].second);
                }
            }
            cout << cidadeInicial << endl;
        }
        cin >> n >> c;
    }
    return 0;
}