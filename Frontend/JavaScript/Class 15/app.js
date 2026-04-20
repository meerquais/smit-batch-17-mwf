console.log("JavaScript Connected!");

// var name = "Meer"; name = 90;

// console.log(name);



// console.log(1 + "1");


// var first = "Hello";
// var second = "World";

// console.log(first + " " + second);


// var name = "Meer";

// console.log("My name is " + name);


// var userName = prompt("Type your name!", "Meer");

// console.log(userName);


// var age = 12;


// if(age >= 18){
//     console.log("You are an Adult!");
// }


// var marks = 40;

// if(marks > 80){
//     console.log("Excelent!");
    
// }

// == equal to 
// === equal value & type
// != not equal 
// !== not equal value & type
// < less than
// > greater than
// <= less than equal to
// >= greater than equal to


// console.log(5 == "5");
// console.log(5 === "5");
// console.log(10 != 8);
// console.log(15 >= 10);



// var age = 10;

// if(age >= 18){
//     console.log("Allowed!");
// }else{
//     console.log("Not Allowed!");
    
// }


// var password = 1234

// if(password === "1234"){
//     console.log("Access Granted!");
// }else{
//     console.log("Wrong Password");
    
// }


// var num = +prompt("Type your number");

// if(num % 2 === 0){
//     console.log("Even");    
// }else{
//     console.log("Odd");    
// }


// var marks = +prompt("Type your marks!");

// if(marks >= 90){
//     console.log("Grade A+");
// }else if(marks >= 70){
//     console.log("Grade B");    
// }else{
//     console.log("Fail!");
    
// }


// var time = 12;

// if(time < 12){
//     console.log("Good Morning!");    
// }else if(time < 18){
//     console.log("Good Afternoon");    
// }else{
//     console.log("Good Evening!");    
// }


// var age = +prompt("type your age");
// var hasID = prompt("Do you have an Id , yes or no?");

// if(age >= 18 && hasID === "yes"){
//     console.log("Allowed!");
// }
// else{
//     console.log("Not Allowed!");    
// }


// var day = prompt("What day is today!");

// if(day === "saturday" || day === "sunday"){
//     console.log("Weekend!");    
// }else{
//     console.log("Weekdays!");
    
// }


// var isLoggedIn = false;
// var isAdmin = false;

// if(isLoggedIn === true){

//     if(isAdmin === true){
//         console.log("Welcome admin!");
//     }else{
//         console.log("Welcome User");
//     }

// }else{
//     console.log("Please login!")
// }



// var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"];

// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[2]);

// var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"];

// fruits[2] = "Watermelon";
// fruits[20] = "Strawberry";
// console.log(fruits);

// fruits.push("Strawberry" , "Pineapple");
// fruits.pop();

// console.log(fruits);



// var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"];

// fruits.splice(1,0,"Peach" , "Strawberry" , "Pineapple" , "Cherry");

// console.log(fruits);

var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"];

var fruitsCopy = fruits.slice(1,4);

console.log("Fruits: " ,fruits );
console.log("Fruits Copy: " , fruitsCopy);



