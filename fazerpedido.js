box_formatarProduto.style.visibility = 'hidden';
box_limparProduto.style.visibility = 'hidden';
box_montarProduto.style.visibility = 'hidden';

function sQuantProduto () {
	var quantProduto = document.querySelector('#cQuantProduto');
	quantProduto = window.encodeURIComponent(quantProduto);
	console.log(quantProduto);
}
