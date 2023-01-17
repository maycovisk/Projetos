const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!lampBroken()){
    lamp.src='./img/ligada.jpg';
    }
}

function lampOff(){
    if(!lampBroken()){
    lamp.src='./img/desligada.jpg'
    }
}

function lampBreak(){
    lamp.src='./img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBreak);