#include <iostream>

using namespace std;

typedef int dado;

class Noh
{
	friend class ABB;
	private:
		dado valor;
		Noh* esquerdo;
		Noh* direito;
	public:
		Noh(dado umValor);
};

Noh::Noh(dado umValor)
{
	valor = umValor;
	esquerdo = NULL;
	direito = NULL;
}

class ABB
{
	private:
		Noh* raiz;
		Noh* minimoAux(Noh* raizSubarvore);
		Noh* buscaAux(dado umValor);
		void removerPosOrdemAux(Noh* umNoh);
		Noh* inserirRecAux(Noh* umNoh, dado umValor);
		Noh* removerMenor(Noh* raizSubarvore);
		Noh* removerRecAux(Noh* umNoh, dado umValor);
		void percorrerEmOrdem(Noh* umNoh);
	public:
		ABB();
		~ABB();
		void inserir(dado umValor);
		Noh* minimo();
		dado busca(dado umValor);
		void removerPosOrdem();
		void removerRecursiva(dado umValor);
		void imprime();
		int contar(Noh noh);
};

ABB::ABB()
{
	raiz = NULL;
}

ABB::~ABB()
{
	removerPosOrdem();
}

void ABB::inserir(dado umValor)
{
	raiz = inserirRecAux(raiz, umValor);
}

Noh* ABB::inserirRecAux(Noh* umNoh, dado umValor)
{
	if(umNoh == NULL){
		Noh* novo = new Noh(umValor);
		return novo;
	}
	else
	{
		//não é folha nula, checa a inserção a direita ou a esquerda
		if(umValor < umNoh->valor)
		{
			umNoh->esquerdo = inserirRecAux(umNoh->esquerdo, umValor);
		}
		else
		{
			umNoh->direito = inserirRecAux(umNoh->direito, umValor);
		}
	}
	return umNoh;
}

Noh* ABB::minimo()
{
	if(raiz == NULL)
	{
		cerr << "erro, arvore vazia" << endl;
	}
	else
	{
		Noh* nohMin = minimoAux(raiz);
		return nohMin;
	}
}

Noh* ABB::minimoAux(Noh* raizSubarvore)
{
	while(raizSubarvore->esquerdo != NULL)
	{
		raizSubarvore = raizSubarvore->esquerdo;
	}
	return raizSubarvore;
}

Noh* ABB::buscaAux(dado umValor)
{
	Noh* atual = raiz;

	while(atual != NULL)
	{
		if(atual->valor == umValor)
		{
			return atual;
		}
		else if(atual->valor > umValor)
		{
			atual = atual->esquerdo;
		}
		else
		{
			atual = atual->direito;
		}
	}
	return atual;
}

dado ABB::busca(dado umValor)
{
	Noh* nohValor = buscaAux(umValor);

	if(nohValor == NULL)
	{
		cerr << "Valor não encontrado" << endl;
	}
	else
	{
		return nohValor->valor;
	}
}

void ABB::removerPosOrdem()
{
	removerPosOrdemAux(raiz);
}

void ABB::removerPosOrdemAux(Noh* umNoh)
{
	if(umNoh != NULL)
	{
		removerPosOrdemAux(umNoh->esquerdo);
		removerPosOrdemAux(umNoh->direito);
		delete umNoh;
	}
}

Noh* ABB::removerMenor(Noh* raizSubarvore)
{
	if(raiz->esquerdo == NULL)
	{
		return raizSubarvore->direito;
	}
	else
	{
		raizSubarvore->esquerdo = removerMenor(raizSubarvore->esquerdo);
		return raizSubarvore;
	}
}

void ABB::removerRecursiva(dado umValor)
{
	raiz = removerRecAux(raiz, umValor);
}

Noh* ABB::removerRecAux(Noh* umNoh, dado umValor)
{
	if(umNoh == NULL)
	{
		cerr << "Nó não encontrado" << endl;
	}
	else
	{
		Noh* raizSubarvoreNovo = umNoh;
		//Valor menor que o nó atual, vai para a sub esq
		if(umValor < umNoh->valor)
		{
			umNoh->esquerdo = removerRecAux(umNoh->esquerdo, umValor);
		//Valor maior que o nó atual, vai para a sub dir
		}
		else if(umValor > umNoh->valor)
		{
			umNoh->direito = removerRecAux(umNoh->direito, umValor);
		//Valor é igual ao que deve ser apagado
		}
		else
		{
			//Nó não tem filhos a esq
			if(umNoh->esquerdo == NULL)
			{
				raizSubarvoreNovo = umNoh->direito;
			}
			//Nó não tem filhos a dir
			else if(umNoh->direito == NULL)
			{
				raizSubarvoreNovo = umNoh->esquerdo;
			}
			//Nó tem dois filhos, pode-se trocar por antecessor ou sucessor
			else
			{
				//SUCESSOR
				raizSubarvoreNovo = minimoAux(umNoh->direito);
				//Troca o sucessor pelo seu filho a direita
				raizSubarvoreNovo->direito = removerMenor(umNoh->direito);
				//Filho a esq de um noh torna-se filho a esquerda do sucessor
				raizSubarvoreNovo->esquerdo = umNoh->esquerdo;
			}

			delete umNoh;
		}
		return raizSubarvoreNovo;
	}
}

void ABB::imprime()
{
	percorrerEmOrdem(raiz);
	cout << endl;
}

void ABB::percorrerEmOrdem(Noh* umNoh)
{
	if(umNoh != NULL)
	{
		percorrerEmOrdem(umNoh->esquerdo);
		cout << umNoh->valor << " ";
		percorrerEmOrdem(umNoh->direito);
	}
}

int ABB::contar(Noh *noh)
{
	if(raiz == NULL)
        return 0;
   else
        return 1 + contar(raiz->esquerdo) + contar(raiz->direito);
}

int main()
{
	ABB arvore;
	int num = -1;
	cin >> num;
	while(num != -1)
	{
		arvore.inserir(num);
		cin >> num;
	}
	arvore.contar(arvore->raiz);
}
