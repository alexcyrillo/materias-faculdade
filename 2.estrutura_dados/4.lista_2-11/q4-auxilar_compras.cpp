#include <iostream>
#include <string>

using namespace std;
struct objeto
{
	int qt;
	string nome;
};

class elemento
{
	friend class lista;
	private:
		objeto dado;
		elemento *proximo;
	public:
		elemento(string n, int q);
};

class lista
{
	private:
		elemento *inicio;
		elemento *fim;
	public:
		lista();
		~lista();        
		void inserir(string n, int q);
		void remover(string e);
		void consulta(string e);
		void imprimir();
		bool igual(string e);
};

elemento::elemento(string n, int q)
{
	dado.nome = n;
	dado.qt = q;
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
		elemento *aux;
		aux = inicio;
		inicio = inicio->proximo;
		delete aux;
	}
}  
		
void lista::inserir(string n, int q)
{
	if(!igual(n))
	{
		elemento *novoElemento = new elemento(n, q);
		if(inicio == NULL && fim == NULL)
		{
			inicio = novoElemento;
			fim = novoElemento;
		}
		else
		{
			fim->proximo = novoElemento;
			fim = novoElemento;
		}
	}
}

void lista::remover(string e)
{
	elemento *atual = inicio, *anterior;
	while(atual != NULL && atual->dado.nome != e)
	{
		anterior = atual;
		atual = atual->proximo;
	}
	if(atual != NULL)
	{
		if(atual == inicio)
		{
			inicio = atual->proximo;
		}
		else if(atual == fim)
		{
			fim = anterior;
		}
		else
			anterior->proximo = atual->proximo;
		delete atual;
	}
	else
		cout << "item nao existente" << endl;
}

void lista::consulta(string e)
{
	elemento *atual = inicio;
	while(atual != NULL && atual->dado.nome != e)
		atual = atual->proximo;
		
	if(atual == NULL)
		cout << "item nao existente" << endl;
	else	
		cout << '(' << '{' << atual->dado.nome << '}' << ',' << '{' << atual->dado.qt << '}' << ')' << endl;
}

void lista::imprimir()
{
	elemento *atual = inicio;
	if(inicio == NULL)
		cout << "[]" << endl;
	else
	{
		cout << '(';
		while(atual != NULL)
		{
			if(atual->proximo == NULL)
				cout << '[' << atual->dado.nome << ", " << atual->dado.qt << ']';
			else
				cout << '[' << atual->dado.nome << ", " << atual->dado.qt << ']' << ',';
			atual = atual->proximo;
		}
		cout << ')' << endl;
	}
}

bool lista::igual(string e)
{
	elemento *atual = inicio;
	while(atual != NULL && atual->dado.nome != e)
		atual = atual->proximo;
		
	if(atual == NULL)
		return 0;
	else	
		return 1;
}
	
int main()
{
	
	char opcao;
	int qt;
	string nome;
	lista listaA;
	do
	{
		cin >> opcao;
		switch (opcao)
		{
			case 'i':
				cin >> nome >> qt;
				listaA.inserir(nome, qt);
				break;
			case 'r':
				cin >> nome;
				listaA.remover(nome);
				break;
			case 'c':
				cin >> nome;
				listaA.consulta(nome);
				break;
			case 'p':
				listaA.imprimir();
				break;
			default:
				break;
		}
	}
	while(opcao != 'q');
	listaA.imprimir();
	return 0;
}