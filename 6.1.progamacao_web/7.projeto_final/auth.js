const alvo = "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f";

document.getElementById("login-bt").onclick = () => {
	const entrada = document.getElementById("login-password").value;
	const mensagem = document.getElementById("mensagem");

	if (hex_sha256(entrada) === alvo) {
		sessionStorage.setItem("logado", 1);
		window.location.href = "home.html";
	} else {
		mensagem.innerHTML = '<h1 style="color: red">Senha incorreta!!!</h1>';
	}
};
