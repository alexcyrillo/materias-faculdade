emover([X|T], X, T).
remover([H|T], X, [H|R]) :-
    H \= X,
    remover(T, X, R).