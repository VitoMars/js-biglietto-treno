/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

var km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));
var prezzoBiglietto = km * 0.21;
console.log(km + eta + prezzoBiglietto);

if (eta < 18) {
   var prezzoFinale = prezzoBiglietto - 20%;
}

else if (eta > 65) {
   var prezzoFinale = prezzoBiglietto - 40%;
}

document.getElementById("prezzoFinale").innerHTML = prezzoFinale;