'use strict';


 

// document.querySelector('.message').textContent = '🎉 Correct Number!' ;

// document.querySelector('.number').textContent = 13 ;
// document.querySelector('.score').textContent = 10 ;


// document.querySelector('.guess').value = 23;





// test 






// document.querySelector('.check').addEventListener('click' , function(){
//       const guess = Number(document.querySelector('.guess').value )  ;
//       console.log(guess , typeof guess) ; 

//       document.querySelector('.message').textContent = `you input the ${guess}` ;

//       if(!guess){
//             document.querySelector('.message').textContent = '⛔ No number!' ;
//       }
// })













const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20 ;

// 




document.querySelector('.check').addEventListener('click' , function(){
     const guess =Number(document.querySelector('.guess').value) ;
     console.log(guess , typeof guess) ;


     // when ther is no input

     if (!guess) {
       document.querySelector('.message').textContent = '⛔ No number!';

       // when players wins 

     } else if (guess === secretNumber) {
       document.querySelector('.message').textContent = '🎉 Correct Number!';

       document.querySelector('body').style.backgroundColor = '#60b347' ;  

       document.querySelector('.number').style.width = '30rem'

       document.querySelector('.number').textContent = secretNumber; 


     } else if (guess > secretNumber) {

       if (score > 1) {
         document.querySelector('.message').textContent = '📈 Too high!';
         score = score - 1;
         document.querySelector('.score').textContent = score;
       } else {
         document.querySelector('.message').textContent =
           '💥  You lost the game!';
         document.querySelector('.score').textContent = 0;
       }

       // when guess is too high
     } else if (guess < secretNumber) {
       if (score > 1) {
         document.querySelector('.message').textContent = '📉 Too low!';
         score--;
         document.querySelector('.score').textContent = score;
       } else {
         document.querySelector('.message').textContent =
           '💥  You lost the game!';
         document.querySelector('.score').textContent = 0;
       }

       // when guess is too low
     }
})




// // Realod again 

document.querySelector('.again').addEventListener('click' , function(){
    window.location.reload();
})

 
 