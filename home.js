if (sessionStorage.getItem("logado")) {
	let dados;

	const cabecalho = document.createElement("header");
	cabecalho.style.width = "100vw";
	cabecalho.style.border = "0px";
	cabecalho.style.background = "rgb(22, 22, 22)";
	cabecalho.style.boxShadow =
		"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

	const divCabecalho = document.createElement("div");
	divCabecalho.style.display = "flex";
	divCabecalho.style.justifyContent = "space-between";
	divCabecalho.style.alignItems = "center";
	divCabecalho.style.margin = "0px 3rem";
	divCabecalho.style.color = "white";

	divCabecalho.innerHTML = `<img src = "escudo.png" alt="escudo botafogo" style="height: 70px"><h2 style="font-size: 2rem"> Botafogo Atletas</h2>
			<button id="bt-sair">Sair</button>`;

	cabecalho.appendChild(divCabecalho);
	document.body.appendChild(cabecalho);

	document.getElementById("bt-sair").onclick = () => {
		sessionStorage.removeItem("logado");
		window.location.href = "index.html";
	};

	const divSelecDados = document.createElement("div");
	divSelecDados.style.textAlign = "center";
	divSelecDados.style.display = "block";

	// listar time por botao
	const inputPorBotoes = document.createElement("div");
	inputPorBotoes.id = "divBotao";

	const bt1 = document.createElement("button");
	bt1.textContent = "Time Completo";
	bt1.classList.add("bt-selec-elenco");
	bt1.onclick = function () {
		selectDados("timeCompleto");
	};

	const bt2 = document.createElement("button");
	bt2.textContent = "Masculino";
	bt2.classList.add("bt-selec-elenco");
	bt2.onclick = function () {
		selectDados("timeMasculino");
	};

	const bt3 = document.createElement("button");
	bt3.textContent = "Feminino";
	bt3.classList.add("bt-selec-elenco");
	bt3.onclick = function () {
		selectDados("timeFeminino");
	};

	inputPorBotoes.appendChild(bt1);
	inputPorBotoes.appendChild(bt2);
	inputPorBotoes.appendChild(bt3);

	divSelecDados.appendChild(inputPorBotoes);

	// listar time por select
	const inputSelecao = document.createElement("select");
	inputSelecao.id = "divSelecao";

	const option1 = document.createElement("option");
	option1.value = "timeCompleto";
	option1.text = "Listar Todos";
	option1.onclick = function () {
		selectDados("timeCompleto");
	};

	const option2 = document.createElement("option");
	option2.value = "timeMasculino";
	option2.text = "Listar Masculino";
	option2.onclick = function () {
		selectDados("timeCompleto");
	};

	const option3 = document.createElement("option");
	option3.value = "timeFeminino";
	option3.text = "Listar Feminino";
	option3.onclick = function () {
		selectDados("timeCompleto");
	};

	inputSelecao.appendChild(option1);
	inputSelecao.appendChild(option2);
	inputSelecao.appendChild(option3);

	inputSelecao.addEventListener("change", function () {
		selectDados(this.value);
	});

	divSelecDados.appendChild(inputSelecao);

	// selecao por pesquisa, caixa de pesquisa
	const inputPesquisa = document.createElement("input");
	inputPesquisa.type = "text";
	inputPesquisa.placeholder = "Pesquisar";
	inputPesquisa.id = "cxPesquisa";

	divSelecDados.appendChild(inputPesquisa);

	document.body.appendChild(divSelecDados);

	// Montagem cards
	const container = document.createElement("div");
	container.id = "gridContainer";
	container.style.display = "grid";
	container.style.justifyContent = "center";
	container.style.gap = "1rem";
	container.style.maxWidth = "1200px";
	container.style.padding = "1rem";
	container.style.margin = "0 auto";
	container.style.alignItems = "center";

	document.body.appendChild(container);

	const montaCard = (entrada) => {
		const card = document.createElement("div");
		card.id = entrada.id;
		card.style.cssText = `
      	display: grid; 
			width: 240px;
			height: 347px;
      	grid-template-columns: 1fr 1fr;
      	grid-template-areas: 
      		"a1 a2"
      		"a1 a2"
				"a3 a3";
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      	border-radius: 5px;
      	padding: .3rem;
			background-color: rgb(22, 22, 22);
    `;
		card.onclick = function () {
			window.location.href = `detalhe.html?id=${card.id}`;
		};

		const divImagem = document.createElement("div");
		divImagem.className = "imagem";
		divImagem.style.gridArea = "a1";
		divImagem.style.display = "flex";
		divImagem.style.justifyContent = "center";
		divImagem.style.alignItems = "center";

		const imagem = document.createElement("img");
		imagem.src = entrada.imagem;
		imagem.alt = `Foto de ${entrada.nome}`;
		imagem.style.width = "180px";
		imagem.style.height = "260px";
		imagem.style.objectFit = "cover";
		imagem.style.objectPosition = "20% 20%";
		imagem.style.borderRadius = "5px";

		const posicao = document.createElement("p");
		posicao.className = "posicao";
		posicao.innerHTML = entrada.posicao;
		posicao.style.gridArea = "a2";
		posicao.style.display = "flex";
		posicao.style.justifyContent = "center";
		posicao.style.alignItems = "center";
		posicao.style.textTransform = "uppercase";
		posicao.style.fontWeight = "bold";
		posicao.style.writingMode = "vertical-rl";
		posicao.style.transform = "rotate(180deg)";
		posicao.style.fontSize = "1.5rem";
		posicao.style.width = "60px";
		posicao.style.margin = "auto";
		posicao.style.color = "white";

		const nome = document.createElement("p");
		nome.className = "nome";
		nome.innerHTML = entrada.nome;
		nome.style.gridArea = "a3";
		nome.style.textAlign = "center";
		nome.style.alignItems = "center";
		nome.style.textTransform = "uppercase";
		nome.style.fontWeight = "bold";
		nome.style.color = "white";

		card.onmouseover = function () {
			this.style.backgroundColor = "rgb(13, 13, 13)"; // substitua "corDesejada" pela cor que você quer
			this.style.transform = "scale(1.1)"; // aumenta o tamanho em 10%
			this.style.zIndex = "1"; // traz o card para frente
		};

		card.onmouseout = function () {
			this.style.backgroundColor = "rgb(22, 22, 22)"; // retorna para a cor original
			this.style.transform = "scale(1)"; // retorna para o tamanho original
			this.style.zIndex = "0"; // retorna o card para sua posição original
		};

		card.appendChild(divImagem);
		divImagem.appendChild(imagem);
		card.appendChild(posicao);
		card.appendChild(nome);

		return card;
	};

	// Pesquisa por texto
	inputPesquisa.onkeyup = (ev) => {
		if (ev.target.value.length > 2 || ev.target.value.length == 0) {
			const filtrado = dados.filter((ele) => {
				const noNome = ele.nome
					.toLowerCase()
					.includes(ev.target.value.toLowerCase());
				const naPosicao = ele.posicao
					.toLowerCase()
					.includes(ev.target.value.toLowerCase());
				return noNome || naPosicao;
			});

			container.innerHTML = "";

			filtrado.forEach((atleta) => {
				container.appendChild(montaCard(atleta));
			});
		}
	};

	// Funcoes de pesquisa
	//
	const pegaDados = async (caminho) => {
		const resposta = await fetch(caminho);
		const dados = await resposta.json();
		return dados;
	};

	// Pesquisa por elenco
	const selectDados = async (pesquisa) => {
		let caminho = "https://botafogo-atletas.mange.li/2024-1/all";
		if (pesquisa == "timeFeminino")
			caminho = "https://botafogo-atletas.mange.li/2024-1/feminino";
		else if (pesquisa == "timeMasculino")
			caminho = "https://botafogo-atletas.mange.li/2024-1/masculino";

		pegaDados(caminho).then((entrada) => {
			dados = entrada;
			container.innerHTML = "";
			entrada.forEach((atleta) => {
				container.appendChild(montaCard(atleta));
			});
		});
	};

	selectDados("timeCompleto");
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
