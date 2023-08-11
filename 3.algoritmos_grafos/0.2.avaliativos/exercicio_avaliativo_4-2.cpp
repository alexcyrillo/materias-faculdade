// https://www.beecrowd.com.br/judge/pt/custom-problems/view/3359

#include <iostream>

using namespace std;

int main()
{
   int **MA, **MAf, **MAi;
   int n, m, a, b, o, k;
   cin >> n;
   do
   {
      if (n != -1)
      {
         cin >> m;
         MA = new int *[n];
         MAf = new int *[n];
         MAi = new int *[n];
         for (int i = 0; i < n; i++)
         {
            MA[i] = new int[n];
            MAf[i] = new int[n];
            MAi[i] = new int[n];
            for (int j = 0; j < n; j++)
            {
               MA[i][j] = 0;
               MAf[i][j] = 0;
               MAi[i][j] = 0;
            }
         }

         for (int i = 0; i < m; i++)
         {
            cin >> a >> b;
            MA[a][b] = 1;
            MA[b][a] = 1;
            MAf[a][b] = 1;
            MAf[b][a] = 1;
         }

         cin >> o >> k;

         for (int i = 1; i < k; i++)
         {
            for (int linha = 0; linha < n; linha++)
               for (int coluna = 0; coluna < n; coluna++)
                  for (int j = 0; j < n; j++)
                     MAi[linha][coluna] += MAf[linha][j] * MA[j][coluna];
            for (int linha = 0; linha < n; linha++)
               for (int coluna = 0; coluna < n; coluna++)
               {
                  MAf[linha][coluna] = MAi[linha][coluna];
                  MAi[linha][coluna] = 0;
               }
         }

         pair<int, int> ij[o];
         for (int i = 0; i < o; i++)
         {
            cin >> a >> b;
            ij[i] = make_pair(a, b);
         }

         cin >> n;
         for (int i = 0; i < o; i++)
         {
            if (n != -1)
               cout << MAf[ij[i].first][ij[i].second] << endl;
            else
            {
               if (i == o - 1)
                  cout << MAf[ij[i].first][ij[i].second];
               else
                  cout << MAf[ij[i].first][ij[i].second] << endl;
            }
         }
      }
   } while (n != -1);

   return 0;
}