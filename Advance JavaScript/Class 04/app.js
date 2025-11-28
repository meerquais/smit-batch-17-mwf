// console.log(Object === {});

// let obj = {
//   name: "Meer",
//   age: 25,
//   email: "meer@gmail.com",
// };

// console.log(obj);

// console.log(obj.name); // Dot notation
// console.log(obj["age"]); // Bracket Notation.

// obj.month = 7;
// console.log(obj);

// obj.month = "Sep";

// console.log(obj);

// delete obj.age;

// console.log(obj);

// console.log("names" in obj);

// let plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space:100,
//     data:1000,
//     pages:10,
//     discountMonths: [6,7,8,10]
// }

// function calcAnnual(percentIfDisc){
//     let bestPrice = plan1.price;
//     let currDate = new Date();
//     let thisMonth = currDate.getMonth();

//     for(var i =0; i < plan1.discountMonths.length; i++){
//         if(plan1.discountMonths[i] === thisMonth){
//             bestPrice = plan1.price * percentIfDisc;
//             break;
//         }
//     }
//     return bestPrice * 12
// }

// let annual = calcAnnual(.85);

// console.log(annual);

// let plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   data: 1000,
//   pages: 10,
//   discountMonths: [6, 7, 8, 10],
//   calcAnnual: function(percentIfDisc){
//     let bestPrice = this.price;
//     let currDate = new Date();
//     let thisMonth = currDate.getMonth();

//     for(var i = 0; i < this.discountMonths.length;i++){
//         if(this.discountMonths[i] === thisMonth){
//             bestPrice = this.price * percentIfDisc
//             break;
//         }
//     }

//         return Math.floor( bestPrice * 12);
//   }
// };


// var calcAnnual = plan1.calcAnnual(.85);

// console.log(calcAnnual);

// let plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     data: 1000,
//     pages: 10,
// }
// let plan2 = {
//     name: "Prof",
//     price: 3.99,
//     space: 100,
//     data: 1000,
//     pages: 10,
// }

// let plan3 = {
//     name: "Ultimate",
//     price: 3.99,
//     space: 100,
//     data: 1000,
//     pages: 10,
// }

// function Plan(name,price,space,data,pages){
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.data = data;
//     this.pages = pages;
// }

// let plan1 = new Plan("Basic" , 3.99 , 100 , 1000 , 10);
// let plan2 = new Plan("Prof" , 3.99 , 100 , 1000 , 10);
// let plan3 = new Plan("Ultimate" , 3.99 , 100 , 1000 , 10);

// console.log(plan1);
// console.log(plan2);
// console.log(plan3);


// function Student(name,age,course,email,rollNumber){

//     this.studentName = name;
//     this.studentAge = age;
//     this.studentCourse = course;
//     this.studentEmail = email;
//     this.studentRollNumber = rollNumber;

// }


// let student1 = new Student("Ahrar" , 13 , "Modern Web n App" , "Ahrar@gmail.com" , 1)

// console.log(student1);


// function Plan(name , price , space , data , pages , discountMonths){

//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.data =  data;
//   this.pages = pages;
//   this.discountMonths = discountMonths;

//   this.calcAnnual = function(percentIfDisc){
//     let bestPrice = this.price;
//     let currDate = new Date();
//     let thisMonth = currDate.getMonth();
//     for(var i = 0; i < this.discountMonths.length;i++){
//       if(this.discountMonths[i] === thisMonth){
//         bestPrice = this.price * percentIfDisc
//         break;
//       }
//     }
//     return bestPrice * 12;
//     }
// }


// let p1 = new Plan("Basic" , 3.99, 100, 1000 , 10,[6,7,9]);

// let p2 = new Plan("Premium" , 5.99 , 500, 5000 , 50 , [7,8,9]);

// let p3 = new Plan("Ultimate" , 9.99 , 2000 , 20000 , 500 , [8,9,10]);


// console.log(p1);

// let plan1Annual = p1.calcAnnual(.95);
// let plan2Annual = p2.calcAnnual(.85);
// let plan3Annual = p3.calcAnnual(.75);

// console.log(plan1Annual);
// console.log(plan2Annual);
// console.log(plan3Annual);


// function Plan(name, price , space , data ,  pages , discountMonths){
//   this.name = name ;
//   this.price = price;
//   this.space = space;
//   this.data = data;
//   this.pages = pages;
//   this.discountMonths = discountMonths;
// }

// let p1 = new Plan("Basic" , 3.99 , 100 , 1000, 10 ,  [ 6,7]);
// let p2 = new Plan("Premium" , 5.99 , 500 , 5000, 50 ,  [ 6,7,10]);
// let p3 = new Plan("Ultimate" , 9.99 , 2000 , 20000, 500 ,  [ 6,7]);


