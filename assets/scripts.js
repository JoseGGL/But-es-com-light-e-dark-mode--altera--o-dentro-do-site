const claro = document.getElementById('seletor');
const escuro = document.getElementById('escuro');
claro.addEventListener('click', mudar1);
escuro.addEventListener('click', mudar2);
const title = document.getElementById('teste2');
const corpo = document.getElementById('teste');
const footer = document.getElementById('teste1');
escuro.addEventListener('click', trocar1);
claro.addEventListener('click', trocar2);
const modoclaro = "Light Mode"
const modoescuro = "Dark Mode"

function trocar1(){
    escuro.disabled = true;
    claro.disabled = false;
}

function trocar2(){
    escuro.disabled = false;
    claro.disabled = true;
}

function mudar1(){
 mudarclasses();
 mudartextos();
 title.innerHTML = modoclaro + " ON";
}


function mudar2(){
 mudarclasses();
mudartextos();
}

function mudarclasses(){
 corpo.classList.toggle('fundo');
 escuro.classList.toggle('fundo');
 title.classList.toggle('fundo');
 footer.classList.toggle('fundo')
}

function mudartextos(){
  
        title.innerHTML = modoescuro + " ON";
        return;

    }
