/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
L'output va stampato nella pagina HTML.
*/

// Dati conosciuiti
const euroxkm = 0.21;
let sconto = 0;
let scontoApplicato = 0;

// Dati richiesti all'utente
const trattaKM = prompt ("Quanti Km vuoi percorrere?");
console.log(trattaKM);

const etaCliente = prompt ("Quanti anni hai?");
console.log(etaCliente);

// Calcolo del prezzo del biglietto
let prezzoBiglietto = euroxkm * trattaKM
console.log(prezzoBiglietto);

// Calcolo del possibile sconto in base all'età
if (etaCliente < 18) {
    sconto = 20;
    console.log(sconto);

    scontoApplicato = (prezzoBiglietto * sconto) / 100;
    console.log(scontoApplicato);
} else if (etaCliente > 65) {
    sconto = 40;
    console.log(sconto);

    scontoApplicato = (prezzoBiglietto * sconto) / 100;
    console.log(scontoApplicato);
}

// Calcolo del prezzo finale del biglietto con possibile sconto

const prezzoFinale = prezzoBiglietto - scontoApplicato;
console.log(prezzoFinale);

// Stampa del prezzo su schermo

const printPrezzo = prezzoFinale.toFixed(2);

document.getElementById('prezzo').innerHTML = "Il prezzo del biglietto è: €" + printPrezzo;