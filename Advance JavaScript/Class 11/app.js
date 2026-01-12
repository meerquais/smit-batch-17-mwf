console.log("JavaScript Connected!");


// async function test() {
//     return "Hello";
// };

// console.log(test());


// function getNumber(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(20);
//         },1000)
//     });
// };

// async function showNumber() {
//     let num = await getNumber();
//     console.log(num);
// }

// showNumber();



// function getNumber(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(20);
//         },1000)
//     });
// };



// async function test() {
//     let result = getNumber();
//     console.log(result);
// };

// test()

// console.log("test done");


// async function getUsers() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
    
//     let data = await response.json()
//     console.log(data);
// }

// getUsers();

// async function getPost() {
//     try {
//             let res = await fetch("https://wrong-url.com");
//     let data = await res.json();
//     console.log(data);
    
//     } catch (error) {
//         console.log("Error aya bhai: " , error.message);        
//     }
// }

// getPost()

// async function processData() {
//      let a = await Promise.resolve(5);

//      let b = await Promise.resolve(10);

//      let sum = a + b;
//      console.log(sum);     
// }

// processData();

// async function getName() {
//     return "Meer";
// };

// async function showName() {
//     let name = await getName();
//     console.log(name);    
// }
// showName()



// let promise = new Promise((resolve , reject)=>{
//         // async kaam
// })


// let promise = new Promise((resolve , reject)=>{
//     resolve("Kaam Complete hogaya!");
// })

// promise.then((result)=>{
//     console.log(result);
    
// })

// let promise = new Promise((res)=>{
//     setTimeout(()=>{
//         res("2 second baad aya")
//     }, 2000);
// });

// promise.then((data)=>{
//     console.log(data);
    
// })

// let promise = new Promise((resolve , reject)=>{
//     reject("Error aa gaya");
// })

// promise.catch((error)=>{
//     console.log(error);
    
// })

// let age = 20;

// let checkAge = new Promise((resolve , reject)=>{
//     if(age >=18){
//         resolve("allow");
//     }else{
//         reject("Not Allowed!");
//     }
// });

// checkAge.then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


// fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error: ", err);
    
// })

// let p1 = Promise.resolve(1)
// let p2 = Promise.resolve(2)
// let p3 = Promise.resolve(3)


// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result);
    
// })