-- Elabore uma função que recebe uma string e remova espaços repetidos: ao encontrar dois ou mais espaços seguidos, deixa apenas um.

module Main where

removeEspaco :: String -> String
removeEspaco [] = []
removeEspaco [x] = [x]
removeEspaco (x:y:lc)
      |(x == ' ' && y == ' ') = removeEspaco (y:lc)
      |otherwise = x : removeEspaco (y:lc)



main = do

   let l1 = "teste            tes  tan do"
   print $removeEspaco l1