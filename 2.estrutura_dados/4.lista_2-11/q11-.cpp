#include <iostream>

using namespace std;

class noh
{
	friend class lista;
	private:
		int dado;
		noh *anterior;
		noh *proximo;
	public:
		noh(int d);
};

class lista
{
	private:
		noh *inicio;
		noh *fim;
	public:
		lista();
		~lista();
		void inserir(int d);
		void remover(lista& l2);
		void consultar();
};

noh::noh(int d)
{
	dado = d;
	anterior = NULL;
	proximo = NULL;
}

lista::lista()
{
	inicio = NULL;
	fim = NULL;
}

lista::~lista()
{
	while(fim != NULL && inicio != NULL)
	{
		noh *aux;
		aux = inicio;
		inicio = inicio->proximo;
		delete aux;
	}
}

void lista::inserir(int d)
{
	noh *aux = new noh(d);
	if(inicio == NULL and fim == NULL)
	{
		inicio = aux;
		fim = aux;
	}
	else
	{
		fim->proximo = aux;
		fim = aux;
	}
}

void lista::remover(lista& l2)
{
	noh *aux = inicio, *aux2 = l2.inicio;
	int dado1, dado2;
	while(aux2 != NULL)
	{
		dado2 = aux2->dado;
		while(aux != NULL)
		{
			dado1 = aux->dado;
			if(dado1 == dado2)
			{
				noh *auxDel = aux;
				if(aux == inicio && aux == fim)
				{
					inicio == NULL;
					fim == NULL;
					delete auxDel;
					delete aux;
				}
				else if(aux == inicio)
				{
					aux = aux->proximo;
					inicio = aux;
					delete auxDel;
				}
				else if(aux == fim)
				{
					aux = aux->anterior;
					fim = aux;
					delete auxDel;
				}
				else
				{
					aux = aux->anterior;
					aux->proximo = auxDel->proximo;
					delete auxDel;
				}
			}
			aux = aux->proximo;
		}
		aux2 = aux2->proximo;
	}
}

void lista::consultar()
{
	noh *aux = inicio;
	do
	{
		cout << aux->dado;
		aux = aux->proximo;
	}
	while(aux != NULL);
}

int main()
{
	int n, dado;
	lista l1, l2;
	cin >> n;
	for(int i = 0; i < n; i++)
	{
		cin >> dado;
		l1.inserir(dado);
	}
	cin >> n;
	for(int i = 0; i < n; i++)
	{
		cin >> dado;
		l2.inserir(dado);
	}
	l1.remover(l2);
	l1.consultar();
	cout << endl;
	return 0;
}