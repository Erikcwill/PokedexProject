//Efeitos para o botão iniciar;
$('#botao-iniciar').one("click",function() {
    musicaTema.play();    
    mouseClickSom(); 
    iniciarJogo();
    mouseClickSom();
    travarBotoes();  
    $("#botao-som").attr("disabled", false); 
});
//Efeitos para o botão de som;
$("#botao-som").click(function(){ 
    if (musicaTema.paused) {
        musicaTema.play(); 
    } else {
        musicaTema.pause()};  
    mouseClickSom();           
}); 
//Efeitos para o botão reset;
$(document).ready(function(){
    $("#botao-reset").click(function(){
        piscaTela();        
        setTimeout(resetarJogo, 550);
        resetTelas()
        mouseClickSom();
        travarBotoes();
    });
  });
//Efeito para trava de segurança dos botões;
function travarBotoes() {
    $("#botao-reset").attr("disabled", true);
    setTimeout(function(){$("#botao-reset").attr("disabled", false);},3000)
    $("#botao-iniciar").attr("disabled", true);
    setTimeout(function(){$("#botao-iniciar").attr("disabled", false);},3000)
}
//Trava mais longa para o botão reset;
function travaLonga() {
    $("#botao-reset").attr("disabled", true);
    setTimeout(function(){$("#botao-reset").attr("disabled", false);},5000)
  
}