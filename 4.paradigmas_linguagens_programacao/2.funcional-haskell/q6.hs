-- Calcular a soma dos números inteiros compreendidos em um intervalo [x,y], incluindo e excluindo os limites.
module Main where

somaInt :: Int -> Int -> Int
somaInt x y
      |(x >= x) && (x < y) = x + somaInt (x + 1) y
      |otherwise = 0


main = do

   print $somaInt 1 5