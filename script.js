"use strict";

let button = document.querySelector("#button");
let answer = document.querySelector("#answer");

button.addEventListener("click", function() {
let shakeit = document.getElementById('theBall');
answer.innerHTML = '';
shakeit.classList.add('animate__animated'
 , 'animate__wobble');

 shakeit.addEventListener("animationend", function() {
 shakeit.classList.remove('animate__animated', 'animate__wobble');
 let randomNumber = Math.floor(Math.random() * 8);
 let eightBall = '';
 switch(randomNumber) {
   case 0:
     eightBall = 'It is certain';
     break;
   case 1:
     eightBall = 'It is decidedly so';
     break;
   case 2:
     eightBall = 'Reply hazy try again';
     break;
   case 3:
     eightBall = 'Cannot predict now';
     break;
   case 4:
     eightBall = 'Do not count on it';
     break;
   case 5:
     eightBall = 'My sources say no';
     break;
   case 6: 
     eightBall = 'Outlook not so good';
     break;
   case 7:
     eightBall = 'Signs point to yes';
     break;
 }
 answer.innerHTML= eightBall;
 });



});

