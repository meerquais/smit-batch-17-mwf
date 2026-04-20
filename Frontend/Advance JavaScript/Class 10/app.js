
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


// call ==> arg ko alag alag receive karta hai.





// function say(){
//     console.log(this.name);    
// }

// say()
// const obj = {name:"Meer"};
// say.call(obj)

// const name = "Meer";
// const age = 26;
// const position = "Trainer";


// console.log(name);


// function say(){
//     console.log(this.name);
// }

// const obj = {
//     name:"Meer",
//     age:26,
//     position:"Trainer"
// }

// say.call(obj);


// function greet(greeting, punctuation){
//     console.log(greeting + ", " + this.name + punctuation);
// }

// const user = {
//     name: "Ali"
// }

// greet.call(user, "Hello" , "!");



// const obj1 = {
//     value:10,
//     getValue: function(){
//         return this.value;
//     }
// }

// const obj2 = {
//     value:42
// }


// console.log(obj1.getValue.call(obj2));
// console.log(obj1.getValue());

// function showLength(){
//     console.log(this.length);
// }

// const obj = {0:"a" , 1:"b", 2:"c" , length:3};

// showLength.call(obj)


// function Person(name){
//     this.name = name;
// }

// function createWithCall(name){
//     const obj = {};
//     Person.call(obj, name);
//     return obj;
// }

// console.log(createWithCall("Meer"));


// apply ==> arguments array ke form mein diye jate hai.


// function sum(a , b , c ){
//     return a + b + c;
// }

// // console.log(sum(20 , 30 , 40));


// const arr = [4,6,8];

// // console.log(sum(arr[0] , arr[1] , arr[2]));

// console.log(sum.apply(null,arr));




// const numbers = [5,6,2,9];

// console.log(Math.max.apply(null, numbers));


// function Person(name,age){
//     this.name = name;
//     this.age = age
// }

// function create(name,age){
//     const obj = {};
//     Person.apply(obj, [name,age]);
//     return obj
// }

// console.log(create("Meer", 26));



// Bind ===> bind function ko call nahi karta, balki ek naya function return karta hai.


// function sayHello(){
//     console.log("hello ," + this.name);    
// }

// const person = {
//     name:"Ahrar"
// };

// const bound = sayHello.bind(person)

// bound()



// function outer(){
//     var message = "hello";
//     function inner(){
//         console.log(message);
//     }
//     return inner;
// }

// var fn = outer();

// fn()

// function makeCounter(){
//     let count = 0;

//     return function(){
//         count += 1;
//         return count;
//     }
// }


// let c1 = makeCounter();

// console.log(c1());
// console.log(c1());
// console.log(c1());
// console.log(c1());
// console.log(c1());

// let c2 = makeCounter();

// console.log(c2());
// console.log(c2());

// getter // setter 

// function createPerson(name){
//     let _name = name // private 

//     return {
//         getName: function(){
//             return _name;
//         },
//         setName: function(newName){
//             _name = newName;
//         }
//     };

// };

// let p = createPerson("Meer");


// console.log(p.getName());
// console.log(p._name);


// p.setName("Ali");

// console.log(p.getName());




// let person = {
//     name:"Ali",
//     age:22,
//     greet:function(){
//         console.log("Hello, i am " + this.name);        
//     }
// };

// person.greet();

// function Car(model , year){
//     this.model = model;
//     this.year = year;
//     this.info = function(){
//         console.log("Model: " + this.model + ", Year: " + this.year);        
//     }
// }

// let car1 = new Car("Civic", 2024);

// car1.info();


// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.speak = function(){
//     console.log(this.name + " makes a sound");    
// }

// function Dog(name){
//     Animal.call(this,name)
// }

// Dog.prototype = Object.create(Animal.prototype);

// let d = new Dog("Rex");

// d.speak();

// class Student {

//     constructor(name,roll){
//         this.name = name;
//         this.roll = roll
//     }

//     show(){
//         console.log(this.name + " - " + this.roll);        
//     }
// }

// let student1 = new Student("Ahrar" , 13);

// student1.show()

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak(){
//         console.log(this.name + " makes a sound");
//     }

// }
// class Cat extends Animal {
//     speak(){
//         console.log(this.name + " Meows");        
//     }
// }

// let cat = new Cat("Kitty");
// cat.speak();