<link rel="stylesheet" href="https://yannerym.github.io/siaromtec/style_agendamento.css">
<div class=cAgendamentoWeb>  
  Seu nome:<br>
  <input type="text" id="cNome" size="50" placeholder="DIGITE SEU NOME"><br><br>

<label for="servico">Qual serviço você deseja, contratar?</label>

<select class="c" id="cServico" name="servico" onchange="sServico()">
  <option value="0">Formatação</option>
  <option value="1">Limpeza</option>
  <option value="2">Montagem</option>
</select>

<div id=box_formatarProduto>
<label for="formatarProduto">Oque deseja Formatar?</label>
  
<select id="cFormatarProduto" name="formatarProduto" onchange="sFormatarProduto()">
  <option value="0">Nenhum</option>
  <option value="1">Computador</option>
  <option value="2">Notebook</option>
</select>
</div>

<div id=box_limparProduto>
<label for="limparProduto">Oque deseja Limpar?</label>
  
<select id="cLimparProduto" name="limparProduto" onchange="sLimparProduto()">
  <option value="0">Nenhum</option>
  <option value="1">Computador</option>
  <option value="3">Notebook</option>
</select>
</div>

<div id=box_montarProduto>
<label for="montarProduto">Oque deseja Montar?</label>
  
<select id="cMontarProduto" name="montarProduto" onchange="sMontarProduto()">
  <option value="0">Nenhum</option>
  <option value="1">Computador</option>
  <option value="2">Guarda-Roupas</option>
  <option value="3">Movel</option>
</select>
</div>


<br>
<label for="quantProduto">Quantidade:</label>

<select id="cQuantProduto" name="quantProduto" onchange="sQuantProduto()">
  <option value=1>1</option>
  <option value=2>2</option>
  <option value=3>3</option>
</select>



<button onclick="sEnviarMensagem()">Enviar Mensagem</button>

<script type="text/javascript" src="https://YanNeryM.github.io/siaromtec/fazerpedido.js"></script>