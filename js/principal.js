//Sorteio do pokemon aleatório;
let pokemonSorteado = getNomePokemon();
   console.log(pokemonSorteado);
   
function getNomePokemon() {
    const pokemons = [
      "bulbassauro",
      "charmander",
      "pikachu",
      "squirtle"
    ]
    const numeroAleatorio = (min, max) => { 
      return Math.floor(Math.random() * (max - min + 1)) + min
    } 
    return pokemons[numeroAleatorio(0 , pokemons.length - 1)]
}
//Vinheta de carregamento;
function piscaTela() {
    $("#linha-branca").fadeIn("slow")
    $("#linha-branca-direita").fadeIn("slow")
    $("#linha-branca").delay().fadeOut("slow");
    $("#linha-branca-direita").delay().fadeOut("slow");
    
}
//Reseta a parte gráfica; 
function resetTelas() {
    $(".certo").fadeOut();
    $(".nome-certo").fadeOut();
    $(".novo-jogo").fadeOut();
    $("#pokes").fadeOut();
    $(".pokegif").fadeOut();
    $(".errado").fadeOut();
    $(".nome-errado").fadeOut();
    $(".tabela-pokemon").fadeOut();
    $(".tabela-pokemon").delay(900).fadeIn();
    $(".pokegif").removeAttr("id");
    $("#pokes").delay(900).fadeIn(); 
   
}
//Reseta o jogo;
function resetarJogo () {
    $(".pokemon-rodada").removeAttr("id");       
    pokemonSorteado = getNomePokemon();       
    $(".pokemon-rodada").attr("id", pokemonSorteado);   
    $(".pokemon-rodada").fadeIn();
    
    
};
//Inicia o jogo;
function iniciarJogo() {
    $("#linha-branca").animate({height: '600px'}, "slow").fadeOut("slow");
    $("#tela-esquerda-desligado").fadeOut(2500);
    $("#linha-branca-direita").animate({height: '560px'}, "slow").fadeOut("slow");
    $("#tela-direita-desligada").fadeOut(2500);  
    $(".pokemon-rodada").delay(1500).animate({height: "100%",opacity: "1"});
    $(".pokemon-rodada").attr("id", pokemonSorteado);   
    $(".tabela-pokemon").delay(1500).fadeIn();
    $("#pokes").delay(1500).fadeIn();   
      
}





  