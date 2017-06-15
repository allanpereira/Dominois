$(document).ready(function() {
    var conteudo = $(".conteudo");
    var list = $(".menu li");
    var firstMenu = $(".menu li:first");
    var firstTab = $(".conteudo:first");

    firstMenu.addClass("active").show(); // Ativa a primeira aba
    
    conteudo.hide();
    firstTab.show('slow'); // Abre a página suavemente

    list.click(function() {
        var self = $(this);

        list.removeClass("active"); // Remove a class no link clicado para que no fica marcado
        self.addClass("active");    // Adiciona a classe no link clicado para que o usuario saiba em qual link ele esta

        conteudo.hide(); // Esconde as divs de conteúdo
        var tab = self.find("a").attr("href"); // Encontra o valor do atributo rel para identificar a aba que esta ativa + conteúdo
        $(tab).fadeIn('slow');
        
        return false; // Evita que ao clicar no link a página role para o topo.
    });
});