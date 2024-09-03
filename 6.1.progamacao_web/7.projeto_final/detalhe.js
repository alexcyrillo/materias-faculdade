// Pesquisa por id
const selectDetalhe = async (id) => {
	const response = await fetch(
		`https://botafogo-atletas.mange.li/2024-1/${id}`
	);
	const data = await response.json();

	return data;
};

if (sessionStorage.getItem("logado")) {
	const montaCard = (entrada) => {
		const card = document.createElement("div");

		card.id = "card";

		const nome = document.createElement("p");
		nome.innerHTML = entrada.nome;
		nome.id = "nome";

		card.appendChild(nome);

		const divImagem = document.createElement("div");
		divImagem.id = "imagem";

		const imagem = document.createElement("img");
		imagem.src = entrada.imagem;
		imagem.alt = `Foto de ${entrada.nome}`;

		divImagem.appendChild(imagem);
		card.appendChild(divImagem);

		const detalhes = document.createElement("p");
		detalhes.innerHTML = entrada.detalhes;
		detalhes.id = "detalhes";

		card.appendChild(detalhes);

		const divInfo = document.createElement("div");
		divInfo.style.gridArea = "a3";
		divInfo.id = "divInfo";

		const nJogos = document.createElement("p");
		nJogos.textContent = `Número de Jogos: ${entrada.n_jogos}`;

		const naturalidade = document.createElement("p");
		naturalidade.textContent = `Naturalidade: ${entrada.naturalidade}`;

		const altura = document.createElement("p");
		altura.textContent = `Altura: ${entrada.altura}`;

		const tempoTime = document.createElement("p");
		tempoTime.textContent = `Tempo no Botafogo: ${entrada.no_botafogo_desde}`;

		const nascimento = document.createElement("p");
		nascimento.textContent = `Nascimento: ${entrada.nascimento}`;

		divInfo.appendChild(nascimento);
		divInfo.appendChild(naturalidade);
		divInfo.appendChild(altura);
		divInfo.appendChild(nJogos);
		divInfo.appendChild(tempoTime);

		card.appendChild(divInfo);

		const posicao = document.createElement("p");
		posicao.id = "posicao";
		posicao.innerHTML = entrada.posicao;

		card.appendChild(posicao);

		return card;
	};

	const parametros = new URLSearchParams(window.location.search);

	const idAtleta = parametros.get("id");
	const h1 = document.createElement("h1");
	h1.style.color = "white";
	h1.textContent = "Jogador não encontrado";

	selectDetalhe(idAtleta).then((atleta) => {
		if (atleta != `Não há atleta com o id ${idAtleta}.`)
			document.body.appendChild(montaCard(atleta));
		else {
			const naoEncontrado = document.createElement("h1");
			naoEncontrado.textContent = "O atleta não foi encontrado";
			naoEncontrado.style.color = "white";

			document.body.style.backgroundColor = "rgb(22, 22, 22)";
			document.body.style.margin = "0px";

			document.body.appendChild(naoEncontrado);
		}

		const voltar = document.createElement("button");
		voltar.id = "bt-voltar";
		voltar.textContent = "Voltar";
		voltar.onclick = () => {
			window.location.href = "home.html";
		};

		document.body.appendChild(voltar);
	});
} else {
	const naoLogado = document.createElement("div");
	naoLogado.id = "naoLogado";
	naoLogado.textContent = "Acesso negado, faça login para acessar essa página";

	const voltar = document.createElement("button");
	voltar.id = "bt-voltar";
	voltar.textContent = "Login";
	voltar.onclick = () => {
		window.location.href = "index.html";
	};

	document.body.appendChild(naoLogado);

	document.body.appendChild(voltar);
}
