console.log("JavaScript Connected!");




// let myFunc = (params) =>{
//     // block of code
// }


// const sayHello = ()=>{
//     console.log("Hello World!");    
// }


// sayHello();

// const greet = (name) =>{
//     console.log("Hello " + name);    
// }

// greet("Meer")

// const square = x =>{
//     return x * x
// }

// console.log(square(5));


// const square = x => x * x 

// console.log(square(10));


// const add = (a , b ) => {
//     return a + b
// };

// console.log(add(4,6));

// const multiply = (a , b) => a * b;

// console.log(multiply(4,4));


// map 


// const nums = [1,2,3,4,5];


// const doubled = nums.map(function(n){
//     return n * 2
// })

// console.log(doubled);

// const users = [
//     {name:"ali", age:20},
//     {name:"Hafeez", age:30},
//     {name:"farman", age:34},
// ];

// const names = users.map(function(user){
//     if(user.name === "Hafeez"){
//         return user
//     }
// })

// console.log(names);

// const arr = ["a" , "b" , "c" , "d"];

// const labeled = arr.map((value , index)=>{
//     return index + "-" + value;
// })

// console.log(labeled);


// const scores = [40,55,70,90];

// const grade = scores.map((s)=>{
//     return s >= 60 ? 'pass' : 'fail';
// })

// console.log(grade);

// const func = (name, age , email , password,address)=>{

//     console.log(name);
    
// }

// func(20)


// filter  array se wo elements nikalta hai jo condition pass karte hai.


// const nums = [1,4,6,7,8,10];

// const big = nums.filter((n)=>{
//     return n > 9
// })

// console.log(big);


// const users = [
//     {name:"Ali" , active:true},
//     {name:"Hafeez" , active:false},
// ];

// const active = users.filter((user)=>{
//     return user.active;
// });

// console.log(active);

// const dup = [1,2,2,3,3,1,4,5,5,5,5,5,5,5,5,5];

// const unique = dup.filter((val,i,a)=>{
//     return a.indexOf(val) === i;
// });

// console.log(unique);


// reduce

// const arr = [1,2,3,4];

// const sum = arr.reduce((acc, val)=>{
//     return acc + val
// }, 0);

// console.log(sum);

// const nums = [2,3,4];

// const prod = nums.reduce((acc , val)=>{
//     return acc * val
// }, 1)

// console.log(prod);


const letters = ["a" , "b" , "a", "c" , "b" ];

const freq = letters.reduce((acc,ch)=>{
    acc[ch] = (acc[ch] || 0) + 1;
    return acc
}, {})

console.log(freq);
