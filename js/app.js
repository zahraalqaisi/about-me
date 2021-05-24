'use strict';

// ash the user about his name and his age 

let userName=prompt('hi, whats your name?');
console.log(userName);

alert ('hi there'+ userName);

let age=prompt('whats your age?');
console.log(age);

alert ('hi there'+ userName+ 'your age is'+ age);

// we will start the game

let favSinger=prompt('do you think that hamza namera is my best singer?');
favSinger = favSinger .toUpperCase();
console.log('after',favSinger);

if (favSinger==='YES') {
    console.log('thats right i love his songs spicially zahra');
    alert ('thats right i love his songs spicially zahra');
} else if (favSinger==='NO') {
    console.log('thats wrong i love hamza namera');
    alert ('thats wrong i love hamza namera');

}

let favFood=prompt('is my favourite food is shawrma?');
favFood=favFood .toUpperCase();
console.log('after', favFood);
if (favFood=='YES') {
    console.log('yes sure it is');
    alert ('yes sure it is');
} else if (favFood== 'NO') {
    console.log('it is my favourite food');
    alert ('it is my favourite food');
}

let pit=prompt('do i like animals?');
pit=pit .toUpperCase();
console.log('after', pit);
if (pit=='YES') {
    console.log('i will never touch any kind of animals');
    alert ('i will never touch any kind of animals');
} else if (pit=='NO') {
    console.log('thats right');
    alert ('thats right');

}

let travel=prompt('do i like to travel?');
travel=travel.toUpperCase();
console.log('after', travel);
 if (travel=='YES') {
     console.log('that is right');
     alert ('that is right');
 } else if (travel=='NO') {
     console.log('that is not right');
     alert ('that is not right');
    
 }

 let favColor=prompt('is my favourite color is red?');
 favColor=favColor .toUpperCase();
 console.log('after', favColor);

 if (favColor=='YES') {
     console.log('thats wrong my favourite color is darkgreen');
     alert ('thats wrong my favourite color is darkgreen');
    
 } else if (favColor==='NO') {
     console.log(' my favourite color is darkgreen');
     alert (' my favourite color is darkgreen');
 }


