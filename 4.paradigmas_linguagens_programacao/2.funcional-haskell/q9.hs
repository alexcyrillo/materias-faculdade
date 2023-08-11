-- Defina uma função recursiva que recebe dois inteiros m e n, onde m < n, e retorne o produto de todos os números no intervalo [m,n].
module Main where

multInt :: Int -> Int -> Int
multInt m n
      |m <= n = m * multInt (m + 1) n
      |otherwise = 1


main = do

   print $multInt 1 6