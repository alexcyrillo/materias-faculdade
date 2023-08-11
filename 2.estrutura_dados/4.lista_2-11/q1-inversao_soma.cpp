#include <iostream>

using namespace std;

class noh
{
	friend class lista;
	private:
		int dado;
		noh *proximo;
	public:
		noh(int d);
};

class lista
{
	private:
		noh *lInicio;
		noh *lFim;
		int lTam;
	public:
		lista();
		~lista();  
		void inserir(int d);
		void consulta();
		void soma(lista &l2);
};

noh::noh(int d)
{
	dado = d;
	proximo = NULL;
}

lista::lista()
{
	lInicio = NULL;
	lFim= NULL;
	lTam = 0;
}

lista::~lista()
{
	while(lTam != 0)
	{
		noh *aux = lInicio;
		lInicio = aux->proximo;
		delete aux;
		lTam--;
		if(lTam == 0)
		{
			lInicio = NULL;
			lFim = NULL;
		}
	}
}

void lista::inserir(int d)
{
	noh *aux = new noh(d);
	if(lInicio == NULL && lFim == NULL)
	{
		lInicio = aux;
		lFim = aux;
	}
	else if(lInicio == lFim)
	{
		lInicio->proximo = aux;
		lFim = aux;
	}
	else
	{
		lFim->proximo = aux;
		lFim = aux;
	}
	lTam++;
}

void lista::consulta()
{
	noh *auxNoh = lInicio;
	while(auxNoh != NULL)
	{
		cout << auxNoh->dado << ' ';
		auxNoh = auxNoh->proximo;
	}
}

void lista::soma(lista &l2)
{
	int a, b, soma = 0, sobra = 0;
	noh *nohAux1 = lInicio, *nohAux2 = l2.lInicio;
	lista l3;
	
	do
	{
		if(nohAux1->dado != -1)
		{
			a = nohAux1->dado;
			nohAux1 = nohAux1->proximo;
			if(sobra == 1)
			{
				a += 1;
				sobra = 0;
			}
		}
		else
		{
			a = nohAux1->dado;
		}
		if(nohAux2->dado != -1)
		{
			b = nohAux2->dado;
			nohAux2 = nohAux2->proximo;
			if(sobra == 1)
			{
				b += 1;
				sobra = 0;
			}
		}
		else
		{
			b = nohAux2->dado;
		}

		if(a != -1 && b != -1)
		{
			if(a + b >= 10)
			{
				sobra = 1;
				soma = a + b - 10;
			}
			else
				soma = a + b;
			l3.inserir(soma);
		}
		else if(a != -1 && b == -1)
		{
			if(a >= 10)
			{
				sobra = 1;
				soma = a - 10;
			}
			else
				soma = a;
			l3.inserir(soma);
		}
		else if(a == -1 && b != -1)
		{
			if(b >= 10)
			{
				sobra = 1;
				soma = b - 10;
			}
			else
				soma = b;
			l3.inserir(soma);
		}

		if(a == -1 && b == -1)
			soma = -1;
	}
	while(soma != -1);
	l3.consulta();
}

int main()
{
	int n;
	lista l1, l2, lSoma;
	do
	{
		cin >> n;
		l1.inserir(n);
	}
	while(n >= 0);
	do
	{
		cin >> n;
		l2.inserir(n);
	}
	while(n >= 0);
	l1.soma(l2);
	return 0;
}