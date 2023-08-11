-- Fornecidos três valores diferentes entre si, a, b e c, elaborar uma função que retorne quantos desses três números são maiores que o valor médio entre eles
module Main where

numMaiorMedia x y z = maiorMedia x media + maiorMedia y media + maiorMedia z media 
   where
      media = (x + y + z)/3

maiorMedia a b
   |a > b = 1
   |otherwise = 0

main = do
   print $numMaiorMedia 1 5 6