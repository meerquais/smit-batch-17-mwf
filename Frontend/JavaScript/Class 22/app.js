console.log("JavaScript Connected!");



// var now = new Date();

// console.log(now);


// setFullYear() ====>  sirf year badlta hai, baaki sab same rehta hai.
// setMonth() ====> sirf month set karta hai. 0 = jan , 11 = dec
// setDate() ====> sirf month ka date set karta hai.1 ,31
// setHour() ===> hours set karta hai , 0 , 23
// setMinutes() ===> sirf minutes set karta hai 0, 59
// setSeconds() ===> sirf seconds set karta hai 0 , 59
// setMilliseconds ===> sirf milliseconds set karta hai jo 0 sy 999 hote hai.



// setFullYear()

// var date  = new Date();

// console.log(date);

// date.setFullYear(2005);

// console.log(date);



// setMonth()


// var date = new Date();

// console.log(date);

// date.setMonth(6);

// console.log(date);

// setDate()

// var date = new Date();

// console.log(date);

// // date.setDate(21);
// // console.log(date);



// var date = new Date();
// console.log(date);


// setHours()


// date.setHours(16)
// console.log(date);


// setMinutes()


// date.setMinutes(5);
// console.log(date);


// setSeconds() 


// date.setSeconds(40);
// console.log(date);




// var date = new Date();
// console.log(date);

// date.setFullYear(1999);
// date.setMonth(6);
// date.setDate(2);

// console.log(date);





// var birthDate = new Date(2001,4,31);

// console.log(birthDate);

// birthDate.setFullYear(2005);
// birthDate.setDate(25);

// console.log(birthDate);


// birthDate.setFullYear(2002);
// birthDate.setMonth(7);

// console.log(birthDate);


// console.log("Test");



// syntax of function 

// function foo(){
//     block of code 
// }


// function tellTime(){

//     var  now = new Date();
//     var theHour = now.getHours();
//     var theMin = now.getMinutes();
    
//     alert("Current Time: " + theHour + ":" + theMin);
// };



// tellTime();

// var now = new Date();
//    var theHour = now.getHours();
//    var theMin = now.getMinutes();
    
// alert("Current Time: " + theHour + ":" + theMin);


// var now2 = new Date();
//    var theHour2 = now.getHours();
//    var theMin2 = now.getMinutes();
    
// // alert("Current Time: " + theHour2 + ":" + theMin2);


// function tellTime(){
//     var now = new Date();
//    var theHour = now.getHours();
//    var theMin = now.getMinutes();
    
// alert("Current Time: " + theHour + ":" + theMin);
// };


// tellTime();
// tellTime();


// function tellTime(){
//     var now = new Date();
//    var theHour = now.getHours();
//    var theMin = now.getMinutes();
    
// // alert("Current Time: " + theHour + ":" + theMin);

// console.log("Current Time: " + theHour + ":" + theMin);

// };


// tellTime();
// tellTime();



// function greetUser(greeting){

//     alert(greeting);

// }




// greetUser("Hello, There"); 



// var greeting = "Hello, There";

// function greetUser(){
//     alert(greeting);
// }


// greetUser()



// function greetUser(parameter){

// }

// greetUser(argument); // arguments are passed into the function parameter;





// function greetUser(greeting){
//     alert(greeting);
// }

// greetUser("Hello, There");



// var msg = "Good Morning!";


// function greetUser(greeting){
//     alert(greeting);
// }

// greetUser(msg);


var almostAMil = 9999999;


function showBigNum(num){
    alert("The number is: " + num);
}

showBigNum(almostAMil)