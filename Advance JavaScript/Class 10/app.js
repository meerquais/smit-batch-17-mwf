
// let greet = ()=>{
//     console.log("Hello!");
// }

// greet()

// var arr = [
//     function(){
//         console.log("A");
        
//     },
//     function(){
//         console.log("B");
        
//     }
// ]

// arr[0]();
// arr[1]();

// var obj = {
//     sayHi: ()=>{
//         console.log("Hi!");
        
//     }
// }

// obj.sayHi()

// var execute = (fn)=>{
//     fn();
// }


// execute(()=>{
//     console.log("fn is Running!");
    
// })

// let outer = ()=>{
//     return ()=>{
//         console.log("Inner Function");
        
//     }
// }

// let x = outer();

// x();


// let execute = (sayHi , sayBye)=>{
//     sayHi();
//     sayBye();
// }

// execute(()=>{
//     console.log("Hi");
    
// }, ()=>{
//     console.log("Say Bye");
    
// })


// function hello(){
//     console.log("Hello!");
    
// }

// let copy = hello;


// copy();

// let func; 

// let isTrue = false;

// if(isTrue === true){
//     func = function(){
//         console.log("true");        
//     }
// }else{
//     func = function(){
//         console.log("false");
        
//     }
// }

// func()

// function doSomething(callback){
//     callback()
// };


// doSomething(function(){
//     console.log("Callback run huwa!");
    
// })

// let outer = ()=>{
//     return function(){
//         console.log("Returned function run huwa!");
        
//     }
// }

// let fn = outer()
// fn()

// let fn =  outer();

// fn()


// function master(callback){
//      return function(){
//      callback();
//      }    
    
   
// }

// let run = master(function(){
//     console.log("Working!");
    
// })

// run()


// function repeat(times, fn){
//     for(var i = 0;i < times;i++){
//         fn();
//     }
// }

// repeat(10, function(){
//     console.log("Hello");
    
// })

// function customFilter(arr, test){
//     let res = [];
//     for(var i =0;i<arr.length;i++){
//         if(test(arr[i])){
//             res.push(arr[i])
//         }
//     }

//     return res;
// }


// console.log(customFilter([1,2,3,4,5,6,7,5,5,6,5,8,9,10] , function(n){
//     return n > 5;
// }));


// let arr = [1,2,3];

// arr.forEach(function(item,index){
//     console.log(index , item);
    
// })

// function repeat(times,callback){
//     for(var i = 0;i<times;i++){
//         callback(i)
//     }
// }

// repeat(10,function(i){
//     console.log("Run" , i);
// })

// function callAndReturn(callback){
//     callback();
//     return 'outerReturn'
// };



// let result = callAndReturn(function(){
//     return 'innerReturn'
// });

// callAndReturn(function(){
//     console.log("inerReturn");
    
// })


// console.log(result);
