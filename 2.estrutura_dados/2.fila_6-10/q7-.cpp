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
		case 'i':
			cin >> opFila;
			cin >> dado;
			if(opFila == 'a')
				filaA.enfileirar(dado);
			else
				filaB.enfileirar(dado);
			break;
		case 'e':
			cin >> opFila;
			if(opFila == 'a')
			{
				while(!filaA.vazia())
					filaAux.enfileirar(filaA.desenfileirar());
				while(!filaAux.vazia())
				{
					dado = filaAux.desenfileirar();
					cout << dado << ' ';
					filaA.enfileirar(dado);
				}
			}
			else
			{
				while(!filaB.vazia())
					filaAux.enfileirar(filaB.desenfileirar());
				while(!filaAux.vazia())
				{
					dado = filaAux.desenfileirar();
					cout << dado << ' ';
					filaB.enfileirar(dado);
				}
			}
			cout << endl;
			break;
		case 'm':
			for(int i = 0; i < )
			break;
		case 't':
			break;
		default:
			break;
		}
	} 
	while (opMenu != 't');

	return 0;
}