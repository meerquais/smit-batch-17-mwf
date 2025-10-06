console.log("JavaScript Connected!");




// function funcName(){
//     // block of code
// }


// function tellTime(){


//     var now = new Date();
//     var currentHour = now.getHours();
//     var currentMins = now.getMinutes();
//     alert("Current Time is: " + currentHour + ":" + currentMins);



// }


// tellTime();

// function greetUser(){

//     alert("Welcome " + name);
// }

// greetUser();

// var argument = "Meer Quais";




// function greetUser(parameter){
//     // block of code

//     console.log(parameter);
    
// }

// greetUser(argument)



// function greetUser(greeting){
//     alert(greeting);
// }


// greetUser("Hello User!");




// function greetUser(){
//     console.log("Hello, There");
// }

// greetUser();


// var user;

// console.log(user);




// function greetUser(greeting){
//     console.log(greeting);    
// }

// greetUser("Hello, There")


// function foo(name,age){

//     console.log("Name " + name);
//     console.log("age " +age);
// }

// foo(25,"Meer Quais")



// var userName = "Meer";

// function foo(){

//    var userName = "Ali";

//     console.log(userName);
    
// }
// foo();

// console.log(userName);


// function greetUser(greeting){
//     alert(greeting);
// }

// greetUser("Hello, There");


// var msg = "Good Morning!";

// function greetUser(greeting) {
//     alert(greeting)
// }

// greetUser(msg);


// var msg = "Hello, There";

// function showMsg(m,string,num){
//     alert(m + string + num)
// }

// showMsg(msg," Meer Quais " , 199999999)


// function add(num1 , num2){
//     var addtion = num1 + num2;
//     console.log(addtion);
    
// }

// add(20,30);

// console.log(addtion);


// function add(num1,num2){
//     return num1 + num2
// }


// var plus = add(30,45);

// console.log(plus);



// var orderTotal;
// var merchTot = 15;

// if(merchTot >= 100){
//     orderTotal = merchTot
// }else if(merchTot < 50.01){
//     orderTotal = merchTot + 5
// }else{
//     orderTotal = merchTot + 5 + (.03 * (merchTot - 50));
// }

// console.log(orderTotal);


function calcTot(marchTot){
    var orderTotal;
    if(marchTot >= 100){
        orderTotal = marchTot;
    }else if(marchTot < 50.01){
        orderTotal = marchTot + 5
    }else{
        orderTotal = marchTot + 5 + (.03 * (marchTot - 50));
    }

    return orderTotal;
}

var shoe = calcTot(50);
var watch = calcTot(40);

console.log(watch);
