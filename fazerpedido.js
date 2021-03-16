box_formatarProduto.style.visibility = "visible";
box_limparProduto.style.visibility = "collapse";
box_montarProduto.style.visibility = "collapse";

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
			box_limparProduto.style.visibility = "collapse";
			box_montarProduto.style.visibility = "collapse";
		break;
		
		case "1":
			box_formatarProduto.style.visibility = "collapse";
			box_limparProduto.style.visibility = "visible";
			box_montarProduto.style.visibility = "collapse";
		break;
		
		case "2":
			box_formatarProduto.style.visibility = "collapse";
			box_limparProduto.style.visibility = "collapse";
			box_montarProduto.style.visibility = "visible";
		break;
	}
}

txt_formatarProduto = "";

function sFormatarProduto () {
	var formatarProduto = document.querySelector("#cFormatarProduto").value;
	switch (formatarProduto) {
		case "0":
			txt_formatarProduto = "";
		break;
		
		case "1":
			txt_formatarProduto = "Computador(es)";
		break;
		
		case "2":
			txt_formatarProduto = "Notebook(s)";
		break;
	}
	console.log(txt_formatarProduto);
}

txt_limparProduto = "";

function sLimparProduto () {
	var limparProduto = document.querySelector("#cLimparProduto").value;
	switch (limparProduto) {
		case "0":
			txt_limparProduto = "";
		break;
		
		case "1":
			txt_limparProduto = "Computador(es)";
		break;
		
		case "2":
			txt_limparProduto = "Notebook(s)";
		break;
	}
	
	console.log(txt_limparProduto);
}

txt_montarProduto = "";

function sMontarProduto () {
	var montarProduto = document.querySelector("#cMontarProduto").value;
	switch (montarProduto) {
		case "0":
			txt_montarProduto = "";
		break;
		
		case "1":
			txt_montarProduto = "Computador(es)";
		break;
		
		case "2":
			txt_montarProduto = "Guarda-Roupa(s)";
		break;
			
		case "3":
			txt_montarProduto = "Móvel(is)";
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
	if(nome==empty){
		alert("O campo do seu nome é OBRIGATORIO!");
	}else{
	switch (servico) {
		case "0":
			if(txt_formatarProduto==""){
				alert("Você não preencheu todos os campos.");
			}else{
				window.open("https://api.whatsapp.com/send?phone=55859997768969&text="+"Olá meu nome é " + nome + ", estou interessado(a) no serviço de Formatação de " + quantProduto + " " + txt_formatarProduto + ".");
			}
		break;
		
		case "1":
			if(txt_limparProduto==""){
				alert("Você não preencheu todos os campos.");
			}else{
				window.open("https://api.whatsapp.com/send?phone=55859997768969&text="+"Olá meu nome é " + nome + ", estou interessado(a) no serviço de Limpeza de " + quantProduto + " " + txt_limparProduto + ".");
			}
		break;
		
		case "2":
			if(txt_montarProduto==""){
				alert("Você não preencheu todos os campos.");
			}else{
				window.open("https://api.whatsapp.com/send?phone=55859997768969&text="+"Olá meu nome é " + nome + ", estou interessado(a) no serviço de Montagem de " + quantProduto + " " + txt_montarProduto + ".");
			}
		break;
	}
	}
}

