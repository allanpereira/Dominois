$(document).ready(function() {

	//Quando carregar a pagina
	$(".conteudo").hide(); //esta primeira linha servir para esconder as divs do contedo
	$(".menu li:first").addClass("active").show(); //Ativar primeira aba
	$(".conteudo:first").show('slow'); //abre a pagina suavemente

	//On Click Event
	$(".menu li").click(function() {// quando clicar no link do menu ir executar a seguinte funo:
		$(".menu li").removeClass("active"); //remove a class no link clicado para que no fica marcado
		$(this).addClass("active"); //adiciona a classe no link clicado para que o usuario saiba em qual link ele esta

		$(".conteudo").hide(); //esconder as divs do contedo
		var activeaba = $(this).find("a").attr("href"); //Encontrar o valor do atributo rel para identificar a aba que esta ativa + contedo
		$(activeaba).fadeIn('slow'); //efeito de fade in com o contedo ativo
		return false;// o returno falso evita que ao clicar no link a pgina role para o topo.
	});

});

function atualizalista() {
  var p = document.getElementById('lista');
  var filhos = p.childNodes;
  for( i = filhos.length - 1; i >= 0; i-- ) {
    if( filhos[i].tagName == 'LI' ) {
      p.removeChild( filhos[i] );
    }
  }

  var li = document.createElement('li');
  li.innerHTML = 'seis';
  p.appendChild(li);

  var li = document.createElement('li');
  li.innerHTML = 'sete';
  p.appendChild(li);
}