// Plan.prototype.calcAnnual = function(percentIfDisc){
//   let bestPrice = this.price;
//   let currDate = new Date();
//   let thisMonth = currDate.getMonth();
//   for(var i = 0; i < this.discountMonths.length; i++){
//     if(this.discountMonths[i] === thisMonth){
//       bestPrice = this.price * percentIfDisc
//       break;
//     }

//   }
//   return bestPrice * 12
// };


// let a = p1.calcAnnual(.8);
// let b = p2.calcAnnual(.85);

// console.log(a);
// console.log(b);

// Plan.prototype.cancellable = true;


// console.log(p1.cancellable);
// console.log(p2.cancellable);

// console.log(p1);
// console.log(p2);

// p1.cancellable = false;

// console.log(p1.cancellable);
// console.log(p2.cancellable);

// console.log(p1);
// console.log(p2);

// console.log(p1.hasOwnProperty("cancellable"));
// console.log(p2.hasOwnProperty("cancellable"));

// console.log("cancellabe" in p1);
// console.log("cancellabe" in p2);





// // step 1 : constructor Function

// function Plan(name , price , space , data , pages , discountMonths){
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.data = data;
//   this.pages = pages;
//   this.discountMonths = discountMonths;
// }
// // step 2 : prototype property (shared by all objects)
// Plan.prototype.cancellabe = true;

// //step 3 : prototype method (shared by all objects)

// Plan.prototype.calcAnnual = function(percentIfDisc){
//   let bestPrice = this.price;
//   let currDate = new Date();
//   let thisMonth = currDate.getMonth();
//   for(var i=0;i < this.discountMonths.length; i++){
//     if(this.discountMonths[i] === thisMonth){
//       bestPrice = this.price * percentIfDisc;
//       break;
//     }
//   }

//   return bestPrice * 12;
// }

// // step 4 : create 3 plan objects

// let basic = new Plan("basic" , 3.99 , 100 , 1000 , 10, [6,7]);
// let premium = new Plan("premium" , 5.99, 500, 5000 , 50 , [6,7,10]);
// let ultimate = new Plan("Ultimate" , 9.99 , 2000, 20000 , 500 , [6,7]);

// // step 5 : use prototype method 

// console.log("Basic Plan Annual Price: " , basic.calcAnnual(0.85));
// console.log("Premium Plan Annual Price: " , premium.calcAnnual(0.85));

// // step 6 : check shared prototype property

// console.log("Basic Cancellable: " , basic.cancellabe);
// console.log("Premium Cancellable: " , premium.cancellabe);

// // step 7 : override prototype property for one object

// basic.cancellabe = false;

// console.log("Basic cancellable(After override): " , basic.cancellabe);
// console.log("Premium cancellable(still shared): " , premium.cancellabe);

// //step 8 : check if property exists in object or comes from prototype

// console.log("Has own property 'cancellable'? (Basic): " , basic.hasOwnProperty("cancellable"));
// console.log(basic);

// console.log("Has own property 'cancellable'? (premium): " , premium.hasOwnProperty("cancellable"));


// console.log("Prototype of Basic:" , Object.getPrototypeOf(basic) === Plan.prototype);





// "propertyName" in objectName ; 

// var plan1 = {
//   name: "basic",
//   price:3.99,
//   space:100
// }


// console.log("price" in plan1);
// console.log("location" in plan1);


// var plan1 = {
//   name: "basic",
//   price:3.99,
//   space:100
// }

// plan1.calcAnnual = function(){
//   return this.price * 12
// }


// console.log("calcAnnual" in plan1);


// function Plan(name,price){
//   this.name = name;
//   this.price = price
// }

// Plan.prototype.cancellable = true;


// let p1 = new Plan("Basic" , 3.99);


// console.log("cancellable" in p1);

// console.log(p1.hasOwnProperty("cancellable"));

// // p1.cancellable = false;

// console.log("cancellable" in p1);

// console.log(p1.hasOwnProperty("cancellable"));


// var listOfProperties = [];

// for(var prop in p1){
//   listOfProperties.push(prop)
// }

// console.log(listOfProperties);


// var ownProps = [];

// for(var prop in p1){
//   if(p1.hasOwnProperty(prop)){
//     ownProps.push(prop)
//   }
// }

// console.log(ownProps);



let obj = {
  name : "Meer",
  age: 25,
  email:"meerquais@gmail.com",
  cnic:12345678910,
  password:123456,
  hasCar: false,
};


let arr = [];

for(var key in obj){
  arr.push(key)
}

console.log(arr);
