const PI = 3.14;

{
	let a = 1;
	var b = 0;
	a++;

	/*
	PI = 3.1415;
	 gera um erro pois PI e const
	*/

	console.log(a, b, PI);
}
//a variavel "a" deixa de existir quando deixa o bloco
//a variavel "b" continua existindo quando deixa o bloco

/*
console.log(a);
nao funciona, pois "a" nao esta alocado
*/

b++;
console.log(b, PI);
//"b"
