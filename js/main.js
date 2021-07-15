/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

var km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));
var prezzoBiglietto = km * 0.21;
var prezzoFinale;

console.log("KM = " + km);
console.log("Età = " + eta);
console.log("Prezzo Biglietto = " + prezzoBiglietto + "€");

if (eta < 18) {
  prezzoFinale = prezzoBiglietto - prezzoBiglietto * (20 / 100); //Sconto del 20%
} else if (eta > 65) {
  prezzoFinale = prezzoBiglietto - prezzoBiglietto * (40 / 100); //Sconto del 40%
} else {
  prezzoFinale = prezzoBiglietto; //Nessuno sconto
}

console.log(
  "Il prezzo finale del biglietto è di: " + prezzoFinale.toFixed(2) + "€"
);

document.getElementById("prezzoFinale").innerHTML =
  prezzoFinale.toFixed(2) + "€";
