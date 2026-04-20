console.log("JavaScript Conntected!");


// var fruits = ["Apple" , "Mango" , "Banana" , "Orange"];

// console.log(fruits);


// fruits[2] = "Peach";

// console.log(fruits);


// var fruits = [];

// console.log(fruits);

// fruits[0] = "Apple";
// fruits[1] = "Mango";
// fruits[7] = "Orange";

// console.log(fruits);

// Array Methods 

// .POP() ==> Removes last element of array and returns it.

// var pets = ["Dog" , "Cat", "Mouse" , "Snake"];
// console.log(pets);

// var removed = pets.pop();

// console.log(pets);
// console.log(removed);

// .PUSH() ===> Adds Elements to the last of array.


// var pets = ["Dog" , "Cat"];

// console.log(pets);

// pets.push("Birds" , "Snake");
// console.log(pets);


// .SHIFT() ===> Removes element from the start of an array.

// var pets = ["dog" , "cat" , "bird"];

// console.log(pets);

// var removed = pets.shift();

// console.log(removed);
// console.log(pets);

// .UNSHIFT() ===> Adds Elements from the start of an array.

// var pets = ["cat" , "bird"];

// console.log(pets);

// pets.unshift("dog" , "fish");

// console.log(pets);

// .SPLICE() ===> Modify Array.

// array.splice(startIndex,DeleteCount,Items);

// startIndex = kahan se change karna hai. 
// DeleteCount = kitne remove karne hain.
// baad ke items jo add karne hai.

// removing + inserting

// var pets = ["dog" , "cat" , "fly" , "bug" , "ox"];

// console.log(pets);


// pets.splice(2,2,"duck" , "emu");
// console.log(pets);


// inserting in a array.

// var pets = ["dog" , "cat" , "fly" , "bug" , "ox"];

// console.log(pets);

// pets.splice(2,0,"duck" , "emu");

// console.log(pets);


// removing 

// var pets = ["dog" , "cat" , "fly" , "bug" , "ox"];

// console.log(pets);

// pets.splice(2,2);

// console.log(pets);

// .splice(startIndex,deleteCount,items);


// var fruits = ["Apple" , "Mango" , "Orange" , "Strawberry"];

// console.log(fruits);

// fruits.splice(2,1,"Blueberry" , "Grapes");

// console.log(fruits);

// var fruits = ['Apple', 'Mango', 'Blueberry', 'Grapes', 'Strawberry'];

// console.log(fruits);

// fruits.splice(3,2);
// console.log(fruits);


// var fruits = ['Apple', 'Mango', 'Blueberry', 'Grapes', 'Strawberry'];
// console.log(fruits);

// fruits.splice(2,0,"Watermelon" , "Dragonfruit");

// console.log(fruits);


// SLICE() ===> extract copy, array ki copy!


// var fruits = ['Apple', 'Mango', 'Blueberry', 'Grapes', 'Strawberry'];

// // var copyFruits = fruits.slice(StartIndex,EndIndex);

// var copyFruits = fruits.slice(1,4);

// console.log(fruits);
// console.log(copyFruits);

// var pets = ["dog" , "cat" , "fly" , "bug", "ox"];

// var noPets = pets.slice(2,4);

// console.log(noPets);
// console.log(pets);

var cars = ["Supra" , "Rolls Royce" , "Grande" , "BMW" , "Mehran"];

// var lastTwoCars = cars.slice(-2);

// console.log(lastTwoCars);
// console.log(cars);

var copyArr = cars.slice(0);

console.log(copyArr);



















