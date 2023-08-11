-- Defina uma função que, dada uma lista de números reais A, retorne uma lista B com os elementos presentes em A que são menores do que a média de todos os elementos de A.

module Main where

tamanho :: [Float] -> Float
tamanho [] = 0
tamanho [x] = 1
tamanho (x:xs) = 1 + tamanho xs 

elementosSoma :: [Float] -> Float
elementosSoma [] = 0
elementosSoma (x:xs) = (x + elementosSoma xs)

calculoMedia :: [Float] -> Float
calculoMedia a = (elementosSoma a)/(tamanho a)

menorQueMedia :: [Float] -> Float -> [Float]
menorQueMedia [] media = []
menorQueMedia (x:xs) media
      |x < media = x : menorQueMedia xs media
      |otherwise = menorQueMedia xs media

main = do

   let l1 = [2.5, 5.3, 9, 4.378, 0.2]
   print $menorQueMedia l1 (calculoMedia l1)
