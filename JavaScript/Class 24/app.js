console.log("JavaScript Connected!");


// function foo(){
//     alert("Hello, There!");
// }
// function foo(){
//     console.log("Hello, There!");
// }


// foo();
// foo();
// foo();
// foo();



// var name = "Meer Quais";


// function greetUser(user){
//     console.log("Welcome " + user);
    
// }

// greetUser(name)

// data types 

// var str = "This is a String";
// var num = 123;
// var boolean = true;
// var undif = undefined;
// var empty = null;
// var arr = ["Hello" , 1 , true , undefined , null];


// function foo(para){

//     console.log(para);
// }

// foo(str);
// foo(num);
// foo(boolean);
// foo(undif);
// foo(empty);
// foo(arr)


// function foo(name = "Guest",age = 18){
//     console.log("Name: " + name);
//     console.log("Age: " + age);
// }

// foo("Meer Quais" , 18);
// foo(18,"Meer Quais");

// foo("Meer", 20)



// function add(a,b){
//     return a + b
// // }
// function add(a,b){
//     return a + b
// }
// var sum = add(5,3);
// var sum1 = add(45,33);
// console.log(sum);
// console.log(sum1);



// function test(){
//     return "Done";
//     alert("Ye kabhi nahi chalega");
// }

// test();

// var data = test()
// console.log(data);

// function multiply(a,b){
//     return a * b
// }

// var answer = multiply(40,55);
// var result = multiply(2,8);
// console.log(answer);
// console.log(result);



// function greet(name){
//     return "Hello " + name + "!";
// }



// var message = greet("Meer");

// console.log(message);

// function checkAge(age){
//     if(age >= 18){
//         return "Adult";
//     }else{
//         return "Minor"
//     }
// }

// var result = checkAge(15);

// console.log(result);



// alert(checkAge(20));


// var userName = "Meer" // global variable 

// function sayHello() {
//     console.log("Hello " + userName);
// }

// sayHello();
// console.log(userName);


// var city = "Karachi";

// function showCity(){
//     console.log("City: " + city);
// }

// showCity();
// city = "lahore";
// console.log("Updated City: " + city);






// var city = "Karachi";

// function showCity(){
    
//    var city = "Lahore"
    
//     console.log("City: " + city);
// }

// showCity();

// console.log(city);


// function greet(){
//     var message = "Hello World!";
//     console.log(message);    
// }

// greet();
// console.log(message);


// function add(){
//     var a = 5;
//     var b = 10;
//     console.log(a + b);    
// }

// add();
// console.log(a);

// function outer(){
//     var outerVar = "Outside";

//     function inner(){
//         var innerVar = "Inside";
//         console.log(outerVar);
//         console.log(innerVar);
        
//     }

//     inner();
//     console.log(innerVar);  
// }

// outer();


// var daysOfWeeks = ["Sun", "Mon" , "Tues" , "Wed" , "Thur" , "Fri", "Sat"];

// if(daysOfWeeks[0] === "Sun"){
//     alert("It's Sunday Today");
// }

// switch(expression){
//     case value1:
//         console.log("run");
//     case value2:
//         console.log("run");
// }




// var daysOfWeeks = ["Sun", "Mon" , "Tues" , "Wed" , "Thur" , "Fri", "Sat"];

var dayOfWeek = prompt("Type today's Day.");

switch(dayOfWeek){
    case "Sat":
        console.log("Whoopee");
    break;
    case "Sun":
        console.log("Whoopee");
    break;
    case "Fri":
        console.log("TGIF!");
    break;
    default:
        console.log("Just Another day!");
        
}























