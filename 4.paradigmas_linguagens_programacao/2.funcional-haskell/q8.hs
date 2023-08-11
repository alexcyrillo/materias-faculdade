-- Construa uma função que retorne o MDC (Máximo Divisor Comum) de uma lista de números inteiros.

module Main where

mdc :: Int -> Int -> Int
mdc a 0 = abs a
mdc a b = mdc b (mod a b)

main = do
   let a = 15
   let b = 20
   let resultado = mdc a b
   print resultado