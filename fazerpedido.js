box_formatarProduto.style.visibility = "visible";
box_limparProduto.style.visibility = "hidden";
box_montarProduto.style.visibility = "hidden";

var nome = document.querySelector("#cNome").value;

var servico = document.querySelector("#cServico").value;

var formatarProduto = document.querySelector("#cFormatarProduto").value;

var quantProduto = document.querySelector("#cQuantProduto").value;


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

function sFormatarProduto () {
	var formatarProduto = document.querySelector("#cFormatarProduto").value;
	switch (formatarProduto) {
		case "0":
			var txt_formatarProduto = null;
		break;
		
		case "1":
			var txt_formatarProduto = "Computador(es)";
		break;
		
		case "2":
			var txt_formatarProduto = "Notebook(s)";
		break;
	}
	
	console.log(txt_formatarProduto);
}

function sLimparProduto () {
	var limparProduto = document.querySelector("#cLimparProduto").value;
	switch (limparProduto) {
		case "0":
			var txt_limparProduto = null;
		break;
		
		case "1":
			var txt_limparProduto = "Computador(es)";
		break;
		
		case "2":
			var txt_limparProduto = "Notebook(s)";
		break;
	}
	
	console.log(txt_limparProduto);
}

function sMontarProduto () {
	var montarProduto = document.querySelector("#cMontarProduto").value;
	switch (montarProduto) {
		case "0":
			var txt_montarProduto = null;
		break;
		
		case "1":
			var txt_montarProduto = "Computador(es)";
		break;
		
		case "2":
			var txt_montarProduto = "Guarda-Roupa(s)";
		break;
			
		case "3":
			var txt_montarProduto = "Móvel(is)";
		break;
	}
	
	console.log(txt_montarProduto);
}


function sQuantProduto () {
	var quantProduto = document.querySelector("#cQuantProduto").value;
	console.log(quantProduto);
	
}

function sEnviarMensagem () {
	var servico = document.querySelector("#cServico").value;
	var nome = document.querySelector("#cNome").value;
	var quantProduto = document.querySelector("#cQuantProduto").value;
	switch (servico) {
		case "0":
			window.open("https://api.whatsapp.com/send?phone=55859997768969&text="+"Olá meu nome é " + nome + ", estou interessado(a) no serviço de Formatação de " + quantProduto + " " + txt_formatarProduto + ".");
		break;
		
		case "1":
			window.open("https://api.whatsapp.com/send?phone=55859997768969&text="+"Olá meu nome é " + nome + ", estou interessado(a) no serviço de Limpeza de " + quantProduto + " " + txt_limparProduto + ".");
		break;
		
		case "2":
			window.open("https://api.whatsapp.com/send?phone=55859997768969&text="+"Olá meu nome é " + nome + ", estou interessado(a) no serviço de Montagem de " + quantProduto + " " + txt_montarProduto + ".");
		break;
	}
}

