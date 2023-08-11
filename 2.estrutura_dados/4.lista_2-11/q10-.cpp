#include <iostream>

using namespace std;

class noh
{
	friend class lista;
	private:
		int nohDado;
		noh *nohProximo;
	public:
		noh(int d);
};

class lista
{
	private:
		noh *listaInicio;
		noh *listaFim;
		int listaTam;
	public:
		lista();
		~lista();
		void inserir(int d);
		void removerInicio();
		int removerFim();
		int tamanho() {return listaTam;}
		lista divide(int pos);
};

noh::noh(int d)
{
	nohDado = d;
	nohProximo = NULL;
}

lista::lista()
{
	listaInicio = NULL;
	listaFim = NULL;
	listaTam = 0;
}

lista::~lista()
{
	while(listaTam > 0)
	{
		noh *nohAux;
		nohAux = listaInicio;
		listaInicio = listaInicio->nohProximo;
		delete nohAux;
		listaTam--;
	}
}

void lista::inserir(int d)
{
	noh *nohAux = new noh(d);
	if(listaInicio == NULL && listaFim == NULL)
		listaInicio = nohAux;
	else
		listaFim->nohProximo = nohAux;
	listaFim = nohAux;
	listaTam++;
}

void lista::removerInicio()
{
	if(listaTam > 0)
	{
		noh *nohAux = listaInicio;
		listaInicio = nohAux->nohProximo;
		delete nohAux;
		listaTam--;
		if(listaTam == 0)
			listaFim == NULL;
	}
}

int lista::removerFim()
{
	int dado = -1;
	if(listaTam > 0)
	{
		noh *nohAux = listaInicio;
		noh *nohAnterior = NULL;
		while(nohAux->nohProximo != NULL)
		{
			nohAnterior = nohAux;
			nohAux = nohAux->nohProximo;
		}
		dado = nohAux->nohDado;
		if(nohAnterior == NULL)
			listaInicio = NULL;
		else
			nohAnterior->nohProximo = NULL;
		delete nohAux;
		listaFim = nohAnterior;
		listaTam--;
	}
	return dado;
}

lista lista::divide(int pos)
{
	lista listaAux;
	noh *nohAux = listaInicio;

	listaAux.listaFim = listaFim;
	for(int i = 0; i < pos; i++)
	{
		nohAux = nohAux->nohProximo;
	}
	listaFim = nohAux;
	listaFim->nohProximo = NULL;
	listaAux.listaInicio = nohAux->nohProximo;
	return listaAux;
}

int main()
{
	int tam, pos, num;
	lista lista1, lista2;
	cin >> tam;
	for(int i = 0; i < tam; i++)
	{
		cin >> num;
		lista1.inserir(num);
	}
	cin >> pos;
	lista2 = lista1.divide(pos);
	while(lista1.tamanho() > 0)
	{
		cout << lista1.removerFim() << ' ';
	}
	cout << endl;
	while(lista2.tamanho() > 0)
	{
		cout << lista2.removerFim() << ' ';
	}

	return 0;
}