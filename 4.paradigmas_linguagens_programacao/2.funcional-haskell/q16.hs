{-Construa a função de Ackermann, a qual é definida por:
A(m, n) = n + 1 se m = 0
A(m, n) = A(m-1, 1) se m<>0 e n=0
A(m, n) = A(m-1, A(m, n-1)) se m<>0 e n<>0
<> significa diferente-}

module Main where

ackermann :: Int -> Int -> Int
ackermann m n 
      |m == 0 = n + 1
      |m /= 0 && n == 0 = ackermann (m - 1) 1
      |m /= 0 && n /= 0 = ackermann (m - 1) (ackermann m (n - 1))

main = do

   print $ackermann 3 6