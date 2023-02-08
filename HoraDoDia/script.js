var now = new Date()
var hours = now.getHours()
var minutes = now.getMinutes()
var msg = document.querySelector('div#hora1')
var img = document.querySelector('img')

function hora(){
    msg.innerHTML = `Agora são ${hours}:${minutes} horas.`
    if(hours >=6 && hours < 12){
        img.src = "img/manha.jpg"
        document.body.style.background = 'var(--cor0)'
    }else if(hours < 18){
        img.src = "img/tarde.jpg"
        document.body.style.background = 'var(--cor1)'
    }else{
        img.src = "img/noite.jpg"
        document.body.style.background = 'var(--cor2)'
    }
}

function ola1(){
    if(hours >=6 && hours < 12){
        msg.innerHTML = `Bom dia!`
    }else if(hours < 18){
        msg.innerHTML = `Boa tarde!`
    }else{
        msg.innerHTML = `Boa noite!`
    }
}

function ola2(){
    msg.innerHTML = `Agora são ${hours}:${minutes} horas.`
}
