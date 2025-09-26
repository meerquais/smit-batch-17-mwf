console.log("JavaScript Connected!");


// Math.round() ===> nearest integer par round 


// var price = 264.49; 


// console.log(Math.round(price));


//  Math.floor() ===> hamesha decimals remove karta.


// console.log(Math.floor(44.44));
// console.log(Math.floor(66.54));


// Math.ceil() ===> Hamesha ek number bara deta hai. 


// console.log(Math.ceil(44.99));
// console.log(Math.ceil(44.1));


// Generating Random Numbers!


// console.log(Math.random());
// console.log(Math.floor(Math.random()* 10) + 1);



// console.log(Math.floor(Math.random()* 90000)+ 1000);


// console.log(Math.floor(Math.random() * 6) + 1);


// console.log(Math.floor(Math.random()* (15 - 5 + 1) + 5));


// console.log(Math.floor(Math.random() * 2));

// var toss = Math.floor(Math.random()*2);
// var userInput = +prompt("Type 0 or 1 || Heads is 0 and Tails is 1");

// if(toss === userInput){
//     alert("Heads");
// }else{
//     alert("Tails");
// }

// console.log(toss);

// console.log(toss);


// console.log(Math.floor(Math.random() * 1001) + 1000);


// Converting String to Number ===> Int and Decimals 

// var age = "25";


// console.log(typeof age);
// console.log(typeof parseInt(age));


// var age = "25.55";
// var age1 = "Twenty Five";


// console.log(parseInt(age));


// console.log(parseFloat(age));

// console.log(parseInt(age1));



// var str = "123.55";


// console.log(Number(str));
// // console.log(+str);

// Coverting Numbers to String;

// var num = 456;

// console.log(num.toString());
// console.log(String(num));

// var val = "12.34";

// console.log(Number(val));
// console.log(+val);
// console.log(parseFloat(val));
// console.log(parseInt(val));

// var num = 789;

// console.log(String(num));
// console.log(num.toString());


// var price = 99.654908129484;


// console.log(price.toFixed(2));
// console.log(price.toFixed(1));

// console.log(Number(price.toFixed(2)));


// Math.PI ===> Circle of pi value 

// console.log(Math.PI);

// Math.E ====> Euler's Number

// console.log(Math.E);


// Math.pow(x,y) Power


// console.log(Math.pow(3,2));

// Math.sqrt()   Sqaure Root 

// console.log(Math.sqrt(36));


// Math.max ===> return largest number;


// var arr = 24
// var arr1 = 28

// console.log(Math.max(arr , arr1));

// Math.min ===> returns smallest number;


// console.log(Math.min(1,3,4,7,8,10,99));


// Math.abs ===>  Absolute Value -- negative value ko positive kar deta hai.

// console.log(Math.abs(-90));


alert("Welcome to the Number Guessing Game!");


var secretNumber = Math.floor(Math.random()* 10) + 1;

var userGuess = +prompt("Guess a number between 1 and 10!");


if(userGuess === secretNumber){
    alert("Congrats you guessed it right!");
}else if(userGuess > secretNumber){
    alert("Too high! The Correct Number was " + secretNumber);
}else if(userGuess < secretNumber){
    alert("Too low! The correct Number was " + secretNumber);
}else{
    alert("Please enter a valid Number!");
}

























