/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/


/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
   nome: 'Simone',
   cognome: 'Pierantozzi',
   eta: 30,
   citta: 'Roma',
}
console.log(`${persona.nome}, ${persona.cognome}, ${persona.eta}, ${persona.citta},`);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

persona.email = 'simone@gmail.com';
delete persona.eta;
console.log(persona)

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utente = {
   nome: 'Mario',
   cognome: 'Rossi',
   indirizzo: {
      via: 'via Pratica di mare 52c',
      citta: 'Pomezia',
      cap: 71000,
   },
   eta: 40,
};

console.log(utente['indirizzo'].cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

chiave = 'nome';
nome = 'Francesco';
console.log(persona[chiave]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numberA = 5;
let numberB = 5;
let numberC = 10;

if (numberA > numberB && numberA > numberC) {
   console.log(numberA);
}

else if (numberB > numberC && numberB > numberA) {
   console.log(numberB);
}

else if (numberC > numberB && numberC > numberA) {
   console.log(numberC);
}

else {
   console.log('Pareggio');
}


/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totale = 45;
let spezi;

if (totale >= 50) {
   spezi = 0;
}
else {
   spezi = 9.9;
}
console.log(`totale carello: ${totale} - spedizione ${spezi} - totale finale: ${totale + spezi}`);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const mixArray = [42, 'ciao', true];
for (let i = 0; i < mixArray.length; i++) {
   if (typeof mixArray[i] === 'number') {
      console.log(mixArray[i] + ' è un numero');
   }
   else {
      console.log(mixArray[i] + ' non è un numero');
   }
}


/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number = [];
number.push(1);
number.push(2);
number.push(3);
number.push(4);
number.push(5);
number.unshift(0)

console.log(number);
console.log(number.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const scuola = ['Penna', 'Quaderno', 'Zaino', 'Astuccio'];

scuola.splice(1, 1, 'Diario');
console.log(scuola);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = ['Penna', 'Quaderno', 'Zaino'];
const cercato = 'Zaino';

console.log(` Zaino è nel carello:` + prodotti.includes(cercato));

console.log(` Zaino è in posizione:` + prodotti.indexOf(cercato));



/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: "Mario (25 anni)".
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utenti = [
   { nome: 'Simone', eta: 30 },
   { nome: 'Andrea', eta: 17 },
   { nome: 'Gabriele', eta: 28 },
];

for (let i = 0; i < utenti.length; i++) {
   console.log(utenti[i])
}

console.table(utenti);

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → "OFFERTA: nome (prezzo€)"
   - disponibile && prezzo >= 10 → "nome — prezzo€"
   - !disponibile → "nome — esaurito"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const products = [
   { nome: 'mouse', prezzo: 25, disponibile: true },
   { nome: 'tastiera', prezzo: 35, disponibile: false },
   { nome: 'monitor', prezzo: 70, disponibile: true },
   { nome: 'pc', prezzo: 650, disponibile: false },
]

for (let i = 0; i < products.length; i++) {
   if (products[i].disponibile && products[i].prezzo < 50) {
      console.log('Offerta: ' + products[i].nome + ' - ' + products[i].prezzo);
   }
   else if (products[i].disponibile && products[i].prezzo >= 10) {
      console.log(products[i].nome + ' - ' + products[i].prezzo);
   }
   else {
      console.log(products[i].nome + ' - esaurito');
   }

}

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array "inverso", riempilo con un for (dall'ultimo al primo) usando push.
   Stampa "inverso".
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
