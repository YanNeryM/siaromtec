box_formatarProduto.style.visibility = "hidden";
box_limparProduto.style.visibility = "hidden";
box_montarProduto.style.visibility = "hidden";

var txt_nome = document.querySelector("#nome").value;

txt_nome = window.encodeURIComponent(txt_nome);

document.querySelector("#quantProduto").addEventListener(onchange, function () {
	var quantProduto = document.querySelector("#quantProduto");
	quantProduto = window.encodeURIComponent(quantProduto);
	console.log(quantProduto);
	return 0;
	});
  
  
function enviarMensagem() {
	window.open("https://api.whatsapp.com/send?phone=5581999776899" + "&text=","_blank");
	}