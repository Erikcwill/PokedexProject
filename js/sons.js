//Define o som de fundo;
let musicaTema = document.createElement('audio'); 
    musicaTema.setAttribute('src', 'sons/theme.mp3 ');          

//Define qual som de "crie" deve ser criado na rodada;
function pokemonCrie() {
    if (pokemonSorteado == "squirtle") {
        squirtleCrie();
    } else if (pokemonSorteado == "charmander") {
        charmanderCrie();
    } else if (pokemonSorteado == "bulbassauro") {
        bulbassaurCrie();
    } else if (pokemonSorteado == "pikachu") {
        pikachuCrie();
    }
    
}      
//Define qual é o som para charmander;
function charmanderCrie() {
    $(document).ready(function() {
        let crie = document.createElement('audio');
        crie.setAttribute('src',"sons/pokemon/charmandercrie.mp3");    
        crie.addEventListener('ended', function() {
            this.pause();
        }, true);
        crie.play();
    })
}
//Define qual é o som para bulbassauro;
function bulbassaurCrie() {
    $(document).ready(function() {
        let crie = document.createElement('audio');
        crie.setAttribute('src',"sons/pokemon/bulbassaurcrie.mp3");    
        crie.addEventListener('ended', function() {
            this.pause();
        }, true);
        crie.play();
    })
}
//Define qual é o som para pikachu;
function pikachuCrie() {
    $(document).ready(function() {
        let crie = document.createElement('audio');
        crie.setAttribute('src',"sons/pokemon/pikachucrie.mp3");    
        crie.addEventListener('ended', function() {
            this.pause();
        }, true);
        crie.play();
    })
} 
//Define qual é o som para squirtle;
function squirtleCrie() {
    $(document).ready(function() {
        let crie = document.createElement('audio');
        crie.setAttribute('src',"sons/pokemon/squirtlecrie.mp3");    
        crie.addEventListener('ended', function() {
            this.pause();
        }, true);
        crie.play();
    })
}
//Define o som do click de mouse para os botões;
function mouseClickSom() {
    $(document).ready(function() {
        let som = document.createElement("audio");
        som.setAttribute("src","sons/click.mp3");
        som.addEventListener("ended", function() {
        this.pause();
        }, true);
        som.play();
    })
}
//Define o som da resposta errada;
function errouSom() {
    $(document).ready(function() {
        let som = document.createElement("audio");
        som.setAttribute("src","sons/errou.mp3");
        som.addEventListener("ended", function() {
        this.pause();
        }, true);
        som.play();
    })
}
//Define o som da resposta correta;
function acertouSom() {
    $(document).ready(function() {
        let som = document.createElement("audio");
        som.setAttribute("src","sons/certo.mp3");
        som.addEventListener("ended", function() {
        this.pause();
        }, true);
        som.play();
    })
}


   

  
    
