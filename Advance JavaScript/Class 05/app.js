// const user = {
//     name:"Ali",
//     age: 25
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const a = {x:1};
// const b = {y:2};
// const c = {
//     a:1
// }

// const t = Object.assign(c,a , b);

// console.log(c);

// const proto = {greet(){
//     return "hi";
// }};

// const obj = Object.create(proto,{
//     name:{
//         value:"Meer",
//         enumerable:true
//     }
// })

// console.log(obj.greet());
// console.log(obj.name);
// console.log(obj);


// for(var prop in obj){
//     console.log(prop);
// }

// const obj = {};

// Object.defineProperty(obj,"id" ,{
//     value:44,
//     writable:false,
//     enumerable:true
// })

// console.log(obj.id);


// obj.id = 100;

// console.log(obj.id);


// const obj = {};

// Object.defineProperties(obj, {
//     a:{
//         value:1,
//         enumerable:true,
//         writable:false
//     },
//     b:{
//         value:2,
//         enumerable:true,
//         writable:false
//     }
// })

// console.log(obj);

// const obj1 = {
//     name: "X",
// }

// Object.freeze(obj1);

// obj1.name = "Y";
// obj1.age = 25;
// delete obj1.name;

// console.log(obj1);


// const obj = {
//     n:1
// }

// Object.seal(obj);

// delete obj.n
// obj.n = 2;
// obj.y = 3;

// console.log(obj);

// console.log(Object.isFrozen(obj));
// console.log(Object.isSealed(obj));


// const a = {
//     x:1,
//     nested:{
//         z:9
//     }
// }

// const shallowCopy = {...a}

// console.log(shallowCopy);

// shallowCopy.x = 99;
// shallowCopy.nested.z = 999;

// console.log(a);




// const a = {
//     x:2,
//     y:3,
//     nested:{
//         z:9
//     }
// }

// const copy = {...a};

// copy.y = 29;
// copy.nested.z = 99

// console.log("a" , a);
// console.log("Copy" , copy);

// const a = {
//     x:1,
//     n:{
//         k:2
//     }
// }

// const s2 = Object.assign({},a)
// s2.n.k = 5

// console.log(s2);
// console.log(a);

// const obj = {
//     name:"Meer",
//     age:46,
//     subject:"Comp Sci"
// }
// console.log(Object.keys(obj));

// for(var prop in obj){
//     console.log(prop);
    
// }
const map = new Map();

map.set("a", 1);
map.set({id:2} , "Obj");

console.log(map);
console.log(map.get("a"));
console.log(map.has("a"));
map.delete("a");
console.log(map.has("a"));
map.clear()
console.log(map);

map.set(1, "one").set(2, "two");

console.log(map.size);
console.log(map);

// for(const k of map.keys()){
//     console.log(k);
    
// }
// for(const v of map.values()){
//     console.log(v);
    
// }

// for(const [k,v] of map.entries()){
//     console.log(k , v);
    
// }




// for(const keys of map.keys()){
//     console.log(keys);
    
// }
// for(const value of map.values()){
//     console.log(value);
    
// }

// for(const [k , v] of map.entries()){
//     console.log(k , v);
    
// }

// map.forEach((v, k ) =>{
//     console.log(k , v);
    
// })


// const foo = ()=>{
//     console.log("Arrow Function was called!");
    
// }

// foo()