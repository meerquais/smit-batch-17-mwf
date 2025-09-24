console.log("JavaScript Connected!");




// var input = prompt("Type anything.");

// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowerCase = "abcdefghijklmnopqrstuvwxyz";

// var result = "";

// var isStart = true;


// for(var i = 0; i < input.length; i++){

//     var char = input[i];

//     if(isStart){

//         var found = false;

//         for(var j = 0 ; j < lowerCase.length; j++){

//             if(char === lowerCase[j]){

//                 result += upperCase[j];
//                 found = true;
//                 break;
//                         }
//         }

//         if(!found){
//             result += char;
//         }

//         isStart = false;
//     }else{

//         var found = false;

//         for(var j = 0;j < upperCase.length; j++){

//             if(char === upperCase[j]){
//                 result += lowerCase[j];
//                 found = true;
//                 break;
//             }

//         }

//         if(!found){
//             result += char;
//         }


//      }

//       if(char === " "){
//         isStart = true;
//       }



// }


// console.log(result);



// var line = "I love JavaScript";

// var index = line.indexOf("a");
// var index1 = line.lastIndexOf("a");

// console.log(index);
// console.log(index1);



// var word = "Karachi";

// console.log(word.charAt(2));


// var sentence = "I like Mango and Mango!";

// // var replace = sentence.replace("Mango" , "Apple");
// var replace = sentence.replaceAll("Mango" , "Apple");

// console.log(replace);



// var sentence = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.
// It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.`

// // var replace = sentence.replace("World War II" , "Second World War");
// var replace = sentence.replace(/World War II/g , "Second World War");

// console.log(replace);


// var arr = [24, 53, 78, 91, 12];

// var largest = arr[0];

// for(var i = 0;i < arr.length; i++){

//     if(arr[i] > largest){
//         largest = arr[i];
        
//     }
// }

// console.log(largest);


// var arr = [24, 53, 78, 91, 12];

// var smallest = arr[0];

// for(var i = 0;i < arr.length; i++){

//     if(arr[i] < smallest){
//         smallest = arr[i];
        
//     }
// }

// console.log(smallest);





// Math.round() ===> nearest integer par round karta hai. agar .5 ya zyada tho +1 warna sirf decimals remove karta hai.


// var petrol = 265.72 ;

// console.log(Math.round(petrol));



// console.log(Math.round(4.3));
// console.log(Math.round(4.5));



// Math.floor() ====> hamesha decimals remove karta hai.


// console.log(Math.floor(4.7));
// console.log(Math.floor(4.3));


// Math.ceil() ====> hamesha +1 karta hai jab decimals milta hai tho.


// console.log(Math.ceil(4.1));
// console.log(Math.ceil(4.9));


// Random number generator!


console.log(Math.random());

console.log(Math.floor(Math.random() * 6) + 1);


console.log(Math.floor(Math.random()* (15 - 5 + 1)) + 5);


