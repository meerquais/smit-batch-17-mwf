console.log("JavaScript Connected!");


// var userInput = prompt("Type your City Name!").toLowerCase();

// var cityNames = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];

// for(var i = 0; i < cityNames.length;i++){
//     console.log(cityNames[i].toLowerCase());


//     if(cityNames[i].toLowerCase() === userInput){
//         alert("City Exists")
//         break;
//     }
// }


// var input = prompt("Type anything here!");

// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// var result = "";


// for(var i = 0; i < input.length; i++){
    
//     var char = input[i];
//     var isFound = false;


//     for(var j = 0; j < lowerCase.length;j++){

//         if(char === lowerCase[j]){
//             result += upperCase[j]
//             isFound = true;
//             break;
//         }


//     }

//     if(!isFound){
//         result += char;
//     }


//     // console.log(char);

// }

// console.log(result);


// for(var i = 0; i < input.length;i++){

//     var char = input[i];
//     var isFound = false;

//     for(var j = 0; j < upperCase.length;j++){

//         if(char === upperCase[j]){
//             result += lowerCase[j];
//             isFound = true;
//             break;
//         }
//     }


//     if(!isFound){
//         result += char;
//     }
// }

// console.log(result);




// // first letter
// for(var j = 0; j < lowerCase.length; j++){
//     if(input[0] === lowerCase[j]){
//         result += upperCase[j]
//         break;
//     }
// }

// if(result === "") {
    
//     result += input[0]; // if first char not lowercase;

// }


// // rest of the string!


// for(var i = 1; i < input.length;i++){
//     var char = input[i];
//     var isFound = false;


//     for(var j = 0; j < upperCase.length; j++){

//         if(char === upperCase[j]){
//             result += lowerCase[j];
//             isFound = true;
//             break;
//         }
//     }

//     if(!isFound){
//         result += char;
//     }
// }


// console.log(result);





// var input = prompt("Type anything here!");

// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// var result = "";

// var isStart = true; // capitalize first letter after space


// for(var i = 0; i < input.length;i++){
//     var char = input[i];

//     if(isStart){
//         var found = false;

//         for(var j = 0;j < lowerCase.length;j++){

//             if(char === lowerCase[j]){
//                 result += upperCase[j];
//                 found = true;
//                 break;
//             }
//         }
//         if(!found){
//             result += char;
//         }

//         isStart = false;
//     }else{

//         var found = false;


//         for(var j = 0; j < upperCase.length;j++){
//             if(char === upperCase[j]){
//                 result += lowerCase[j];
//                 found = true;
//                 break
//             }
//         }

//         if(!found){
//             result += char;
//         }

//     }


//     if(char == " "){
//         isStart = true
//     }
// };

// console.log(result);


// var str = "Hello World!";

// console.log(str.length);


// var sentence = "JavaScript is Powerful!";

// var sliced = sentence.slice(0,10);

// console.log(sliced);


// var str = "Hello World!";

// var count = 0;

// for(var i = 0; i < str.length;i++){
//     count++;
// }

// console.log(count);


var str = "JavaScript is fun!";

var result = "";

for(var i = 0;i < 10; i++){
    result += str[i];
}

console.log(result);




