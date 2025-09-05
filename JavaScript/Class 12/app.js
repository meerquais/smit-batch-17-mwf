console.log("JavaScript Connected!");

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);


// for(var i = 1;i <=10;i++){
//     console.log(i);
    
// }


// var fruits = ["Apple" , "Mango" , "Orange" , "Banana"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);


// for(var i = 0;i < fruits.length;i++){
//     console.log(fruits[i]);    
// }

// for(var i = 1; i <= 5;i++){

//     var star = "";

//     for(var j = 1; j <=i;j++){
//         star += "* ";
//     }

//     console.log(star);
    
// }


// 2 x 1 = result ; 
// 2 x 2 = result ; 
// 2 x 3 = result ; 
// 2 x 4 = result ; 
// 2 x 5 = result ; 
// 2 x 6 = result ; 
// 2 x 7 = result ; 
// 2 x 8 = result ; 
// 2 x 9 = result ; 
// 2 x 10 = result ; 


// var num = +prompt("Type your number");
// var limit = +prompt("How many times do you want to multiply");

// for(var i = 1; i <= limit; i++){

//     document.write(num + " x " + i + " = " + (num * i) + "<br />");
// }



// var cities = ["Karach" , "Lahore" , "Islamabad" , "Quetta"];

// var cityToCheck = prompt("Type your city name!");


// for(var i = 0; i < cities.length;i++){


//     if(cityToCheck === cities[i]){
//         console.log("You are Eligable");
//     }else{
//         console.log("You are not Eligable");
        
//     }


// }


// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta"];

// var cityToCheck = prompt("Type your city name!");

// var isFound = false;

// for(var i = 0; i < cities.length;i++){


//     if(cityToCheck === cities[i]){
//         isFound = true;
//         console.log("You are Eligable");
//         break;
//     }

// }

// if(isFound === false){
//     console.log("You are not Eligable");    
// }


// var mobileBrands = ["Apple" , "Samsung" , "Redmi" , "Realme" , "Techno" , "Infinix" , "Vivo" , "Motorolla" , "Sony" , "Blueberry" , "Google Pixle" , "Nokia"];

// var mobileToCheck = prompt("Which brand do you want");

// var isFound = false;

// for(var i = 0;i < mobileBrands.length;i++){

//     if(mobileToCheck === mobileBrands[i]){
//         isFound = true;
//         console.log("Yes we have this brand available!");
//         break;
//     }
// }

// if(isFound === false){
//     console.log("We do not have this brand available!");
    
// }

var num = +prompt("Type the Number");
var limit = +prompt("How many times u want it to run");

for(var i = 1; i <= limit;i++){

    document.write(num + " x " + i + " = " + (num * i) + "<br />");
}