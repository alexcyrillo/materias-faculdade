--A raiz quadrada inteira de um número inteiro positivo n é o maior número inteiro cujo quadrado é menor ou igual a n. Por exemplo, a raiz quadrada inteira de 15 é 3, e a raiz quadrada inteira de 16 é 4. Defina uma função recursiva para calcular a raiz quadrada inteira.

module Main where

raizInt :: Int -> Int
raizInt a = verif a (a - 1)

verif :: Int -> Int -> Int
verif a b
      |(b * b) > a = verif a (b - 1)
      |(b * b) <= a = b

main = do
   print $raizInt 27