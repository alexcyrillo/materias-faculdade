/* 
n: numero de vertices
m: numero de arestas

complexidade de tempo: O(n^3)

implementado em 2.matriz_de_adjacencia.cpp

wharshall(M[1..n][1..n], n)
 	w = n
 	for k = 1 to n
 		for i = 1 to n
 			for j = 1 to n
 				w[i][j] = w[i][j] or (w[i][j] and w[i][j])
 	return w
*/
for (int k = 1; k <= n; k++)
         for (int u = 1; u <= n; u++)
            for (v = 1; v <= n; v++)
               W[u][v] = W[u][v] || (W[u][k] && W[k][v]);