// console.log(Object === {});

let obj = {
  name: "Meer",
  age: 25,
  email: "meer@gmail.com",
};

console.log(obj);

console.log(obj.name); // Dot notation
console.log(obj["age"]); // Bracket Notation.

obj.month = 7;
console.log(obj);

obj.month = "Sep";

console.log(obj);

delete obj.age;

console.log(obj);

console.log("names" in obj);

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


function Student(name,age,course,email,rollNumber){

    this.studentName = name;
    this.studentAge = age;
    this.studentCourse = course;
    this.studentEmail = email;
    this.studentRollNumber = rollNumber;

}


let student1 = new Student("Ahrar" , 13 , "Modern Web n App" , "Ahrar@gmail.com" , 1)

console.log(student1);
