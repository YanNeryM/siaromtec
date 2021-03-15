box_formatarProduto.style.visibility = "hidden";
box_limparProduto.style.visibility = "hidden";
box_montarProduto.style.visibility = "hidden";

function sServico () {
	var servico = document.querySelector("#cServico").value;
	var nServico = servico;
	console.log(nServico);
	switch (nServico) {
		case "0":
			box_formatarProduto.style.visibility = "visible";
			box_limparProduto.style.visibility = "hidden";
			box_montarProduto.style.visibility = "hidden";
		break;
		
		case "1":
			box_formatarProduto.style.visibility = "hidden";
			box_limparProduto.style.visibility = "visible";
			box_montarProduto.style.visibility = "hidden";
		break;
		
		case "2":
			box_formatarProduto.style.visibility = "hidden";
			box_limparProduto.style.visibility = "hidden";
			box_montarProduto.style.visibility = "visible";
		break;
	}
}

function sQuantProduto () {
	var quantProduto = document.querySelector("#cQuantProduto").value;
	console.log(quantProduto);
}

