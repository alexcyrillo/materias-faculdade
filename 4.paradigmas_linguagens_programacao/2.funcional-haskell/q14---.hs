{-Dada uma base de dados de 10 alunos matriculados em uma disciplina, construa
funções que retornem:
a. número de reprovados na disciplina. Considere como aprovado o aluno que
obteve uma nota acima ou igual a 6.0;
b. o nome do(a) aluno(a) que obteve a menor nota.
type Nome = String
type Curso = String
type Periodo = Int
type Nota = Float
type Aluno = (Nome, Curso, Periodo, Nota)
type Disciplina = [Aluno]
alunos :: Int -> Aluno
alunos matricula
   | matricula == 1 = ("Rodrigo", "S.Inf.", 3, 6.0)
   | matricula == 2 = ("Joao", "Eng.Comp.", 5, 5.0)
   | matricula == 3 = ("Lucas", "C.Comp.", 8, 3.5)
   | matricula == 4 = ("Ana", "C.Comp.", 5, 8.0)
   | matricula == 5 = ("Maria", "C.Comp.", 7, 9.5)
   | matricula == 6 = ("Paulo", "C.Comp", 6, 6.0)
   | matricula == 7 = ("Jose", "S.Inf.", 8, 7.0)
   | matricula == 8 = ("Eduarda", "C.Comp.", 4, 1.0)
   | matricula == 9 = ("Carla", "Eng.Comp.", 6, 6.5)
   | matricula == 10 = ("Luiz", "C.Comp.", 7, 5.7)
Exemplo de uso:
Main> contar_reprovados 10
4
Main> menor_nota 10
"Eduarda"-}

type Nome = String
type Curso = String
type Periodo = Int
type Nota = Float
type Aluno = (Nome, Curso, Periodo, Nota)
type Disciplina = [Aluno]
alunos :: Int -> Aluno
alunos matricula
   | matricula == 1 = ("Rodrigo", "S.Inf.", 3, 6.0)
   | matricula == 2 = ("Joao", "Eng.Comp.", 5, 5.0)
   | matricula == 3 = ("Lucas", "C.Comp.", 8, 3.5)
   | matricula == 4 = ("Ana", "C.Comp.", 5, 8.0)
   | matricula == 5 = ("Maria", "C.Comp.", 7, 9.5)
   | matricula == 6 = ("Paulo", "C.Comp", 6, 6.0)
   | matricula == 7 = ("Jose", "S.Inf.", 8, 7.0)
   | matricula == 8 = ("Eduarda", "C.Comp.", 4, 1.0)
   | matricula == 9 = ("Carla", "Eng.Comp.", 6, 6.5)
   | matricula == 10 = ("Luiz", "C.Comp.", 7, 5.7)

reprovados Disciplina -> [String] 
reprovados [] = []
reprovados (x:xs)
      | [(_, _, _, nota)] 