let lista = [0, "1", [2, "3"]];

console.log(lista.length);
console.log(lista[2]);

lista[3] = 4;

lista.pop();
lista.push(5);
lista.shift();
lista.unshift(6);

console.log(lista);
