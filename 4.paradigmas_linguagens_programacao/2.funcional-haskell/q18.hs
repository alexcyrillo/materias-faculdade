{-
Faça uma função na linguagem Haskell, chamada eliminaVogal, que recebe uma
String e retorna uma tupla (String, Int, Int):
- String - conterá a string de entrada com as vogais removidas (a, e, i, o, u)
- O primeiro Int corresponde ao tamanho da string de entrada
- O segundo Int corresponde ao tamanho da string de saída (com vogais removidas)
Exemplos:
>>> eliminaVogal "Paradigmas de Linguagens de Programacao"
("Prdgms d Lnggns d Prgrmc", 39, 24)
>>> eliminaVogal "PLP"
("PLP", 3, 3)
Observação: As strings serão compostas apenas de caracteres ASCII, ou seja, não terão
acentos e nem 'ç'.
-}

module Main where

sTam :: String -> Int
sTam [] = 0
sTam [x] = 1
sTam (x:xs) = 1 + sTam xs

sRem :: String -> String
sRem s1 = [ c | c <- s1, c `notElem` ['a','e','i','o','u','A','E','I','O','U']]

removeVogal :: String -> (String, Int, Int)
removeVogal s1 = (stringSemVogal, tamInicial, tamFinal)
   where
      stringSemVogal = sRem s1
      tamInicial = sTam s1
      tamFinal = sTam (sRem s1)


main = do

   print $removeVogal "Paradigmas de LinguAgens de Programacao"