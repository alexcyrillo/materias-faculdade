-- Crie uma função zip3 com funcionamento similar à função zip, mas recebendo três listas ao invés de apenas duas.

module Main where

fzip3 :: [a] -> [a] -> [a] -> [(a, a, a)]
fzip3 (x:xs) (y:ys) (z:zs) = [(x, y, z)]

main = do

   let l1 = [1 .. 100]
   let l2 = [0, 1 .. 200]
   let l3 = [1, 3 .. 300]

   print $zip3 l1 l2 l3