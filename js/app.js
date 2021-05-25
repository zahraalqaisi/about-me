'use strict';

// ash the user about his name and his age 

let userName=prompt('hi, whats your name?');
console.log(userName);

alert ('hi there'+ userName);

let age=prompt('whats your age?');
console.log(age);

alert ('hi there'+ userName+ 'your age is'+ age);

// we will start the game
let score=0;
let favSinger=prompt('do you think that hamza namera is my best singer?');
favSinger = favSinger .toUpperCase();
console.log('after',favSinger);

if (favSinger==='YES' || favSinger==='Y') {
    console.log('thats right i love his songs spicially zahra');
    alert ('thats right i love his songs spicially zahra');
    score++;
} else if (favSinger==='NO' || favSinger==='N') {
    console.log('thats wrong i love hamza namera');
    alert ('thats wrong i love hamza namera');
} else{
   alert( 'please answer with YES/Y OR no/n') 
} 

let favFood=prompt('is my favourite food is shawrma?');
favFood=favFood .toUpperCase();
console.log('after', favFood);
if (favFood=='YES' || favFood=='Y') {
    console.log('yes sure it is');
    alert ('yes sure it is');
    score++;
} else if (favFood== 'NO' || favFood=='N') {
    console.log('it is my favourite food');
    alert ('it is my favourite food');
} else{
    alert( 'please answer with YES/Y OR no/n') 
 } 

let pit=prompt('do i like animals?');
pit=pit .toUpperCase();
console.log('after', pit);
if (pit=='YES' || pit=='Y') {
    console.log('i will never touch any kind of animals');
    alert ('i will never touch any kind of animals');
} else if (pit=='NO' || pit=='N') {
    console.log('thats right');
    alert ('thats right');
    score++;

}else{
    alert( 'please answer with YES/Y OR no/n') 
 } 

let travel=prompt('do i like to travel?');
travel=travel.toUpperCase();
console.log('after', travel);
 if (travel=='YES' || travel=='Y') {
     console.log('that is right');
     alert ('that is right');
     score++;
 } else if (travel=='NO' || travel=='N') {
     console.log('that is not right');
     alert ('that is not right');
    
 } else{
    alert( 'please answer with YES/Y OR no/n') 
 } 

 let favColor=prompt('is my favourite color is red?');
 favColor=favColor .toUpperCase();
 console.log('after', favColor);

 if (favColor=='YES' || favColor==='Y') {
     console.log('thats wrong my favourite color is darkgreen');
     alert ('thats wrong my favourite color is darkgreen');
    
 } else if (favColor==='NO' || favColor==='N') {
     console.log(' my favourite color is darkgreen');
     alert (' my favourite color is darkgreen');
     score++;
    
 } else{
    alert( 'please answer with YES/Y OR no/n') 
 }
 


 let guess=prompt('guess my luck number it is between 1-10?') ;

 let luck = 5;

 for (let i=0; i<3; i++){
 if (guess<luck) {
     alert ('too low');
     guess=prompt('guess my luck number it is between 1-10?') 
     } else if (guess>luck) {
alert ('too high')
guess=prompt('guess my luck number it is between 1-10?') 
     } else if (guess==luck) {
         alert ('good job');
         score++;
         break;
     }
}
alert ('my luck number is 5');



function fruit() {
    let favFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

    for (let i = 0; i < 6; i++) {
        let userAnsw = prompt('Can you guess my favorite fruit?');
        let guess = userAnsw.toLowerCase();

        for (let j = 0; j < favFruit.length; j++){
            if (guess === favFruit[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Sorry wrong answer, try again');
        }
    }
}

fruit();

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

alert('Good Job!... You got ' + score + ' correct answers!');





