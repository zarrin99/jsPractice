/* floowing bro code on youtube

document.getElementById('myH1').textContent = "Hello";

document.getElementById('myP').textContent = "i'm gonna go to Japan!!";

let username;

username = window.prompt("What is your username?");

console.log(username);
*/
/* How to accept user input */
let username;

document.getElementById('mySubmit').onclick = function (){
     username = document.getElementById('myText').value;
     document.getElementById('myH1').textContent = `Hello ${username}`
}
/* 
let age = window.prompt("How old are you");

age = Number(age); //type conversion
age += 1;

console.log(age, typeof age); */


