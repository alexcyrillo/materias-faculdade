#include <iostream>
#include <queue>
#include <stdexcept>

using namespace std;

typedef int Dado;

enum Posicao {DIR, ESQ};

class Noh {
	friend class ABB;
	public:
		Noh(Dado d);
		~Noh(Noh *noh);
		unsigned NroDeFolhas() const;
	private:
		Dado valor;
		Noh* esq;
		Noh* dir;
		Noh* pai;
};

Noh::Noh(Dado d) {
	valor = d;
	esq = NULL;
	dir = NULL;
	pai = NULL;
}

Noh::~Noh(Noh *noh) {
	delete noh;
}

unsigned Noh::NroDeFolhas() const {
	// implemente
}

class ABB {
	public:
		ABB();
		~ABB();
		// Escreve uma Ã¡rvore nÃ­vel a nÃ­vel.
		// Pode ser Ãºtil para depurar o programa.
		void EscreverNivelANivel(std::ostream& saida);
		// Insere um dado na Ã¡rvore.
		void Inserir(Dado d);
		// Retorna o nro de folhas na Ã¡rvore.
		unsigned NroDeFolhas() const;
	private:
		Noh* raiz;
};

ABB::~ABB(){
	// implemente
}

ABB::ABB(){
	// implemente
}

void ABB::Inserir(Dado d) {
	// implemente
}

unsigned ABB::NroDeFolhas() const {
	// implemente
}

void ABB::EscreverNivelANivel(ostream& saida) {
	queue<Noh*> filhos;
	Noh aux = Dado();
	Noh* fimDeNivel = &aux; // marcador especial para fim de nivel
	filhos.push(raiz);
	filhos.push(fimDeNivel);
	while (not filhos.empty()) {
		Noh* ptNoh = filhos.front();
		filhos.pop();
		if (ptNoh == fimDeNivel) {
			saida << "\n";
			if (not filhos.empty())
				filhos.push(fimDeNivel);
		}
		else {
			saida << '[';
			if (ptNoh != NULL) {
				saida << ptNoh->valor;
				filhos.push(ptNoh->esq);
				filhos.push(ptNoh->dir);
			}
			saida << ']';
		}
	}
}

int main() {
	unsigned qtde;
	cin >> qtde;
	ABB arvore;
	Dado valor;
	for (unsigned i = 0; i < qtde; ++i) {
		cin >> valor;
		arvore.Inserir(valor);
	}
	cout << arvore.NroDeFolhas() << endl;
	return 0;
}