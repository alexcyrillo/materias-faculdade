#include <iostream>

using namespace std;

class noh
{
	friend class lista;
	private:
		int nohDado;
		noh *nohAnterior;
		noh *nohProximo;
	public:
		noh(int d);
};

noh::noh(int dado)
{
	nohDado = dado;
	nohAnterior = NULL;
	nohProximo = NULL;
}

class lista
{
	private:
		noh *listaInicio;
		noh *listaFim;
		int listaTam;
	public:
		lista();
		~lista();
		void inserirEmVazia(int dado);
		void inserirInicio(int dado);
		void inserirEmPosicao(int dado, int pos);
		void inserirFim(int dado);
		void remover();
		void consultar();
};

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
		noh *aux;
		aux = listaInicio;
		listaInicio = listaInicio->nohProximo;
		delete aux;
		listaTam--;
	}
}

void lista::inserirEmVazia(int dado)
{
	noh *nohAux = new noh(dado);
	listaInicio = nohAux;
	listaFim = nohAux;
	listaTam++;
}

void lista::inserirInicio(int dado)
{
	if(listaTam == 0)
		inserirEmVazia(dado);
	else
	{
		noh *nohNovo = new noh(dado);
		listaFim->nohProximo = nohNovo;
		nohNovo->nohProximo = listaInicio;
		nohNovo->nohAnterior = NULL;
		listaInicio = nohNovo;
		listaTam++;
	}
}

void lista::inserirEmPosicao(int dado, int pos)
{
	if(listaTam == 0)
		inserirEmVazia(dado);
	else if(pos == 0)
		inserirInicio(dado);
	else if(pos == listaTam)
		inserirFim(dado);
	else
	{
		noh *nohNovo = new noh(dado);
		noh *nohAux = listaInicio;
		for(int i = 0; i < pos; i++)
			nohAux = nohAux->nohProximo;
		nohNovo->nohAnterior = nohAux;
		nohNovo->nohProximo = nohAux->nohProximo;
		nohAux->nohProximo = nohNovo;
		listaTam++;
	}
}

void lista::inserirFim(int dado)
{
	if(listaTam == 0)
		inserirEmVazia(dado);
	else
	{
		noh* nohNovo = new noh(dado);
		listaFim->nohProximo = nohNovo;
		nohNovo->nohAnterior = listaFim;
		nohNovo->nohProximo = NULL;
		listaFim = nohNovo;
		listaTam++;
	}
}

