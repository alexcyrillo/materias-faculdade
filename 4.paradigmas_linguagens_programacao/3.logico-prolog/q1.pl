/* 1. Considere a seguinte base de fatos em Prolog:
aluno(joao, calculo).
aluno(maria, calculo).
aluno(joel, programacao).
aluno(joel, estrutura).
frequenta(joao, ufla).
frequenta(maria, ufla).
frequenta(joel, ufrj).
professor(carlos, calculo).
professor(ana_paula, estrutura).
professor(pedro, programacao).
funcionario(pedro, ufrj).
funcionario(ana_paula, ufla).
funcionario(carlos, ufla).
Escreva as seguintes regras em Prolog:
a) Quem são os alunos do professor X?
b) Quem são as pessoas que estão associadas a uma universidade X? (alunos e
professores) */

% Base de dados

aluno(joao, calculo).
aluno(maria, calculo).
aluno(joel, programacao).
aluno(joel, estrutura).
frequenta(joao, ufla).
frequenta(maria, ufla).
frequenta(joel, ufrj).
professor(carlos, calculo).
professor(ana_paula, estrutura).
professor(pedro, programacao).
funcionario(pedro, ufrj).
funcionario(ana_paula, ufla).
funcionario(carlos, ufla).

% Funções

alunos(X,Z) :-
    professor(X, Y),
    aluno(Z, Y).

associada(X, Z) :-
    funcionario(Z, X);
    frequenta(Z, X).