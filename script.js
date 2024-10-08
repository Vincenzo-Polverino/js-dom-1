console.log('ravanello');




//inserisco le variabili

const lampEl = document.getElementById('lamp');
const buttonEl = document.getElementById('on_off');

//dichiaro la funzione richiamando l'evento al click
buttonEl.addEventListener('click', () => {

    if (buttonEl.innerText === 'Accendi') {
        lampEl.innerHTML = '<img src="./img/yellow_lamp.png">'
        buttonEl.innerText = 'Spegni'
    } else {
        lampEl.innerHTML = '<img src="./img/white_lamp.png">'
        buttonEl.innerText = 'Accendi'
    }
});
