/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  CalcoloArea = l1 * l2;
  console.log("Risultato: ", CalcoloArea);
};
area(3, 10);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (p1, p2) {
  Somma = p1 + p2;
  if (p1 === p2) {
    Somma = Somma * 3;
    console.log("Moltiplicazione ", Somma);
  } else {
    console.log("Somma semplice: ", Somma);
  }
};
crazySum(6, 6);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (nf) {
  Differenza = nf - 19;
  if (Differenza > 19) {
    Differenza = Differenza * 3;
    console.log("Risultato moltiplicazione: ", Differenza);
  } else {
    console.log("Differenza semplice: ", Differenza);
  }
};
crazyDiff(25);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    console.log(true);
  } else {
    console.log(false);
  }
};
boundary(50);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (stringa) {
  const wordPosition = stringa;
  if (wordPosition >= 0) {
    return sentence.replace("Epicode", "");
  } else {
    return sentence;
  }
};
const frase = "Ciao studio con Epicode";
console.log("Frase da dire:", frase);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (Number) {
  if (Number % 3 === 0 || Number % 7 === 0) {
    console.log("è multiplo.");
  } else {
    console.log("Non è multiplo");
  }
};
check3and7(13);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (AnotherString) {
  const NewString = AnotherString.indexOf("Epicode");
  if (NewString >= 0) {
    return AnotherString.replace("Epicode", "EDOCIPE");
  } else {
    return AnotherString;
  }
};
console.log(reverseString("Epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function (Parole) {
  const NewString = Parole.indexOf("ciao");
  if (NewString >= 0) {
    return Parole.replace("c", "C");
  } else {
    return Parole;
  }
};
console.log(upperFirst("ciao"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = function (n) {
  giveMeRandom = Math.random() * 11;
};
console.log("Numeri estratti: ", Math.random() * 11);
