-- Construa uma função que retorne o MMC (Mínimo Múltiplo Comum) entre dois números inteiros.

module Main where

mmc :: Int -> Int -> Int
mmc a b = div (abs a * abs b) (mdc a b)

mdc :: Int -> Int -> Int
mdc a 0 = abs a
mdc a b = mdc b (mod a b)

main = do
   let a = 15
   let b = 20
   let resultado = mmc a b
   print resultado