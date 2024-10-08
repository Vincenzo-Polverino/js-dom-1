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

});