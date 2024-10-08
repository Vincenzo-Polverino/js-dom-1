console.log('ravanello');




//inserisco le variabili
const lampEl = document.getElementById('lamp');
const buttonEl = document.getElementById('on_off');
//dichiaro la funzione richiamando l'evento al click
buttonEl.addEventListener('click', () => {
    //richiamo l'elemento da modificare ed associo la proprietà che mi permette di aggiungere un codice html
    lampEl.innerHTML =
        // inserisco il link all'immagine alternativa
        '<img src="./img/yellow_lamp.png">'
    //cambio testo del pulsante una volta "accesa" la lampadina
    buttonEl.innerText = 'Spegni'
//ripeto la funzione per invertire il procedimento
    buttonEl.addEventListener('click', () => {

       if(buttonEl.innerText === 'Accendi') {
        lampEl.innerHTML = '<img src="./img/yellow_lamp.png">'
        buttonEl.innerText = 'Spegni'
    } else{

        lampEl.innerHTML = '<img src="./img/white_lamp.png">'
        buttonEl.innerText = 'Accendi'
    }

    });
});