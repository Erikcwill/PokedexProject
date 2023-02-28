//Lógica para acerto/erro
$(document).on('click', '#pokezinho', function(){
    travaLonga();
    let selecaoPokemon = $(this).text();    
    if (selecaoPokemon == pokemonSorteado) { 
        limpaDados();        
        setTimeout(pokemonOn,500);
        setTimeout(aparecerPokemon,1000);                
        setTimeout(pokemonGif,1200);
        setTimeout(balaoCerto,1500);
        setTimeout(pokemonCrie,1000);
        acertouSom();
    } else {
        limpaDados();        
        setTimeout(pokemonOn, 500);
        setTimeout(aparecerPokemon, 1000);                
        setTimeout(pokemonGif,1200);
        setTimeout(balaoErrado,1500); 
        errouSom();  
    }
  })
//Limpa a tela sem resetar o jogo
function limpaDados() {
    $(".pokemon-rodada").fadeOut();
    $(".tabela-pokemon").fadeOut("fast");
    $("#pokes").fadeOut();  
}

function aparecerPokemon () {
    $(".pokemon-rodada").fadeIn("slow");
}

function pokemonOn() {
    $(".pokemon-rodada").attr("id", pokemonSorteado + "On");
} 

function pokemonGif() {
    $(".pokegif").attr("id", pokemonSorteado +"gif");
    $(".pokegif").fadeIn();
}
//Inteirações com a resposta;
function balaoCerto() {
    $(".certo").fadeIn();
    $(".nome-certo").delay(1000).fadeIn();
    $(".novo-jogo").delay(1500).fadeIn();
}

function balaoErrado() {
    $(".errado").fadeIn();
    $(".nome-errado").delay(1000).fadeIn();
    $(".novo-jogo").delay(1500).fadeIn();

}
$(document).on('click','.novo-jogo', function(){
    piscaTela();        
    setTimeout(resetarJogo, 550);
    resetTelas()
    travarBotoes();
    mouseClickSom();
});

function removeId() {
    $(".pokegif").removeAttr("id");
    $(".pokegif").fadeOut();
}
