//1 - Chiedere il nome
//2 - Chiedere il cognome
//3 - Chiedere il colore preferito
//4 - Unire gli elementi al numero 21
//5 - Mostrare a schermo

//1 
let nome = prompt ('inserisci il tuo nome')
console.log(nome);

//2
let cognome = prompt ('inserisci il tuo cognome')
console.log(cognome);

//3
let colore = prompt ('inserisci il tuo colore preferito')
console.log(nome);

//4
let concat = nome+cognome+colore+21;
console.log(concat);

document.getElementById('pass').innerHTML = concat;