-- -- Elaborar uma função para concatenar duas listas, sem utilizar o operador de concatenação do Haskell (++)

module Main where

concatenar :: [a]->[a]->[a]
concatenar [] l2 = l2
concatenar (x:xs) l2 = x : concatenar xs l2


main = do

   let l1 = [0,2 .. 20]
   let l2 = [1,3 .. 20]
   print $concatenar l1 l2
