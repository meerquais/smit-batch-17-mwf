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


// const letters = ["a" , "b" , "a", "c" , "b" ];

// const freq = letters.reduce((acc,ch)=>{
//     acc[ch] = (acc[ch] || 0) + 1;
//     return acc
// }, {})

// console.log(freq);

// find 

// const arr = [1,3,5,9];

// const firstEven = arr.find((num)=>{
//     return num % 2 === 0;
// })

// console.log(firstEven);

// const users = [
//     {id:1},
//     {id:2},
//     {id:3,
//         name:"Hafeez"

//     },
//     {id:4},
//     {
//         id:3,
//         name:"Meer"
//     },
// ]

// const user = users.find((u)=>{
//     return u.id === 3;
// })

// console.log(user);


// findIndex

// const arr = [2,3,4,6,7];

// console.log(arr.findIndex((n)=>{
//     return n % 2 === 1
// }));


// const users = [
//     {id:1},
//     {id:2},
//     {id:4},
// ]

// console.log(users.findIndex((u)=>{
//     return u.id === 3;
// }));


// const arr = [1,2,3];

// const idx = arr.findIndex((x)=>{
//     return x === 2;
// });

// if(idx !== -1){
//     arr.splice(idx , 1);
// };

// console.log(arr);


// console.log([1,3,5].some((n)=>{
//     return n % 2 === 0;
// }));

// console.log([1,4,5].some((n)=>{
//     return n % 2 === 0;
// }));

// const users = [
//     {active:false},
//     {active:false}
// ]

// console.log(users.some((u)=>{
//     return u.active;}));



// const arr = [2,3,6]

// console.log(arr.every((n)=>{
//     return n % 2 === 0
// }));

// console.log(arr.every((n)=>{
//     return n % 2 === 0
// }));


// const users = [
//     {verfied:true},
//     {verfied:false}
// ]

// console.log(users.every((u)=>{
//     return u.verfied
// }));



// const arr = [10,20,30];

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// console.log(a);
// console.log(b);
// console.log(c);

// const [a , b , c] = arr

// console.log(a , b , c);


// const arr = [1,2,3,4];

// const [x , ,z] = arr;

// console.log(x, z);

// const arr = [];

// const [ a = 1 , b = 2] = arr;

// console.log(a , b );



// let p = 1 

// let q = 2;


// [p , q] = [q , p];

// console.log(p , q);

// const nested = [1, [2,3] , 4];

// const [one , [two , three] ,four] = nested;

// console.log(one , two , three , four);


// const user = {
//     name: "Ali",
//     age:25
// };

// const {name , age} = user;

// console.log(name , age);

// const user = {
//     name : "ahrar",
//     city: "Karachi"
// }

// const {name = "guest" , city = "Unknown" } = user;

// console.log(name , city);


// const obj = {
//     id:1,
//     title:"Book"
// }

// const {title: bookTitle , id:bookId} = obj;

// console.log(bookTitle , bookId);


const student = {
    name:"Ali",
    age:25,
    course:"MWA"
};

const {name: studentName , age: studentAge , course: studentCourse} = student;


console.log(studentName , studentAge , studentCourse);
