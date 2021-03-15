box_formatarProduto.style.visibility = "hidden";
box_limparProduto.style.visibility = "hidden";
box_montarProduto.style.visibility = "hidden";

document.querySelector('#quantProduto').addEventListener(onchange, function () {
	var quantProduto = document.querySelector("#quantProduto");
	quantProduto = window.encodeURIComponent(quantProduto);
	console.log(quantProduto);
});
