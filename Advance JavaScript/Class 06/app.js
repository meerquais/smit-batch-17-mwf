console.log("JavaScript Connected!");


// const obj = {
//     name:"Ali",
//     fn:function(){
//         console.log(this.name);        
//     }
// }

// const f = obj.fn;

// f();


// const obj = {
//     name:"Meer",
//     inner:{
//         name:"Ali",
//         fn:function(){
//             console.log(this.name)
//         }
//     }
// }

// obj.inner.fn();


// const map = new Map();

// map.set("name" , "Meer");
// map.set(1 , "Number Key");
// map.set(true , "Boolean Key");

// console.log(map.get("name"));
// console.log(map.get(1));
// console.log(map.get(true));

// const user = {id:1};
// const map = new Map();

// map.set(user , "User Data");

// console.log(map.get(user));

// set(key,value)

// const map = new Map();

// map.set("Name", "Meer");
// map.set("age", 25);

// console.log(map);

// get(key) == key ka value return karta.

// console.log(map.get("Name"));

// has(key) == check karta hai ke key exist karta hai k nahi.

// console.log(map.has("age"));
// console.log(map.has("gender"));

// delete(key) == map se ek specific key delete karta hai.

// map.delete("age");
// console.log(map);
// console.log(map.has("age"));

// clear() == saari entries ko clear/remove kardeta hai.

// map.clear();

// console.log(map);

// const map1 = new Map([
//     ["a", 1],
//     ["b" , 2]
// ]);


// console.log(map1.size);
// console.log(map1);

// console.log(map);
// console.log(map.size);


// for(var prop of map.keys()){
//     console.log(prop);
    
// }

// for(const value of map.values()){
//     console.log(value);
    
// }

// for(const [key, value] of map.entries()){
//     console.log(key , value);
    
// }

// map.forEach((value , key)=>{
//     console.log(key, value);
    
// })

// {
//     "name":"Meer",
//     "Age": 26,
//     "isStudent":false
// }



// const obj = {
//     name:"Meer",
//     age:26,
//     isStudent:false
// }

// const jsonString = JSON.stringify(obj);

// console.log(obj);
// console.log(jsonString);



// const user = {
//     name:"Ahrar",
//     marks:{
//         math:72,
//         english:50,
//         compSci:90
//     }
// }


// const json = JSON.stringify(user);

// console.log(json);

// const arr = [1,2,3,4,"Ahrar"];

// console.log(JSON.stringify(arr));

const user = {
    name:"Meer",
    age:26,
    isStudent:false
}

const jsonString = JSON.stringify(user);

console.log(jsonString);

const userData = JSON.parse(jsonString);

console.log(userData);
