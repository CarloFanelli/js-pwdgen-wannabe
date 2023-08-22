/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23 
 */

//chiedere il nome

const userName = prompt('Il tuo nome');

//chiedere il cognome

const userSurname = prompt('Il tuo cognome');

//chiedere il colore preferito

const userFavColor = prompt('Il tuo colore preferito');

//concatenare le stringhe

const userPassword = userName + userSurname + userFavColor + 23;

//stampare in console

const assignedPassword = document.getElementById('passwordGenerate');

console.log(userPassword);

//stampare in pagina

assignedPassword.innerHTML = userPassword