#include <iostream>
#include <string>

using namespace std;

class elemento{
	friend class lista;
	private:
		int chave;
		elemento *proximo;
		elemento *anterior;
	public:
		elemento (int c){
			chave = c;
			proximo = NULL;
			anterior = NULL;
		}
};

class lista{
	private:
		elemento *inicio;
		elemento *fim;
	public:
		lista();
		~lista();        
		void insereInicio(int c);
		void insereFim (int c);
		int removeRepetidos();//retorna a quantidade de elementos restantes na lista
		bool vazia();
		void imprimeLista();
};
	
lista::lista(){
	inicio = NULL;
	fim = NULL;
}
		
lista::~lista(){
	while(fim->proximo != NULL && fim->anterior != NULL)
	{
		elemento *aux;
		aux = inicio;
		inicio = inicio->proximo;
		inicio->anterior = NULL;
		delete aux;
	}
}  

void lista::insereInicio (int c){
	elemento *novoElemento = new elemento(c);
	novoElemento->proximo = inicio;
	inicio = novoElemento;
}
		
void lista::insereFim (int c){
	elemento *novoElemento = new elemento(c);
	novoElemento->anterior = fim;
	fim = novoElemento;
}

int lista::removeRepetidos(){
	elemento *aux, *auxComp;
	int cont = 0;
	aux = inicio;
	do
	{	
		cout << 'x';
		auxComp = aux->proximo;
		while(auxComp != NULL)
		{
			
			if(aux->chave == auxComp->chave)
			{
				elemento *excluir, *trocar;
				excluir = auxComp;
				auxComp = excluir->proximo;
				trocar = excluir->anterior;
				trocar->proximo = excluir->proximo;
				delete excluir;
			}
			else
				cont++;
		}
		aux = aux->proximo;
	}
	while(aux->proximo != NULL);
	return cont;
}

void lista::imprimeLista(){
	if (inicio != NULL){
		elemento *auxiliar = inicio;
		while (auxiliar->proximo != NULL){
			cout<<"("<<auxiliar->chave<<") ";
			auxiliar = auxiliar->proximo;
		}
		cout<<"("<<auxiliar->chave<<")"<<endl;
	} else {
			cout<<"VAZIA";
	}
}       
	
int main(){
	
	lista listaD;
	
	int chave;
	string dado;
	
	cin>>chave;
	
	while (chave != -1){
		listaD.insereFim(chave);

		cin>>chave;
	}
	cout<<listaD.removeRepetidos()<<endl;
	cout << 'x';
	listaD.imprimeLista();
	
	
	return 0;
}