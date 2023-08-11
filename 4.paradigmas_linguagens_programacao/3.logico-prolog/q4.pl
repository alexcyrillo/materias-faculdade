iguaisL([H|T], [H|T]).
iguaisL([H1|T1], [H2|T2]):-
    H1 == H2, 
    iguaisL(T1, T2).