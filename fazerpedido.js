box_formatarProduto.style.visibility = 'hidden';
box_limparProduto.style.visibility = 'hidden';
box_montarProduto.style.visibility = 'hidden';

document.querySelector('#cQuantProduto').addEventListener(onchange, function () {
	var quantProduto = document.querySelector("#cQuantProduto");
	quantProduto = window.encodeURIComponent(quantProduto);
	console.log(quantProduto);
});
