#include <iostream>

using namespace std;

class noh
{
	friend class fila;
	private:
		int nDado;
		noh *nProx;
	public:
		noh(int dado);
};

class fila
{
	private:
		noh *fInicio;
		noh *fFim;
		unsigned fTam;
	public:
		fila();
		~fila();
		void enfileirar(int dado);
		int desenfileirar();
		bool vazia();
		int tamanho();
		int espiar();
};

noh::noh(int dado)
{
	nDado = dado;
	nProx = NULL;
}

fila::fila()
{
	fInicio = NULL;
	fFim = NULL;
	fTam = 0;
}

fila::~fila()
{
	while(fTam)
		desenfileirar();
}

void fila::enfileirar(int dado)
{
	noh *novoNoh = new noh(dado);
	if(fTam == 0)
		fInicio = novoNoh;
	else
		fFim->nProx = novoNoh;
	fFim = novoNoh;
	fTam++; 
}

int fila::desenfileirar()
{
	if(!vazia())
	{
	int dado = fInicio->nDado;
	noh *aux = fInicio;
	fInicio = fInicio->nProx;
	delete aux;
	fTam--;
	if(fTam == 0)
		fFim = NULL;
	return dado;
	}
}

bool fila::vazia()
{
	if(fFim == NULL)
		return 1;
	else
		return 0;
}

int fila::tamanho()
{
	return fTam;
}

int fila::espiar()
{
	return fInicio->nDado;
}


int main()
{
	fila filaA, filaB, filaAux, tempA, tempB;
	char opMenu, opFila, dado;
	do
	{
		cin >> opMenu;
		switch(opMenu)
		{
		case 'E':

			break;
		case 'D':

			break;
		case 'M':
			for(int i = 0; i < )
			break;
		case 'S':
			break;
		default:
			break;
		}
	} 
	while (opMenu != 'S');

	return 0;
}