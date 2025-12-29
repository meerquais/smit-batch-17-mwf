
// function sum(num1 , ...nums){
//     return nums.reduce((acc, n)=>{
//         return acc + n;
//     } , 0)
// };

// console.log(sum(1,2,3,4,5));




// function names(name1,name2,name3,...names){

//     console.log(name1);
//     console.log(name2);
//     console.log(name3);
//     console.log(names);
// }


// names("Ali" , "hafeez" , "Minhaj" , "Meer" , "Kashan" , "Abdullah" , "hamza")

// function greet(greeting, ...names){
//     return greeting + " " + names.join(', ')
    
// }

// console.log(greet("Hello" , "Ali" , "hafeez" , "minhaj" , "Meer"));

// const joiner = (...parts)=>{
//    return parts.join("-");    
// }

// console.log(joiner("a" , "b" , "c"));


// function getTop(first, ...rest){
//     if(rest.length >3){
//         return "too many";
//     }

//     return rest
// }


// console.log(getTop(0,1,2));


// function handle([first, ...others]){
//     console.log(first, others);
    
// }

// handle([10,20,30])

// const user = {
//     name:"A",
//     age:20,
//     role:"Dev"
// }

// const {name, ...others} = user;

// console.log(name, others);

// const obj = {
//     a:1,
//     b:2,
//     c:{
//         x:9
//     }
// }

// const {a, ...rest} = obj;

// rest.c.x = 99;
// rest.b = 22;

// console.log(a, rest);

// console.log(obj.c);
// console.log(obj.b);


// function create({id, ...props}){
//     return {id , createAt: Date.now(), ...props}
// };

// console.log(create({id:1, name:"x" , age:20}));



// const a = [1,2,3];
// const copy = [...a];

// console.log(copy);
// console.log(a === copy);


// const a = [1,2];
// const b = [3,4];

// const all = [...a , ...b];

// console.log(all);


// const base = [2,3];

// const newArr = [1, ...base , 4];

// console.log(newArr);



// function sum(a,b,c){
//     return a + b + c;
// }

// const nums = [ 1 , 2 ,3 ];

// console.log(sum(...nums));


// const chars = [..."hello"];

// console.log(chars);


// const arr = [{x:1}];

// const copy = [...arr];

// copy[0].x = 9;

// console.log(arr[0].x);


// console.log("start");

// function SayHi(){
//     console.log("hi");
// }

// SayHi();
// console.log("end");



// test();


// function test(){
//     console.log("Working!");    
// }

console.log(student);


let student = "Meer"
