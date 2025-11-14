console.log("Js Connected!");

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
// };

// plan1.discountMonths = [6,7,11];

// console.log("The cost of the " + plan1.name + " package is $" + plan1.price + " per month.");

// console.log(plan1);

// var mo = plan1.discountMonths[2];

// console.log(mo);

// plan1.price = 5.99;

// console.log(plan1);

// console.log("name" in plan1);
// console.log("students" in plan1);

// plan1.student = "Meer";

// console.log(plan1);

// delete plan1.student;

// // console.log(plan1);

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [6, 7 ,10],
// };


// function calcAnnual(){
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();
    
//     for(var i = 0; i < plan1.discountMonths.length; i++){

//         if(plan1.discountMonths[i] === thisMonth){

//             bestPrice = plan1.price * .8;
//             break;
//         }


//     }

//     return bestPrice * 12
// }


// var disc = calcAnnual();

// console.log(disc);


// function calcAnnual(percentIfDisc){
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();
    
//     for(var i = 0; i < plan1.discountMonths.length; i++){

//         if(plan1.discountMonths[i] === thisMonth){

//             bestPrice = plan1.price * percentIfDisc;
//             break;
//         }


//     }

//     return bestPrice * 12
// }


// var disc = calcAnnual(.9);

// console.log(disc);


// var plan1 = {
//     name: "basic",
//     price: 3.99,
//     space:100,
//     data:1000,
//     pages: 10,
//     discountMonths: [6,7,8,9,11],
//     calcAnnual: function(prescentIfDisc){

//         var bestPrice = plan1.price;
//         var currDate = new Date();
//         var thisMonth = currDate.getMonth();

//         for(var i =0 ; i < plan1.discountMonths.length;i++){

//             if(plan1.discountMonths[i] === thisMonth){

//                 bestPrice = plan1.price * prescentIfDisc
//                 break;
//             }
//         }

//         return bestPrice * 12;
//     }
// }

// var annual = plan1.calcAnnual(.85);

// console.log(annual);


// var plan1 = {
//     name:"basic",
//     price:3.99,
//     discountMonth:[9,10],
//     calcAnnual: function(precentIfDisc){

//         var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMonth = currDate.getMonth();

//         for(var i = 0 ; i < this.discountMonth.length;i++){

//             if(this.discountMonth[i] === thisMonth){
//                 bestPrice = this.price * precentIfDisc;
//                 break
//             }

//         }

//         return bestPrice * 12;
//     }
// }

// var annual = plan1.calcAnnual(.95);

// console.log(Math.floor(annual));

// function Foo(){

// }


function Plan(name,price,space,data,pages){
    this.name = name;
    this.price = price;
    this.space = space;
    this.data = data;
    this.pages = pages;
};

var plan1 = new Plan("Basic",3.99,100,1000,10);
var plan2 = new Plan("Prof",5.99,500,5000,50);
var plan3 = new Plan("Ult",9.99,2000,20000,500);

console.log(plan1);
console.log(plan2);
console.log(plan3);

console.log(plan1.name);
console.log(plan2.name);

