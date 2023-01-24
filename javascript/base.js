var minuto = document.querySelector(".num_min");
var segundo = document.querySelector(".num_seg");
var centesimo = document.querySelector(".num_cent");
var bot_iniciar = document.querySelector(".botao_iniciar");
var bot_parar = document.querySelector(".botao_parar");
var num_cron = document.getElementById("cron");
var cor_num = "#FF5733"; //PARA DEPOIS DE INICIAR
var cor_num2 = "#808B96"; //COR PADRÃO
var i=0;
var j=0;
var k=1;
var limite_cent = 100;
var limite_seg = 60;
var limite_min = 60;
var j_aux = 0;
var ligar = true;
centesimo.innerHTML = "00";
segundo.innerHTML = "00";
minuto.innerHTML = "00";
var intervalo3;
bot_parar.setAttribute('disabled','');
function passagem3(){
    if(ligar){
        centesimo.innerHTML = k;
        k++;
        if(k == limite_cent){
            k=0;
            j++;
            segundo.innerHTML = j;
        }
        if(j == limite_seg){
            j=0;
            i++;
            minuto.innerHTML = i;
            if(i == limite_min){
                clearInterval(intervalo3);
            }
        }
    }
    if(!ligar){
        parando();
    }
        
}
function oficial(){
        ligar = true;
        centesimo.style.color = cor_num;
        minuto.style.color = cor_num;
        segundo.style.color = cor_num;
        intervalo3 = window.setInterval(passagem3,10);
        bot_iniciar.innerText = '--';
        bot_parar.removeAttribute('disabled','');
}
function parando(){    
    clearInterval(intervalo3);
}
function parar(){
    ligar = false;
    bot_iniciar.innerText = 'Retomar';
}
function zerar(){
    ligar = false;
    clearInterval(intervalo3);
    bot_parar.setAttribute('disabled','');
    bot_iniciar.innerText = 'Iniciar';
    centesimo.innerHTML = '00';
    segundo.innerHTML = '00';
    minuto.innerHTML = '00';
    i=0;
    j=0;
    k=0;
    centesimo.style.color = cor_num2;
    minuto.style.color = cor_num2;
    segundo.style.color = cor_num2;
}
